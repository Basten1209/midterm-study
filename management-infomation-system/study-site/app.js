(function () {
  const app = document.getElementById("app");
  const data = window.MIS_DATA;

  if (!app || !data || !Array.isArray(data.weeks)) {
    if (app) {
      app.innerHTML = `
        <section class="page">
          <div class="card error-card">
            <h1>데이터를 불러오지 못했습니다.</h1>
            <p class="meta-note">
              <code>generate-data.js</code>를 실행해 <code>data.js</code>를 다시 생성한 뒤 열어주세요.
            </p>
          </div>
        </section>
      `;
    }
    return;
  }

  const weeks = data.weeks;
  const state = {
    lastRouteKey: "",
    fill: createFillState(),
    flashcard: createFlashcardState(),
    essay: createEssayState(),
  };

  function createFillState() {
    return {
      scopeKey: "",
      questions: [],
      index: 0,
      score: 0,
      answered: false,
      feedback: null,
      completed: false,
    };
  }

  function createFlashcardState() {
    return {
      scopeKey: "",
      deck: [],
      index: 0,
      flipped: false,
    };
  }

  function createEssayState() {
    return {
      scopeKey: "",
      items: [],
      index: 0,
      open: false,
    };
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeText(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/\([^)]*\)/g, " ")
      .replace(/[^a-z0-9/+\s-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function collectAnswerVariants(term) {
    const variants = new Set([term]);
    const seeds = [term];

    while (seeds.length) {
      const current = seeds.pop();
      const noParens = current.replace(/\([^)]*\)/g, " ").replace(/\s+/g, " ").trim();
      if (noParens && !variants.has(noParens)) {
        variants.add(noParens);
        seeds.push(noParens);
      }

      for (const match of current.matchAll(/\(([^)]+)\)/g)) {
        const inner = match[1].trim();
        if (inner && !variants.has(inner)) {
          variants.add(inner);
          seeds.push(inner);
        }
      }
    }

    const slashExpanded = Array.from(variants);
    for (const variant of slashExpanded) {
      for (const part of variant.split("/").map((item) => item.trim()).filter(Boolean)) {
        variants.add(part);
      }
    }

    return Array.from(variants).map(normalizeText).filter(Boolean);
  }

  function shuffle(items) {
    const cloned = items.slice();
    for (let index = cloned.length - 1; index > 0; index -= 1) {
      const target = Math.floor(Math.random() * (index + 1));
      [cloned[index], cloned[target]] = [cloned[target], cloned[index]];
    }
    return cloned;
  }

  function clampWeek(value) {
    const number = Number.parseInt(value, 10);
    if (Number.isNaN(number)) {
      return 1;
    }
    return Math.min(Math.max(number, 1), weeks.length);
  }

  function getWeekByNumber(weekNumber) {
    return weeks.find((week) => week.week === weekNumber);
  }

  function getScopeWeeks(scopeKey) {
    if (scopeKey === "all") {
      return weeks;
    }

    const week = getWeekByNumber(clampWeek(scopeKey));
    return week ? [week] : [];
  }

  function getScopeLabel(scopeKey) {
    if (scopeKey === "all") {
      return "All Weeks";
    }

    const week = getWeekByNumber(clampWeek(scopeKey));
    return week ? `Week ${week.week}` : "Week 1";
  }

  function getScopeTitle(scopeKey) {
    if (scopeKey === "all") {
      return "전체 주차 랜덤 드릴";
    }

    const week = getWeekByNumber(clampWeek(scopeKey));
    return week ? `Week ${week.week}: ${week.title}` : "Week 1";
  }

  function buildFillQuestions(scopeKey) {
    return shuffle(
      getScopeWeeks(scopeKey).flatMap((week) =>
        week.terms.map((term) => ({
          ...term,
          week: week.week,
          weekTitle: week.title,
          acceptedAnswers: collectAnswerVariants(term.term),
        }))
      )
    );
  }

  function buildFlashcards(scopeKey) {
    return getScopeWeeks(scopeKey).flatMap((week) =>
      week.terms.map((term) => ({
        ...term,
        week: week.week,
        weekTitle: week.title,
      }))
    );
  }

  function buildEssays(scopeKey) {
    return getScopeWeeks(scopeKey).flatMap((week) =>
      week.essays.map((essay, index) => ({
        ...essay,
        number: index + 1,
        week: week.week,
        weekTitle: week.title,
      }))
    );
  }

  function ensureFillState(scopeKey) {
    if (state.fill.scopeKey === scopeKey) {
      return;
    }

    state.fill = {
      scopeKey,
      questions: buildFillQuestions(scopeKey),
      index: 0,
      score: 0,
      answered: false,
      feedback: null,
      completed: false,
    };
  }

  function ensureFlashcardState(scopeKey) {
    if (state.flashcard.scopeKey === scopeKey) {
      return;
    }

    state.flashcard = {
      scopeKey,
      deck: buildFlashcards(scopeKey),
      index: 0,
      flipped: false,
    };
  }

  function ensureEssayState(scopeKey) {
    if (state.essay.scopeKey === scopeKey) {
      return;
    }

    state.essay = {
      scopeKey,
      items: buildEssays(scopeKey),
      index: 0,
      open: false,
    };
  }

  function parseRoute() {
    const raw = window.location.hash.replace(/^#/, "") || "home";
    const [viewPart, scopePart] = raw.split("/");
    const view = ["home", "summary", "fill", "flashcard", "essay"].includes(viewPart)
      ? viewPart
      : "home";

    if (view === "summary") {
      return { view, week: clampWeek(scopePart) };
    }

    if (view === "fill" || view === "flashcard" || view === "essay") {
      return {
        view,
        scopeKey: scopePart === "all" ? "all" : String(clampWeek(scopePart)),
      };
    }

    return { view: "home" };
  }

  function getRouteKey(route) {
    if (route.view === "summary") {
      return `${route.view}:${route.week}`;
    }

    if (route.scopeKey) {
      return `${route.view}:${route.scopeKey}`;
    }

    return route.view;
  }

  function renderTopbar(route) {
    const noteMap = {
      home: "Mobile-first study site",
      summary: "Detailed summary reading",
      fill: "Definition to keyword drill",
      flashcard: "Tap card to flip",
      essay: "Predicted essay practice",
    };

    return `
      <header class="topbar">
        <div class="brand-block">
          <span class="eyebrow">${noteMap[route.view]}</span>
          <a class="brand" href="#home">
            <span class="brand-mark">MIS</span>
            <span>MIDTERM STUDY</span>
          </a>
        </div>
        ${
          route.view === "home"
            ? `<span class="pill muted">Weeks ${weeks.length}</span>`
            : `<a class="ghost-link" href="#home">홈으로</a>`
        }
      </header>
    `;
  }

  function renderHome() {
    const weekCards = weeks
      .map(
        (week) => `
          <article class="card week-card">
            <div class="week-head">
              <span class="week-index">Week ${week.week}</span>
              <h2 class="section-title">${escapeHtml(week.title)}</h2>
              <p class="week-copy">
                ${week.summary.length}개 요약 섹션, ${week.terms.length}개 핵심 용어, ${week.essays.length}개 예상 에세이
              </p>
            </div>
            <div class="week-stats">
              <span class="pill">Summary</span>
              <span class="pill">Fill Blank</span>
              <span class="pill">Flashcards</span>
              <span class="pill">Essay</span>
            </div>
            <div class="mode-grid">
              <a class="mode-link" href="#summary/${week.week}">요약 읽기</a>
              <a class="mode-link" href="#fill/${week.week}">빈칸 퀴즈</a>
              <a class="mode-link" href="#flashcard/${week.week}">플래시카드</a>
              <a class="mode-link" href="#essay/${week.week}">에세이 대비</a>
            </div>
          </article>
        `
      )
      .join("");

    return `
      <section class="card hero-card">
        <span class="eyebrow">Midterm Sprint</span>
        <h1 class="hero-title">MIS를 모바일에서 바로 복습하는 한 장의 사이트</h1>
        <p class="hero-subtitle">
          요약 읽기, 정의 기반 빈칸 채우기, 핵심 용어 플래시카드, 예상 에세이 답안을 하나의 흐름으로 정리했습니다.
        </p>
        <div class="stat-grid">
          <div class="stat-item">
            <span class="stat-label">Weeks</span>
            <span class="stat-value">${data.weekCount}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Key Terms</span>
            <span class="stat-value">${data.stats.totalTerms}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Essays</span>
            <span class="stat-value">${data.stats.totalEssays}</span>
          </div>
        </div>
      </section>

      <section class="card">
        <span class="eyebrow">Quick Drill</span>
        <h2 class="section-title">전체 주차 랜덤 학습</h2>
        <p class="section-copy">
          주차를 섞어서 바로 시험 모드로 들어갑니다.
        </p>
        <div class="utility-grid">
          <a class="button" href="#fill/all">랜덤 빈칸</a>
          <a class="button" href="#flashcard/all">랜덤 카드</a>
          <a class="button warn" href="#essay/all">전체 에세이</a>
          <a class="button secondary" href="#summary/1">Week 1부터 읽기</a>
        </div>
      </section>

      <section class="page stagger">
        <div class="week-grid">
          ${weekCards}
        </div>
      </section>
    `;
  }

  function renderWeekChips(activeWeek) {
    return `
      <div class="chip-row">
        ${weeks
          .map(
            (week) => `
              <a class="chip ${week.week === activeWeek ? "is-active" : ""}" href="#summary/${week.week}">
                Week ${week.week}
              </a>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderSummary(route) {
    const week = getWeekByNumber(route.week);
    if (!week) {
      return `
        <section class="card empty-state">
          <h1>요약을 찾을 수 없습니다.</h1>
        </section>
      `;
    }

    const sections = week.summary
      .map(
        (section) => `
          <article class="card summary-section">
            <span class="eyebrow">Section</span>
            <h2 class="section-title">${escapeHtml(section.heading)}</h2>
            <div>${section.html}</div>
          </article>
        `
      )
      .join("");

    return `
      <section class="card hero-card">
        <span class="eyebrow">Week ${week.week} Summary</span>
        <h1 class="section-title">${escapeHtml(week.summaryTitle)}</h1>
        <p class="section-copy">
          굵게 표시된 용어는 빈칸 후보이며, 표는 모바일에서도 가로 스크롤로 확인할 수 있습니다.
        </p>
        ${renderWeekChips(week.week)}
      </section>

      <section class="summary-stack">
        ${sections}
      </section>

      <nav class="pager">
        <a class="nav-link" href="#summary/${Math.max(1, week.week - 1)}">이전 주차</a>
        <a class="nav-link" href="#summary/${Math.min(weeks.length, week.week + 1)}">다음 주차</a>
      </nav>
    `;
  }

  function renderFill(route) {
    ensureFillState(route.scopeKey);

    if (!state.fill.questions.length) {
      return `
        <section class="card empty-state">
          <h1>퀴즈 데이터가 없습니다.</h1>
        </section>
      `;
    }

    if (state.fill.completed) {
      const total = state.fill.questions.length;
      const ratio = Math.round((state.fill.score / total) * 100);
      return `
        <section class="card hero-card">
          <span class="eyebrow">Fill-in-the-Blank</span>
          <h1 class="section-title">${escapeHtml(getScopeTitle(route.scopeKey))}</h1>
          <p class="section-copy">정의를 보고 용어를 떠올리는 연습용 모드입니다.</p>
        </section>

        <section class="card result-card">
          <span class="eyebrow">Completed</span>
          <div class="score-number">${state.fill.score} / ${total}</div>
          <p class="result-copy">정답률 ${ratio}%입니다. 바로 다시 섞어서 재도전할 수 있습니다.</p>
          <div class="quiz-actions">
            <button class="button success" type="button" data-action="fill-restart">다시 섞기</button>
            <a class="button secondary" href="#home">홈으로</a>
          </div>
        </section>
      `;
    }

    const question = state.fill.questions[state.fill.index];
    const progress = ((state.fill.index + (state.fill.answered ? 1 : 0)) / state.fill.questions.length) * 100;
    const feedback = state.fill.feedback;

    return `
      <section class="card hero-card">
        <span class="eyebrow">Fill-in-the-Blank</span>
        <h1 class="section-title">${escapeHtml(getScopeTitle(route.scopeKey))}</h1>
        <p class="section-copy">정의만 보고 정확한 핵심 용어를 입력하세요. 슬래시로 묶인 용어는 개별 입력도 정답으로 처리됩니다.</p>
      </section>

      <section class="card quiz-card">
        <div class="meter">
          <div class="meter-head">
            <span class="pill muted">${escapeHtml(getScopeLabel(route.scopeKey))}</span>
            <span class="pill">${state.fill.index + 1} / ${state.fill.questions.length}</span>
          </div>
          <div class="meter-track">
            <div class="meter-fill" style="width: ${Math.max(progress, 4)}%"></div>
          </div>
        </div>

        <div class="week-stats">
          <span class="pill">Week ${question.week}</span>
          <span class="pill">Score ${state.fill.score}</span>
        </div>

        <p class="quiz-prompt">${escapeHtml(question.definition)}</p>
        ${question.note ? `<p class="quiz-note">힌트: ${escapeHtml(question.note)}</p>` : ""}

        <form class="quiz-form" data-form="fill-answer">
          <input
            class="quiz-input"
            type="text"
            name="answer"
            placeholder="용어를 입력하세요"
            autocomplete="off"
            ${state.fill.answered ? "disabled" : ""}
          />
          ${
            state.fill.answered
              ? `<button class="button success" type="button" data-action="fill-next">${
                  state.fill.index === state.fill.questions.length - 1 ? "결과 보기" : "다음 문제"
                }</button>`
              : `<button class="button" type="submit">채점하기</button>`
          }
        </form>

        ${
          feedback
            ? `
              <div class="feedback ${feedback.correct ? "success" : "error"}">
                <span class="feedback-title">${feedback.correct ? "정답입니다." : "오답입니다."}</span>
                <span>정답: ${escapeHtml(question.term)}</span>
                ${
                  feedback.input
                    ? `<span>입력값: ${escapeHtml(feedback.input)}</span>`
                    : `<span>입력값이 비어 있었습니다.</span>`
                }
              </div>
            `
            : ""
        }
      </section>
    `;
  }

  function renderFlashcards(route) {
    ensureFlashcardState(route.scopeKey);

    if (!state.flashcard.deck.length) {
      return `
        <section class="card empty-state">
          <h1>플래시카드 데이터가 없습니다.</h1>
        </section>
      `;
    }

    const item = state.flashcard.deck[state.flashcard.index];

    return `
      <section class="card hero-card">
        <span class="eyebrow">Flashcards</span>
        <h1 class="section-title">${escapeHtml(getScopeTitle(route.scopeKey))}</h1>
        <p class="section-copy">카드를 탭해 앞면과 뒷면을 뒤집으세요. 용어, 정의, 비고를 순서대로 복습할 수 있습니다.</p>
      </section>

      <section class="flashcard-shell">
        <button class="flashcard ${state.flashcard.flipped ? "is-flipped" : ""}" type="button" data-action="flash-flip">
          <div class="flashcard-inner">
            <div class="flash-face flash-front">
              <span class="eyebrow">Week ${item.week}</span>
              <div class="flash-term">${escapeHtml(item.term)}</div>
              <div class="flash-caption">Tap to reveal definition</div>
            </div>
            <div class="flash-face flash-back">
              <span class="eyebrow">Definition</span>
              <div class="flash-definition">${escapeHtml(item.definition)}</div>
              ${item.note ? `<div class="quiz-note">비고: ${escapeHtml(item.note)}</div>` : ""}
            </div>
          </div>
        </button>

        <div class="card">
          <div class="meter-head">
            <span class="pill muted">${escapeHtml(getScopeLabel(route.scopeKey))}</span>
            <span class="pill">${state.flashcard.index + 1} / ${state.flashcard.deck.length}</span>
          </div>
          <div class="control-row">
            <button class="button secondary" type="button" data-action="flash-prev">이전</button>
            <button class="button" type="button" data-action="flash-flip">뒤집기</button>
            <button class="button secondary" type="button" data-action="flash-next">다음</button>
          </div>
          <div class="quiz-actions">
            <button class="button warn" type="button" data-action="flash-shuffle">셔플</button>
          </div>
        </div>
      </section>
    `;
  }

  function renderEssay(route) {
    ensureEssayState(route.scopeKey);

    if (!state.essay.items.length) {
      return `
        <section class="card empty-state">
          <h1>에세이 데이터가 없습니다.</h1>
        </section>
      `;
    }

    const item = state.essay.items[state.essay.index];
    const answerParagraphs = item.answer
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean)
      .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
      .join("");

    return `
      <section class="card hero-card">
        <span class="eyebrow">Essay Prep</span>
        <h1 class="section-title">${escapeHtml(getScopeTitle(route.scopeKey))}</h1>
        <p class="section-copy">질문은 영어 원문 기준으로 유지했고, 답안은 시험에서 바로 쓸 수 있게 한국어로 정리했습니다.</p>
      </section>

      <section class="essay-stack">
        <article class="card">
          <div class="meter-head">
            <span class="pill muted">Week ${item.week}</span>
            <span class="pill">${state.essay.index + 1} / ${state.essay.items.length}</span>
          </div>
          <h2 class="section-title">Q${item.number}. ${escapeHtml(item.question)}</h2>
          <button class="button" type="button" data-action="essay-toggle">
            ${state.essay.open ? "답변 숨기기" : "답변 보기"}
          </button>
          <div class="essay-answer ${state.essay.open ? "is-open" : ""}">
            ${answerParagraphs}
          </div>
        </article>

        <nav class="pager">
          <button class="nav-link" type="button" data-action="essay-prev">이전 질문</button>
          <button class="nav-link" type="button" data-action="essay-next">다음 질문</button>
        </nav>
      </section>
    `;
  }

  function renderView(route) {
    switch (route.view) {
      case "summary":
        return renderSummary(route);
      case "fill":
        return renderFill(route);
      case "flashcard":
        return renderFlashcards(route);
      case "essay":
        return renderEssay(route);
      case "home":
      default:
        return renderHome();
    }
  }

  function render() {
    const route = parseRoute();
    const nextRouteKey = getRouteKey(route);

    app.innerHTML = `
      <section class="page">
        ${renderTopbar(route)}
        ${renderView(route)}
      </section>
    `;

    document.title = route.view === "home"
      ? "MIS Midterm Study"
      : `${route.view.toUpperCase()} | MIS Midterm Study`;

    if (state.lastRouteKey !== nextRouteKey) {
      window.scrollTo(0, 0);
    }

    state.lastRouteKey = nextRouteKey;
  }

  function handleFillSubmit(event) {
    const route = parseRoute();
    ensureFillState(route.scopeKey);

    const question = state.fill.questions[state.fill.index];
    const formData = new FormData(event.target);
    const input = String(formData.get("answer") || "").trim();
    const normalizedInput = normalizeText(input);
    const correct = question.acceptedAnswers.includes(normalizedInput);

    state.fill.answered = true;
    state.fill.feedback = { correct, input };
    if (correct) {
      state.fill.score += 1;
    }

    render();
  }

  function moveFillNext() {
    if (state.fill.index >= state.fill.questions.length - 1) {
      state.fill.completed = true;
      render();
      return;
    }

    state.fill.index += 1;
    state.fill.answered = false;
    state.fill.feedback = null;
    render();
  }

  function restartFill() {
    const route = parseRoute();
    state.fill.scopeKey = "";
    ensureFillState(route.scopeKey);
    render();
  }

  function moveFlash(delta) {
    const total = state.flashcard.deck.length;
    if (!total) {
      return;
    }

    state.flashcard.index = (state.flashcard.index + delta + total) % total;
    state.flashcard.flipped = false;
    render();
  }

  function moveEssay(delta) {
    const total = state.essay.items.length;
    if (!total) {
      return;
    }

    state.essay.index = (state.essay.index + delta + total) % total;
    state.essay.open = false;
    render();
  }

  app.addEventListener("submit", (event) => {
    if (event.target instanceof HTMLFormElement && event.target.dataset.form === "fill-answer") {
      event.preventDefault();
      handleFillSubmit(event);
    }
  });

  app.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) {
      return;
    }

    const action = target.dataset.action;

    switch (action) {
      case "fill-next":
        moveFillNext();
        break;
      case "fill-restart":
        restartFill();
        break;
      case "flash-prev":
        moveFlash(-1);
        break;
      case "flash-next":
        moveFlash(1);
        break;
      case "flash-flip":
        state.flashcard.flipped = !state.flashcard.flipped;
        render();
        break;
      case "flash-shuffle":
        state.flashcard.deck = shuffle(state.flashcard.deck);
        state.flashcard.index = 0;
        state.flashcard.flipped = false;
        render();
        break;
      case "essay-toggle":
        state.essay.open = !state.essay.open;
        render();
        break;
      case "essay-prev":
        moveEssay(-1);
        break;
      case "essay-next":
        moveEssay(1);
        break;
      default:
        break;
    }
  });

  window.addEventListener("hashchange", render);
  render();
})();
