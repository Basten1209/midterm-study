#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const sourceDir = path.resolve(__dirname, "..", "goals_summary");
const quizDir = path.resolve(__dirname, "..", "quiz");
const outputFile = path.join(__dirname, "data.js");

const expectedGoalFiles = [
  "01-intro-to-hfe-part1.md",
  "02-intro-to-hfe-part2.md",
  "03-research-methods-part1.md",
  "04-research-methods-part2.md",
  "05-information-processing-part1.md",
  "06-information-processing-part2.md",
  "07-vision-display-part1.md",
  "08-vision-display-part2.md",
  "09-audition-speech-part1.md",
  "10-audition-speech-part2.md",
];

const expectedQuizAnswerCount = 75;

const quizScopes = {
  "01-intro-to-hfe-part1-quiz.md": ["01-intro-to-hfe-part1.md", "02-intro-to-hfe-part2.md"],
  "03-04-research-methods-quiz.md": ["03-research-methods-part1.md", "04-research-methods-part2.md"],
  "05-06-information-processing-quiz.md": [
    "05-information-processing-part1.md",
    "06-information-processing-part2.md",
  ],
  "07-08-vision-display-quiz.md": ["07-vision-display-part1.md", "08-vision-display-part2.md"],
  "09-10-audition-speech-quiz.md": ["09-audition-speech-part1.md", "10-audition-speech-part2.md"],
};

const quizHighlightTargets = {
  "01-intro-to-hfe-part1-quiz.md#1": {
    file: "01-intro-to-hfe-part1.md",
    goal: 1,
    phrases: ["Work", "Laws"],
  },
  "01-intro-to-hfe-part1-quiz.md#2": {
    file: "01-intro-to-hfe-part1.md",
    goal: 2,
    phrases: ["Fit the System/Task to the Human"],
  },
  "01-intro-to-hfe-part1-quiz.md#3": {
    file: "01-intro-to-hfe-part1.md",
    goal: 3,
    phrases: ["Cognitive"],
  },
  "01-intro-to-hfe-part1-quiz.md#4": {
    file: "01-intro-to-hfe-part1.md",
    goal: 9,
    phrases: ["therbligs"],
  },
  "01-intro-to-hfe-part1-quiz.md#5": {
    file: "01-intro-to-hfe-part1.md",
    goal: 7,
    phrases: ["fit system to human"],
  },
  "01-intro-to-hfe-part1-quiz.md#6": {
    file: "01-intro-to-hfe-part1.md",
    goal: 6,
    phrases: ["not mutually exclusive"],
  },
  "01-intro-to-hfe-part1-quiz.md#7": {
    file: "02-intro-to-hfe-part2.md",
    goal: 1,
    phrases: ["Preventative (Proactive)"],
  },
  "01-intro-to-hfe-part1-quiz.md#8": {
    file: "01-intro-to-hfe-part1.md",
    goal: 5,
    phrases: ["individual differences"],
  },
  "01-intro-to-hfe-part1-quiz.md#9": {
    file: "02-intro-to-hfe-part2.md",
    goal: 2,
    phrases: ["Speed-Accuracy Trade-off"],
  },
  "01-intro-to-hfe-part1-quiz.md#10": {
    file: "02-intro-to-hfe-part2.md",
    goal: 3,
    phrases: ["Indirect Costs", "4~10배"],
  },
  "01-intro-to-hfe-part1-quiz.md#11": {
    file: "02-intro-to-hfe-part2.md",
    goal: 4,
    phrases: ["Sensing", "Information Storage", "Information Processing & Decision", "Action"],
  },
  "01-intro-to-hfe-part1-quiz.md#12": {
    file: "02-intro-to-hfe-part2.md",
    goal: 5,
    phrases: ["monitoring & exception handling"],
  },
  "01-intro-to-hfe-part1-quiz.md#13": {
    file: "02-intro-to-hfe-part2.md",
    goal: 6,
    phrases: ["Redundancy"],
  },
  "01-intro-to-hfe-part1-quiz.md#14": {
    file: "02-intro-to-hfe-part2.md",
    goal: 9,
    phrases: ["MIL-STD-1472H"],
  },
  "01-intro-to-hfe-part1-quiz.md#15": {
    file: "02-intro-to-hfe-part2.md",
    goal: 8,
    phrases: ["higher acceptance", "smoother change"],
  },

  "03-04-research-methods-quiz.md#1": {
    file: "03-research-methods-part1.md",
    goal: 1,
    phrases: ["Systematic Inquiry"],
  },
  "03-04-research-methods-quiz.md#2": {
    file: "03-research-methods-part1.md",
    goal: 4,
    phrases: ["Stratification"],
  },
  "03-04-research-methods-quiz.md#3": {
    file: "03-research-methods-part1.md",
    goal: 8,
    phrases: ["Formative"],
  },
  "03-04-research-methods-quiz.md#4": {
    file: "03-research-methods-part1.md",
    goal: 6,
    phrases: ["DV (Dependent Variable)"],
  },
  "03-04-research-methods-quiz.md#5": {
    file: "03-research-methods-part1.md",
    goal: 6,
    phrases: ["Confound"],
  },
  "03-04-research-methods-quiz.md#6": {
    file: "03-research-methods-part1.md",
    goal: 5,
    phrases: ["Between"],
  },
  "03-04-research-methods-quiz.md#7": {
    file: "03-research-methods-part1.md",
    goal: 9,
    phrases: ["ecological validity"],
  },
  "03-04-research-methods-quiz.md#8": {
    file: "03-research-methods-part1.md",
    goal: 7,
    phrases: ["Random Sampling"],
  },
  "03-04-research-methods-quiz.md#9": {
    file: "04-research-methods-part2.md",
    goal: 4,
    phrases: ["statistical power"],
  },
  "03-04-research-methods-quiz.md#10": {
    file: "04-research-methods-part2.md",
    goal: 4,
    phrases: ["Reliability"],
  },
  "03-04-research-methods-quiz.md#11": {
    file: "04-research-methods-part2.md",
    goal: 5,
    phrases: ["Content Validity"],
  },
  "03-04-research-methods-quiz.md#12": {
    file: "04-research-methods-part2.md",
    goal: 5,
    phrases: ["Construct Validity"],
  },
  "03-04-research-methods-quiz.md#13": {
    file: "04-research-methods-part2.md",
    goal: 4,
    phrases: ["Freedom from Contamination"],
  },
  "03-04-research-methods-quiz.md#14": {
    file: "04-research-methods-part2.md",
    goal: 8,
    phrases: ["ANOVA"],
  },
  "03-04-research-methods-quiz.md#15": {
    file: "04-research-methods-part2.md",
    goal: 9,
    phrases: ["p-value", "practical significance"],
  },

  "05-06-information-processing-quiz.md#1": {
    file: "05-information-processing-part1.md",
    goal: 1,
    phrases: ["reduction of uncertainty"],
  },
  "05-06-information-processing-quiz.md#2": {
    file: "05-information-processing-part1.md",
    goal: 3,
    phrases: ["RT = a + b·H"],
  },
  "05-06-information-processing-quiz.md#3": {
    file: "05-information-processing-part1.md",
    goal: 5,
    phrases: ["즉각 조치"],
  },
  "05-06-information-processing-quiz.md#4": {
    file: "05-information-processing-part1.md",
    goal: 6,
    phrases: ["Alerting → Auditory", "Diagnosis → Visual"],
  },
  "05-06-information-processing-quiz.md#5": {
    file: "05-information-processing-part1.md",
    goal: 7,
    phrases: ["Absolute"],
  },
  "05-06-information-processing-quiz.md#6": {
    file: "05-information-processing-part1.md",
    goal: 8,
    phrases: ["Channel Capacity"],
  },
  "05-06-information-processing-quiz.md#7": {
    file: "05-information-processing-part1.md",
    goal: 11,
    phrases: ["d'"],
  },
  "05-06-information-processing-quiz.md#8": {
    file: "05-information-processing-part1.md",
    goal: 12,
    phrases: ["liberal (low β)"],
  },
  "05-06-information-processing-quiz.md#9": {
    file: "06-information-processing-part2.md",
    goal: 1,
    phrases: ["WM"],
  },
  "05-06-information-processing-quiz.md#10": {
    file: "06-information-processing-part2.md",
    goal: 2,
    phrases: ["Chunking"],
  },
  "05-06-information-processing-quiz.md#11": {
    file: "06-information-processing-part2.md",
    goal: 5,
    phrases: ["첫 20~30분"],
  },
  "05-06-information-processing-quiz.md#12": {
    file: "06-information-processing-part2.md",
    goal: 6,
    phrases: ["다른 resource pool"],
  },
  "05-06-information-processing-quiz.md#13": {
    file: "06-information-processing-part2.md",
    goal: 7,
    phrases: ["Conceptual"],
  },
  "05-06-information-processing-quiz.md#14": {
    file: "06-information-processing-part2.md",
    goal: 8,
    phrases: ["General slowing"],
  },
  "05-06-information-processing-quiz.md#15": {
    file: "06-information-processing-part2.md",
    goal: 9,
    phrases: ["Secondary task"],
  },

  "07-08-vision-display-quiz.md#1": {
    file: "07-vision-display-part1.md",
    goal: 2,
    phrases: ["Cones"],
  },
  "07-08-vision-display-quiz.md#2": {
    file: "07-vision-display-part1.md",
    goal: 3,
    phrases: ["Dark focus"],
  },
  "07-08-vision-display-quiz.md#3": {
    file: "07-vision-display-part1.md",
    goal: 6,
    phrases: ["Legibility"],
  },
  "07-08-vision-display-quiz.md#4": {
    file: "07-vision-display-part1.md",
    goal: 6,
    phrases: ["Readability"],
  },
  "07-08-vision-display-quiz.md#5": {
    file: "08-vision-display-part2.md",
    goal: 9,
    phrases: ["Flashing", "긴급/새 상태에만"],
  },
  "07-08-vision-display-quiz.md#6": {
    file: "08-vision-display-part2.md",
    goal: 11,
    phrases: ["3D"],
  },
  "07-08-vision-display-quiz.md#7": {
    file: "04-research-methods-part2.md",
    goal: 2,
    phrases: ["Rating Scales"],
  },
  "07-08-vision-display-quiz.md#8": {
    file: "08-vision-display-part2.md",
    goal: 2,
    phrases: ["Digital"],
  },
  "07-08-vision-display-quiz.md#9": {
    file: "08-vision-display-part2.md",
    goal: 2,
    phrases: ["Moving scale + Fixed pointer"],
  },
  "07-08-vision-display-quiz.md#10": {
    file: "08-vision-display-part2.md",
    goal: 4,
    phrases: ["Integration Task"],
  },
  "07-08-vision-display-quiz.md#11": {
    file: "08-vision-display-part2.md",
    goal: 5,
    phrases: ["Emergent Feature"],
  },
  "07-08-vision-display-quiz.md#12": {
    file: "08-vision-display-part2.md",
    goal: 8,
    phrases: ["Pop-out Effect"],
  },
  "07-08-vision-display-quiz.md#13": {
    file: "08-vision-display-part2.md",
    goal: 7,
    phrases: ["Color Coding"],
  },
  "07-08-vision-display-quiz.md#14": {
    file: "08-vision-display-part2.md",
    goal: 10,
    phrases: ["Perception", "Comprehension", "Projection"],
  },
  "07-08-vision-display-quiz.md#15": {
    file: "08-vision-display-part2.md",
    goal: 11,
    phrases: ["Compatible Motion"],
  },

  "09-10-audition-speech-quiz.md#1": {
    file: "09-audition-speech-part1.md",
    goal: 2,
    phrases: ["+3 dB"],
  },
  "09-10-audition-speech-quiz.md#2": {
    file: "09-audition-speech-part1.md",
    goal: 1,
    phrases: ["Pitch"],
  },
  "09-10-audition-speech-quiz.md#3": {
    file: "09-audition-speech-part1.md",
    goal: 4,
    phrases: ["~22× 증폭"],
  },
  "09-10-audition-speech-quiz.md#4": {
    file: "09-audition-speech-part1.md",
    goal: 5,
    phrases: ["Temporal"],
  },
  "09-10-audition-speech-quiz.md#5": {
    file: "09-audition-speech-part1.md",
    goal: 12,
    phrases: ["15~25dB"],
  },
  "09-10-audition-speech-quiz.md#6": {
    file: "09-audition-speech-part1.md",
    goal: 9,
    phrases: ["4-7"],
  },
  "09-10-audition-speech-quiz.md#7": {
    file: "09-audition-speech-part1.md",
    goal: 11,
    phrases: ["Approximation"],
  },
  "09-10-audition-speech-quiz.md#8": {
    file: "09-audition-speech-part1.md",
    goal: 11,
    phrases: ["Dissociability"],
  },
  "09-10-audition-speech-quiz.md#9": {
    file: "10-audition-speech-part2.md",
    goal: 1,
    phrases: ["500~3,000 Hz"],
  },
  "09-10-audition-speech-quiz.md#10": {
    file: "10-audition-speech-part2.md",
    goal: 3,
    phrases: ["Vowels(모음)", "Consonants(자음)"],
  },
  "09-10-audition-speech-quiz.md#11": {
    file: "10-audition-speech-part2.md",
    goal: 4,
    phrases: ["Speech Intelligibility(명료도)", "Speech Quality(품질)"],
  },
  "09-10-audition-speech-quiz.md#12": {
    file: "10-audition-speech-part2.md",
    goal: 7,
    phrases: ["어휘 수(vocabulary)가 작을수록", "표준 문장 구조"],
  },
  "09-10-audition-speech-quiz.md#13": {
    file: "10-audition-speech-part2.md",
    goal: 3,
    phrases: ["Band-specific SNR"],
  },
  "09-10-audition-speech-quiz.md#14": {
    file: "10-audition-speech-part2.md",
    goal: 8,
    phrases: ["부자연스러운 coarticulation"],
  },
  "09-10-audition-speech-quiz.md#15": {
    file: "10-audition-speech-part2.md",
    goal: 8,
    phrases: ["inter-word interval 증가"],
  },
};

if (!fs.existsSync(sourceDir) || !fs.existsSync(quizDir)) {
  const missingInputs = [
    fs.existsSync(sourceDir) ? null : sourceDir,
    fs.existsSync(quizDir) ? null : quizDir,
  ].filter(Boolean);

  if (fs.existsSync(outputFile)) {
    console.warn(`Source inputs not found (${missingInputs.join(", ")}); using existing data.js snapshot.`);
    process.exit(0);
  }

  throw new Error(`Source inputs not found: ${missingInputs.join(", ")}`);
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

function stripMarkdown(text) {
  return String(text)
    .replace(/<mark><strong>([\s\S]*?)<\/strong><\/mark>/gi, "$1")
    .replace(/\*\*/g, "")
    .replace(/`/g, "");
}

function normalizeForMatch(text) {
  return stripMarkdown(text)
    .toLowerCase()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[–—−]/g, "-")
    .replace(/(\d),(\d)/g, "$1$2")
    .replace(/(\d)\s*(?:to|-|~)\s*(\d)/g, "$1~$2")
    .replace(/(\d)\s+(db|hz|min|ms|s)\b/g, "$1$2")
    .replace(/\s+/g, " ")
    .trim();
}

function collapseBoldedMarks(text) {
  return String(text).replace(/\*\*(<mark><strong>[\s\S]*?<\/strong><\/mark>)\*\*/gi, "$1");
}

function countAnswerHighlights(text) {
  return (String(text).match(/<mark><strong>[\s\S]*?<\/strong><\/mark>/gi) || []).length;
}

function formatInline(text) {
  const normalizedText = collapseBoldedMarks(text);
  const tokenPattern = /(<mark><strong>[\s\S]*?<\/strong><\/mark>|\*\*[^*]+\*\*|`[^`]+`)/gi;
  let cursor = 0;
  let result = "";
  let match = tokenPattern.exec(normalizedText);

  while (match) {
    result += escapeHtml(normalizedText.slice(cursor, match.index));

    const token = match[0];
    const markMatch = token.match(/^<mark><strong>([\s\S]*?)<\/strong><\/mark>$/i);
    if (markMatch) {
      result += `<mark><strong>${escapeHtml(markMatch[1])}</strong></mark>`;
    } else if (token.startsWith("**")) {
      const strongContent = token.slice(2, -2);
      result += strongContent.includes("<mark><strong>")
        ? `<strong>${formatInline(strongContent)}</strong>`
        : `<strong>${escapeHtml(strongContent)}</strong>`;
    } else {
      result += `<code>${escapeHtml(token.slice(1, -1))}</code>`;
    }

    cursor = match.index + token.length;
    match = tokenPattern.exec(normalizedText);
  }

  result += escapeHtml(normalizedText.slice(cursor));
  return result;
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

function getIndent(line) {
  return (line.match(/^\s*/u)?.[0] || "").replace(/\t/g, "  ").length;
}

function getListItem(line) {
  const unorderedMatch = line.match(/^(\s*)[-*+]\s+(.+)$/u);
  if (unorderedMatch) {
    return {
      indent: getIndent(unorderedMatch[1]),
      ordered: false,
      text: unorderedMatch[2].trim(),
    };
  }

  const orderedMatch = line.match(/^(\s*)\d+\.\s+(.+)$/u);
  if (orderedMatch) {
    return {
      indent: getIndent(orderedMatch[1]),
      ordered: true,
      text: orderedMatch[2].trim(),
    };
  }

  return null;
}

function renderList(lines, startIndex, baseIndent, ordered) {
  const tag = ordered ? "ol" : "ul";
  const items = [];
  let index = startIndex;

  while (index < lines.length) {
    const item = getListItem(lines[index]);
    if (!item || item.indent !== baseIndent || item.ordered !== ordered) {
      break;
    }

    let itemHtml = formatInline(item.text);
    index += 1;

    while (index < lines.length) {
      const nextItem = getListItem(lines[index]);

      if (nextItem && nextItem.indent > baseIndent) {
        const nested = renderList(lines, index, nextItem.indent, nextItem.ordered);
        itemHtml += nested.html;
        index = nested.index;
        continue;
      }

      if (nextItem && nextItem.indent <= baseIndent) {
        break;
      }

      const trimmed = lines[index].trim();
      if (!trimmed) {
        index += 1;
        break;
      }

      itemHtml += `<p>${formatInline(trimmed)}</p>`;
      index += 1;
    }

    items.push(`<li>${itemHtml}</li>`);
  }

  return {
    html: `<${tag}>${items.join("")}</${tag}>`,
    index,
  };
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

    const listItem = getListItem(line);
    if (listItem) {
      const list = renderList(lines, index, listItem.indent, listItem.ordered);
      html.push(list.html);
      index = list.index;
      continue;
    }

    const paragraph = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      lines[index].trim() !== "---" &&
      !lines[index].trim().startsWith("|") &&
      !lines[index].trim().startsWith(">") &&
      !getListItem(lines[index]) &&
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
  return line.replace(/^\s*[-*+]\s+/u, "").replace(/^\s*\d+\.\s+/u, "").trim();
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

function parseGoalFile(fileName) {
  const filePath = path.join(sourceDir, fileName);
  const content = readText(filePath);
  const lines = content.split("\n");
  let moduleTitle = "";
  let currentGoal = null;
  const goals = [];

  function flushGoal() {
    if (currentGoal) {
      goals.push(currentGoal);
      currentGoal = null;
    }
  }

  for (const line of lines) {
    const moduleMatch = line.match(/^##\s+(.+)$/u);
    if (moduleMatch && !moduleTitle) {
      moduleTitle = moduleMatch[1].trim();
      continue;
    }

    const goalMatch = line.match(/^###\s+Goal\s+(\d+)\s*:\s*(.+)$/u);
    if (goalMatch) {
      flushGoal();
      currentGoal = {
        fileName,
        number: Number.parseInt(goalMatch[1], 10),
        rawHeading: goalMatch[2].trim(),
        lines: [],
        highlights: [],
      };
      continue;
    }

    if (currentGoal) {
      currentGoal.lines.push(line);
    }
  }

  flushGoal();

  if (!moduleTitle || goals.length === 0) {
    throw new Error(`Could not parse goals summary structure from ${filePath}`);
  }

  return {
    fileName,
    key: slugify(moduleTitle),
    title: moduleTitle,
    goals,
  };
}

function cleanAnswer(answerLine) {
  return answerLine
    .replace(/^Answer:\s*/u, "")
    .replace(/^[A-D]\.\s*/u, "")
    .trim()
    .replace(/\.$/u, "");
}

function parseQuizAnswers() {
  const quizFiles = Object.keys(quizScopes).sort();
  const answers = [];

  for (const fileName of quizFiles) {
    const filePath = path.join(quizDir, fileName);
    const lines = readText(filePath).split("\n");
    let question = null;

    for (const line of lines) {
      const questionMatch = line.match(/^##\s+Question\s+(\d+)/u);
      if (questionMatch) {
        question = Number.parseInt(questionMatch[1], 10);
        continue;
      }

      if (line.startsWith("Answer:")) {
        if (!question) {
          throw new Error(`Found answer before question in ${filePath}`);
        }

        answers.push({
          key: `${fileName}#${question}`,
          fileName,
          question,
          answer: cleanAnswer(line),
        });
      }
    }
  }

  return answers;
}

function findGoal(moduleByFile, fileName, goalNumber) {
  const module = moduleByFile.get(fileName);
  if (!module) {
    return null;
  }

  return module.goals.find((goal) => goal.number === goalNumber) || null;
}

function lineContainsPhrase(line, phrase) {
  return line.includes(phrase) || normalizeForMatch(line).includes(normalizeForMatch(phrase));
}

function goalContainsPhrase(goal, phrase) {
  return goal.lines.some((line) => lineContainsPhrase(line, phrase));
}

function assignQuizHighlights(modules, quizAnswers) {
  const moduleByFile = new Map(modules.map((module) => [module.fileName, module]));
  const unresolved = [];
  let matchedQuizAnswers = 0;

  for (const quizAnswer of quizAnswers) {
    const target = quizHighlightTargets[quizAnswer.key];
    if (!target) {
      unresolved.push(`${quizAnswer.key}: no highlight target for "${quizAnswer.answer}"`);
      continue;
    }

    const goal = findGoal(moduleByFile, target.file, target.goal);
    if (!goal) {
      unresolved.push(`${quizAnswer.key}: target ${target.file} Goal ${target.goal} not found`);
      continue;
    }

    const missingPhrases = target.phrases.filter((phrase) => !goalContainsPhrase(goal, phrase));
    if (missingPhrases.length > 0) {
      unresolved.push(
        `${quizAnswer.key}: target phrases missing in ${target.file} Goal ${target.goal}: ${missingPhrases.join(", ")}`
      );
      continue;
    }

    for (const phrase of target.phrases) {
      goal.highlights.push({
        quizKey: quizAnswer.key,
        answer: quizAnswer.answer,
        phrase,
      });
    }
    matchedQuizAnswers += 1;
  }

  if (unresolved.length > 0) {
    throw new Error(`Unresolved quiz answer highlights:\n${unresolved.join("\n")}`);
  }

  return matchedQuizAnswers;
}

function markPhrase(line, phrase) {
  const exactIndex = line.indexOf(phrase);
  if (exactIndex >= 0) {
    return {
      line: `${line.slice(0, exactIndex)}<mark><strong>${phrase}</strong></mark>${line.slice(
        exactIndex + phrase.length
      )}`,
      marked: true,
    };
  }

  const normalizedPhrase = normalizeForMatch(phrase);
  const normalizedLine = normalizeForMatch(line);
  if (!normalizedLine.includes(normalizedPhrase)) {
    return { line, marked: false };
  }

  return { line, marked: false };
}

function applyHighlights(lines, highlights) {
  const highlightedLines = [...lines];
  const uniquePhrases = [];
  const seenPhrases = new Set();

  for (const highlight of highlights) {
    const phraseKey = normalizeForMatch(highlight.phrase);
    if (!seenPhrases.has(phraseKey)) {
      seenPhrases.add(phraseKey);
      uniquePhrases.push(highlight.phrase);
    }
  }

  const missed = [];
  for (const phrase of uniquePhrases.sort((a, b) => b.length - a.length)) {
    let marked = false;

    for (let index = 0; index < highlightedLines.length; index += 1) {
      if (!lineContainsPhrase(highlightedLines[index], phrase)) {
        continue;
      }

      const result = markPhrase(highlightedLines[index], phrase);
      if (result.marked) {
        highlightedLines[index] = collapseBoldedMarks(result.line);
        marked = true;
        break;
      }
    }

    if (!marked) {
      missed.push(phrase);
    }
  }

  if (missed.length > 0) {
    throw new Error(`Failed to apply highlight markers for: ${missed.join(", ")}`);
  }

  return highlightedLines;
}

function buildRenderedModules(modules) {
  return modules.map((module) => ({
    key: module.key,
    title: module.title,
    file: `../goals_summary/${module.fileName}`,
    goals: module.goals.map((goal) => {
      const highlightedLines = applyHighlights(goal.lines, goal.highlights);
      const bodyText = highlightedLines.join("\n");
      const headingParts = extractPageRef(goal.rawHeading);
      const answerLines = highlightedLines
        .filter((line) => countAnswerHighlights(line) > 0)
        .map((line) => formatInline(stripListMarker(line)));

      return {
        key: `${module.key}-goal-${goal.number}`,
        number: goal.number,
        heading: headingParts.heading,
        pageRef: headingParts.pageRef,
        html: markdownToHtml(highlightedLines),
        answerHighlightCount: countAnswerHighlights(bodyText),
        answerLines,
      };
    }),
  }));
}

function buildDataset() {
  const actualGoalFiles = fs.readdirSync(sourceDir).filter((fileName) => fileName.endsWith(".md")).sort();
  const missingGoalFiles = expectedGoalFiles.filter((fileName) => !actualGoalFiles.includes(fileName));
  if (missingGoalFiles.length > 0) {
    throw new Error(`Missing goals summary files: ${missingGoalFiles.join(", ")}`);
  }

  const parsedModules = expectedGoalFiles.map(parseGoalFile);
  const quizAnswers = parseQuizAnswers();
  if (quizAnswers.length !== expectedQuizAnswerCount) {
    throw new Error(`Expected ${expectedQuizAnswerCount} quiz answers, found ${quizAnswers.length}`);
  }

  const matchedQuizAnswers = assignQuizHighlights(parsedModules, quizAnswers);
  const modules = buildRenderedModules(parsedModules);
  const totalGoals = modules.reduce((sum, module) => sum + module.goals.length, 0);
  const totalAnswerHighlights = modules.reduce(
    (sum, module) =>
      sum + module.goals.reduce((goalSum, goal) => goalSum + goal.answerHighlightCount, 0),
    0
  );

  if (modules.length !== expectedGoalFiles.length || totalGoals !== 103) {
    throw new Error(`Expected 10 modules and 103 goals; parsed ${modules.length} modules and ${totalGoals} goals`);
  }

  return {
    generatedAt: new Date().toISOString(),
    title: "Ergonomics HF/E Goals Summary",
    legendHtml: "Quiz 정답 개념은 <mark><strong>이렇게</strong></mark> 표시됩니다.",
    modules,
    stats: {
      totalModules: modules.length,
      totalGoals,
      totalQuizAnswers: quizAnswers.length,
      matchedQuizAnswers,
      totalAnswerHighlights,
    },
  };
}

const dataset = buildDataset();
const output = `window.ERGONOMICS_SUMMARY = ${JSON.stringify(dataset, null, 2)};\n`;

fs.writeFileSync(outputFile, output, "utf8");
console.log(`Generated ${path.relative(process.cwd(), outputFile)}`);
console.log(
  `Parsed ${dataset.stats.totalModules} modules, ${dataset.stats.totalGoals} goals, ` +
    `${dataset.stats.matchedQuizAnswers}/${dataset.stats.totalQuizAnswers} quiz answers matched, ` +
    `${dataset.stats.totalAnswerHighlights} answer highlights.`
);
