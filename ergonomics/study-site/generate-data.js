#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const sourceFile = path.resolve(__dirname, "..", "summary.md");
const outputFile = path.join(__dirname, "data.js");

if (!fs.existsSync(sourceFile)) {
  if (fs.existsSync(outputFile)) {
    console.warn(`Source summary not found at ${sourceFile}; using existing data.js snapshot.`);
    process.exit(0);
  }

  throw new Error(`Source summary not found at ${sourceFile}`);
}

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

function slugify(text) {
  const slug = String(text)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "section";
}

function countAnswerHighlights(text) {
  return (String(text).match(/<mark><strong>[\s\S]*?<\/strong><\/mark>/gi) || []).length;
}

function formatInline(text) {
  const tokenPattern = /(<mark><strong>[\s\S]*?<\/strong><\/mark>|\*\*[^*]+\*\*|`[^`]+`)/gi;
  let cursor = 0;
  let result = "";
  let match = tokenPattern.exec(text);

  while (match) {
    result += escapeHtml(text.slice(cursor, match.index));

    const token = match[0];
    const markMatch = token.match(/^<mark><strong>([\s\S]*?)<\/strong><\/mark>$/i);
    if (markMatch) {
      result += `<mark><strong>${escapeHtml(markMatch[1])}</strong></mark>`;
    } else if (token.startsWith("**")) {
      result += `<strong>${escapeHtml(token.slice(2, -2))}</strong>`;
    } else {
      result += `<code>${escapeHtml(token.slice(1, -1))}</code>`;
    }

    cursor = match.index + token.length;
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
  const rows = lines.map(splitTableRow).filter((cells) => cells.length > 0 && !isTableDivider(cells));

  if (rows.length === 0) {
    return "";
  }

  const [headers, ...body] = rows;
  const thead = `<thead><tr>${headers.map((cell) => `<th>${formatInline(cell)}</th>`).join("")}</tr></thead>`;
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
    const trimmed = line.trim();

    if (!trimmed || trimmed === "---") {
      index += 1;
      continue;
    }

    const subheadingMatch = line.match(/^####?\s+(.+)$/u);
    if (subheadingMatch) {
      html.push(`<h4>${formatInline(subheadingMatch[1].trim())}</h4>`);
      index += 1;
      continue;
    }

    if (trimmed.startsWith(">")) {
      const quoteLines = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        quoteLines.push(lines[index].replace(/^\s*>\s?/u, "").trim());
        index += 1;
      }
      html.push(`<blockquote>${quoteLines.map((item) => `<p>${formatInline(item)}</p>`).join("")}</blockquote>`);
      continue;
    }

    if (trimmed.startsWith("|")) {
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
      lines[index].trim() !== "---" &&
      !lines[index].trim().startsWith("|") &&
      !lines[index].trim().startsWith(">") &&
      !/^\s*-\s+/u.test(lines[index]) &&
      !/^\s*\d+\.\s+/u.test(lines[index]) &&
      !/^####?\s+/.test(lines[index])
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }

    html.push(`<p>${formatInline(paragraph.join(" "))}</p>`);
  }

  return html.join("");
}

function stripListMarker(line) {
  return line.replace(/^\s*-\s+/u, "").replace(/^\s*\d+\.\s+/u, "").trim();
}

function extractPageRef(heading) {
  const match = heading.match(/\s+\[([^\]]+)\]\s*$/u);
  if (!match) {
    return { heading: heading.trim(), pageRef: "" };
  }

  return {
    heading: heading.slice(0, match.index).trim(),
    pageRef: match[1].trim(),
  };
}

function parseSummary(content) {
  const lines = content.split("\n");
  const modules = [];
  let title = "";
  let legendHtml = "";
  let currentModule = null;
  let currentGoal = null;

  function flushGoal() {
    if (!currentModule || !currentGoal) {
      return;
    }

    const bodyText = currentGoal.lines.join("\n");
    const headingParts = extractPageRef(currentGoal.rawHeading);
    const answerLines = currentGoal.lines
      .filter((line) => countAnswerHighlights(line) > 0)
      .map((line) => formatInline(stripListMarker(line)));

    currentModule.goals.push({
      key: `${currentModule.key}-goal-${currentGoal.number}`,
      number: currentGoal.number,
      heading: headingParts.heading,
      pageRef: headingParts.pageRef,
      html: markdownToHtml(currentGoal.lines),
      answerHighlightCount: countAnswerHighlights(bodyText),
      answerLines,
    });

    currentGoal = null;
  }

  function flushModule() {
    flushGoal();
    if (currentModule) {
      modules.push(currentModule);
      currentModule = null;
    }
  }

  for (const line of lines) {
    const titleMatch = line.match(/^#\s+(.+)$/u);
    if (titleMatch && !title) {
      title = titleMatch[1].trim();
      continue;
    }

    if (!legendHtml && line.trim().startsWith(">")) {
      legendHtml = formatInline(line.replace(/^\s*>\s?/u, "").trim());
      continue;
    }

    const moduleMatch = line.match(/^##\s+(.+)$/u);
    if (moduleMatch) {
      flushModule();
      const moduleTitle = moduleMatch[1].trim();
      currentModule = {
        key: slugify(moduleTitle),
        title: moduleTitle,
        goals: [],
      };
      continue;
    }

    const goalMatch = line.match(/^###\s+Goal\s+(\d+)\s*:\s*(.+)$/u);
    if (goalMatch) {
      flushGoal();
      currentGoal = {
        number: Number.parseInt(goalMatch[1], 10),
        rawHeading: goalMatch[2].trim(),
        lines: [],
      };
      continue;
    }

    if (currentModule && currentGoal) {
      currentGoal.lines.push(line);
    }
  }

  flushModule();

  return {
    title,
    legendHtml,
    modules,
  };
}

function buildDataset() {
  const parsed = parseSummary(readText(sourceFile));

  if (!parsed.title || parsed.modules.length === 0) {
    throw new Error(`Could not parse summary structure from ${sourceFile}`);
  }

  const totalGoals = parsed.modules.reduce((sum, module) => sum + module.goals.length, 0);
  const totalAnswerHighlights = parsed.modules.reduce(
    (sum, module) =>
      sum + module.goals.reduce((goalSum, goal) => goalSum + goal.answerHighlightCount, 0),
    0
  );

  return {
    generatedAt: new Date().toISOString(),
    title: parsed.title,
    legendHtml: parsed.legendHtml,
    modules: parsed.modules,
    stats: {
      totalModules: parsed.modules.length,
      totalGoals,
      totalAnswerHighlights,
    },
  };
}

const dataset = buildDataset();
const output = `window.ERGONOMICS_SUMMARY = ${JSON.stringify(dataset, null, 2)};\n`;

fs.writeFileSync(outputFile, output, "utf8");
console.log(`Generated ${path.relative(process.cwd(), outputFile)}`);
console.log(
  `Parsed ${dataset.stats.totalModules} modules, ${dataset.stats.totalGoals} goals, ${dataset.stats.totalAnswerHighlights} answer highlights.`
);
