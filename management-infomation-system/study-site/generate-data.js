#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const sourceRoot = path.resolve(__dirname, "..");
const outputFile = path.join(__dirname, "data.js");

const sourceFiles = {
  keyTerms: path.join(sourceRoot, "key-terms.md"),
  essays: path.join(sourceRoot, "essay-answers.md"),
  summaries: path.join(sourceRoot, "summary.md"),
};

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8").replace(/\r\n/g, "\n");
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function stripMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .trim();
}

function formatInline(text) {
  const tokenPattern = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let cursor = 0;
  let result = "";
  let match = tokenPattern.exec(text);

  while (match) {
    result += escapeHtml(text.slice(cursor, match.index));

    if (match[0].startsWith("**")) {
      result += `<strong class="term">${escapeHtml(match[0].slice(2, -2))}</strong>`;
    } else {
      result += `<code>${escapeHtml(match[0].slice(1, -1))}</code>`;
    }

    cursor = match.index + match[0].length;
    match = tokenPattern.exec(text);
  }

  result += escapeHtml(text.slice(cursor));
  return result;
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => stripMarkdown(cell.trim()));
}

function isTableDivider(cells) {
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell.replace(/\s+/g, "")));
}

function normalizeTitle(title) {
  return title.replace(/\s+\d+-\d+p(?:,\s*\d+-\d+p)?$/u, "").trim();
}

function parseWeekHeading(line) {
  const match = line.match(/^##\s+Week\s+(\d+):\s+(.+)$/u);
  if (!match) {
    return null;
  }

  return {
    week: Number(match[1]),
    rawTitle: match[2].trim(),
    title: normalizeTitle(match[2].trim()),
  };
}

function parseKeyTerms(content) {
  const lines = content.split("\n");
  const weeks = [];
  let currentWeek = null;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const weekHeading = parseWeekHeading(line);

    if (weekHeading) {
      currentWeek = { ...weekHeading, terms: [] };
      weeks.push(currentWeek);
      continue;
    }

    if (!currentWeek || !line.trim().startsWith("|")) {
      continue;
    }

    const cells = splitTableRow(line);
    if (cells.length < 3 || isTableDivider(cells) || cells[0] === "용어") {
      continue;
    }

    currentWeek.terms.push({
      term: cells[0],
      definition: cells[1],
      note: cells[2],
    });
  }

  return weeks;
}

function parseEssays(content) {
  const lines = content.split("\n");
  const weeks = [];
  let currentWeek = null;
  let currentQuestion = null;

  function flushQuestion() {
    if (!currentWeek || !currentQuestion) {
      return;
    }

    currentWeek.essays.push({
      question: currentQuestion.question,
      answer: currentQuestion.lines.join("\n").trim(),
    });
    currentQuestion = null;
  }

  for (const line of lines) {
    const weekHeading = parseWeekHeading(line);
    if (weekHeading) {
      flushQuestion();
      currentWeek = { ...weekHeading, essays: [] };
      weeks.push(currentWeek);
      continue;
    }

    const questionMatch = line.match(/^###\s+Q(\d+):\s+(.+)$/u);
    if (questionMatch) {
      flushQuestion();
      currentQuestion = {
        number: Number(questionMatch[1]),
        question: questionMatch[2].trim(),
        lines: [],
      };
      continue;
    }

    if (currentQuestion) {
      currentQuestion.lines.push(line);
    }
  }

  flushQuestion();
  return weeks;
}

function renderTable(lines) {
  const rows = lines
    .map(splitTableRow)
    .filter((cells) => cells.length > 0 && !isTableDivider(cells));

  if (rows.length < 2) {
    return "";
  }

  const [headers, ...body] = rows;
  const thead = `<thead><tr>${headers
    .map((cell) => `<th>${formatInline(cell)}</th>`)
    .join("")}</tr></thead>`;
  const tbody = `<tbody>${body
    .map(
      (cells) =>
        `<tr>${cells.map((cell) => `<td>${formatInline(cell)}</td>`).join("")}</tr>`
    )
    .join("")}</tbody>`;

  return `<div class="table-scroll"><table class="summary-table">${thead}${tbody}</table></div>`;
}

function renderList(lines, ordered) {
  const tag = ordered ? "ol" : "ul";
  const itemPattern = ordered ? /^\s*\d+\.\s+/u : /^\s*-\s+/u;

  return `<${tag} class="summary-list">${lines
    .map((line) => line.replace(itemPattern, "").trim())
    .map((item) => `<li>${formatInline(item)}</li>`)
    .join("")}</${tag}>`;
}

function markdownToHtml(lines) {
  const html = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.trim().startsWith("|")) {
      const tableLines = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        tableLines.push(lines[index]);
        index += 1;
      }
      html.push(renderTable(tableLines));
      continue;
    }

    if (/^\s*-\s+/u.test(line)) {
      const listLines = [];
      while (index < lines.length && /^\s*-\s+/u.test(lines[index])) {
        listLines.push(lines[index]);
        index += 1;
      }
      html.push(renderList(listLines, false));
      continue;
    }

    if (/^\s*\d+\.\s+/u.test(line)) {
      const listLines = [];
      while (index < lines.length && /^\s*\d+\.\s+/u.test(lines[index])) {
        listLines.push(lines[index]);
        index += 1;
      }
      html.push(renderList(listLines, true));
      continue;
    }

    const paragraph = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].trim().startsWith("|") &&
      !/^\s*-\s+/u.test(lines[index]) &&
      !/^\s*\d+\.\s+/u.test(lines[index])
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }

    html.push(`<p>${formatInline(paragraph.join(" "))}</p>`);
  }

  return html.join("");
}

function parseSummary(content) {
  const lines = content.split("\n");
  const weeks = [];
  let currentWeek = null;
  let currentSection = null;

  function flushSection() {
    if (!currentWeek || !currentSection) {
      return;
    }

    const html = markdownToHtml(currentSection.lines);
    if (html) {
      currentWeek.sections.push({
        heading: currentSection.heading,
        html,
      });
    }

    currentSection = null;
  }

  function flushWeek() {
    flushSection();
    if (currentWeek) {
      weeks.push(currentWeek);
      currentWeek = null;
    }
  }

  for (const line of lines) {
    const weekHeading = parseWeekHeading(line);
    if (weekHeading) {
      flushWeek();
      currentWeek = { ...weekHeading, sections: [] };
      continue;
    }

    const sectionMatch = line.match(/^###\s+(.+)$/u);
    if (sectionMatch) {
      flushSection();
      currentSection = {
        heading: sectionMatch[1].trim(),
        lines: [],
      };
      continue;
    }

    if (currentWeek && currentSection) {
      currentSection.lines.push(line);
    }
  }

  flushWeek();
  return weeks;
}

function buildDataset() {
  const keyTerms = parseKeyTerms(readText(sourceFiles.keyTerms));
  const essays = parseEssays(readText(sourceFiles.essays));
  const summaries = parseSummary(readText(sourceFiles.summaries));

  const weekNumbers = Array.from(
    new Set([
      ...keyTerms.map((week) => week.week),
      ...essays.map((week) => week.week),
      ...summaries.map((week) => week.week),
    ])
  ).sort((left, right) => left - right);

  const keyTermMap = new Map(keyTerms.map((week) => [week.week, week]));
  const essayMap = new Map(essays.map((week) => [week.week, week]));
  const summaryMap = new Map(summaries.map((week) => [week.week, week]));

  const weeks = weekNumbers.map((weekNumber) => {
    const keyTermWeek = keyTermMap.get(weekNumber);
    const essayWeek = essayMap.get(weekNumber);
    const summaryWeek = summaryMap.get(weekNumber);

    const title =
      summaryWeek?.title || keyTermWeek?.title || essayWeek?.title || `Week ${weekNumber}`;

    return {
      week: weekNumber,
      title,
      summaryTitle: summaryWeek?.rawTitle || title,
      terms: keyTermWeek?.terms || [],
      essays: essayWeek?.essays || [],
      summary: summaryWeek?.sections || [],
    };
  });

  return {
    generatedAt: new Date().toISOString(),
    weekCount: weeks.length,
    sourceFiles: {
      keyTerms: "../key-terms.md",
      essays: "../essay-answers.md",
      summaries: "../summary.md",
    },
    stats: {
      totalTerms: weeks.reduce((sum, week) => sum + week.terms.length, 0),
      totalEssays: weeks.reduce((sum, week) => sum + week.essays.length, 0),
      totalSummarySections: weeks.reduce((sum, week) => sum + week.summary.length, 0),
    },
    weeks,
  };
}

const dataset = buildDataset();
const output = `window.MIS_DATA = ${JSON.stringify(dataset, null, 2)};\n`;

fs.writeFileSync(outputFile, output, "utf8");
console.log(`Generated ${path.relative(process.cwd(), outputFile)}`);
