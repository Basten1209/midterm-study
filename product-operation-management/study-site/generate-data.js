#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const sourceRoot = path.resolve(__dirname, "..");
const outputFile = path.join(__dirname, "data.js");

const sourceFiles = [
  {
    key: "lecture",
    label: "Lecture",
    file: "../summaries/lecture_summary.md",
    absolutePath: path.join(sourceRoot, "summaries", "lecture_summary.md"),
  },
  {
    key: "podcast",
    label: "Podcast",
    file: "../summaries/podcast_summary.md",
    absolutePath: path.join(sourceRoot, "summaries", "podcast_summary.md"),
  },
  {
    key: "applied_learning",
    label: "Applied Learning",
    file: "../summaries/applied_learning_summary.md",
    absolutePath: path.join(sourceRoot, "summaries", "applied_learning_summary.md"),
  },
  {
    key: "discussion_topics",
    label: "Discussion Topics",
    file: "../summaries/discussion_topics_summary.md",
    absolutePath: path.join(sourceRoot, "summaries", "discussion_topics_summary.md"),
  },
  {
    key: "quiz",
    label: "Quiz",
    file: "../summaries/quiz_summary.md",
    absolutePath: path.join(sourceRoot, "summaries", "quiz_summary.md"),
  },
];

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8").replace(/\r\n/g, "\n");
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatInline(text) {
  const tokenPattern = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let cursor = 0;
  let result = "";
  let match = tokenPattern.exec(text);

  while (match) {
    result += escapeHtml(text.slice(cursor, match.index));

    if (match[0].startsWith("**")) {
      result += `<strong>${escapeHtml(match[0].slice(2, -2))}</strong>`;
    } else {
      result += `<code>${escapeHtml(match[0].slice(1, -1))}</code>`;
    }

    cursor = match.index + match[0].length;
    match = tokenPattern.exec(text);
  }

  result += escapeHtml(text.slice(cursor));
  return result;
}

function renderList(lines, ordered) {
  const tag = ordered ? "ol" : "ul";
  const itemPattern = ordered ? /^\s*\d+\.\s+/u : /^\s*-\s+/u;

  return `<${tag}>${lines
    .map((line) => line.replace(itemPattern, "").trim())
    .map((item) => `<li>${formatInline(item)}</li>`)
    .join("")}</${tag}>`;
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isTableDivider(cells) {
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell.replace(/\s+/g, "")));
}

function renderTable(lines) {
  const rows = lines
    .map(splitTableRow)
    .filter((cells) => cells.length > 0 && !isTableDivider(cells));

  if (rows.length === 0) {
    return "";
  }

  const [headers, ...body] = rows;
  const thead = `<thead><tr>${headers
    .map((cell) => `<th>${formatInline(cell)}</th>`)
    .join("")}</tr></thead>`;
  const tbody = `<tbody>${body
    .map((cells) => `<tr>${cells.map((cell) => `<td>${formatInline(cell)}</td>`).join("")}</tr>`)
    .join("")}</tbody>`;

  return `<div class="table-scroll"><table>${thead}${tbody}</table></div>`;
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

    const subheadingMatch = line.match(/^###\s+(.+)$/u);
    if (subheadingMatch) {
      html.push(`<h4>${formatInline(subheadingMatch[1].trim())}</h4>`);
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
      !/^\s*\d+\.\s+/u.test(lines[index]) &&
      !/^###\s+/.test(lines[index])
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
    const weekMatch = line.match(/^#\s+Week\s+(\d+)\s*$/u);
    if (weekMatch) {
      flushWeek();
      currentWeek = {
        week: Number(weekMatch[1]),
        sections: [],
      };
      continue;
    }

    const sectionMatch = line.match(/^##\s+(.+)$/u);
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
  const parsedCategories = sourceFiles.map((sourceFile) => {
    const weeks = parseSummary(readText(sourceFile.absolutePath));
    return {
      ...sourceFile,
      weeks,
    };
  });

  const weekNumbers = Array.from(
    new Set(parsedCategories.flatMap((category) => category.weeks.map((week) => week.week)))
  ).sort((left, right) => left - right);

  const weeks = weekNumbers.map((weekNumber) => ({
    week: weekNumber,
    categories: parsedCategories
      .map((category) => {
        const week = category.weeks.find((item) => item.week === weekNumber);
        if (!week) {
          return null;
        }

        return {
          key: category.key,
          label: category.label,
          sections: week.sections,
        };
      })
      .filter(Boolean),
  }));

  const categories = parsedCategories.map((category) => ({
    key: category.key,
    label: category.label,
    file: category.file,
    weekCount: category.weeks.length,
  }));

  return {
    generatedAt: new Date().toISOString(),
    categories,
    weeks,
    stats: {
      totalCategories: categories.length,
      totalWeeks: weeks.length,
      totalSections: weeks.reduce(
        (sum, week) =>
          sum +
          week.categories.reduce((categorySum, category) => categorySum + category.sections.length, 0),
        0
      ),
    },
  };
}

const dataset = buildDataset();
const output = `window.POM_SUMMARIES = ${JSON.stringify(dataset, null, 2)};\n`;

fs.writeFileSync(outputFile, output, "utf8");
console.log(`Generated ${path.relative(process.cwd(), outputFile)}`);
