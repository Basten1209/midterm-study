(function () {
  const app = document.getElementById("app");
  const data = window.ERGONOMICS_SUMMARY;
  const state = {
    search: "",
  };

  if (!app || !data || !Array.isArray(data.modules)) {
    if (app) {
      app.innerHTML = `
        <main class="app">
          <section class="empty-state">
            <h1>데이터를 불러오지 못했습니다.</h1>
            <p><code>generate-data.js</code>를 실행해 <code>data.js</code>를 다시 생성해 주세요.</p>
          </section>
        </main>
      `;
    }
    return;
  }

  const modules = data.modules;

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function stripHtml(text) {
    return String(text).replace(/<[^>]*>/g, " ");
  }

  function normalizeSearch(text) {
    return stripHtml(text)
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function parseRoute() {
    const raw = window.location.hash.replace(/^#/, "") || "home";
    const parts = raw.split("/").filter(Boolean);

    if (parts[0] === "module") {
      return {
        view: "module",
        moduleKey: parts[1],
      };
    }

    return { view: "home" };
  }

  function getModule(moduleKey) {
    return modules.find((module) => module.key === moduleKey) || null;
  }

  function normalizeRoute(route) {
    if (route.view === "module") {
      return getModule(route.moduleKey) ? route : { view: "home" };
    }

    return { view: "home" };
  }

  function routeToHash(route) {
    if (route.view === "module") {
      return `#module/${route.moduleKey}`;
    }

    return "#home";
  }

  function makeRoute(moduleKey) {
    return moduleKey === "all" ? "#home" : `#module/${moduleKey}`;
  }

  function getSelectedModuleKey(route) {
    return route.view === "module" ? route.moduleKey : "all";
  }

  function getVisibleModules(route) {
    const selectedModuleKey = getSelectedModuleKey(route);
    const searchNeedle = normalizeSearch(state.search);

    return modules
      .filter((module) => selectedModuleKey === "all" || module.key === selectedModuleKey)
      .map((module) => {
        const goals = searchNeedle
          ? module.goals.filter((goal) => {
              const haystack = normalizeSearch(
                `${module.title} ${goal.heading} ${goal.pageRef} ${goal.html} ${goal.answerLines.join(" ")}`
              );
              return haystack.includes(searchNeedle);
            })
          : module.goals;

        return {
          ...module,
          goals,
        };
      })
      .filter((module) => module.goals.length > 0);
  }

  function getVisibleGoalCount(visibleModules) {
    return visibleModules.reduce((sum, module) => sum + module.goals.length, 0);
  }

  function renderModuleChips(route) {
    const selectedModuleKey = getSelectedModuleKey(route);
    const allChip = `<a class="chip" href="${makeRoute("all")}" aria-current="${
      selectedModuleKey === "all" ? "page" : "false"
    }">전체</a>`;
    const moduleChips = modules
      .map(
        (module) => `<a class="chip" href="${makeRoute(module.key)}" aria-current="${
          selectedModuleKey === module.key ? "page" : "false"
        }">${escapeHtml(module.title)}</a>`
      )
      .join("");

    return `${allChip}${moduleChips}`;
  }

  function renderTopbar(route, visibleModules) {
    const visibleGoalCount = getVisibleGoalCount(visibleModules);
    const selectedModuleKey = getSelectedModuleKey(route);
    const selectedModule = selectedModuleKey === "all" ? null : getModule(selectedModuleKey);
    const resultLabel =
      selectedModule && !state.search
        ? `${selectedModule.goals.length}개 Goal`
        : `${visibleGoalCount} / ${data.stats.totalGoals}개 Goal`;

    return `
      <header class="topbar">
        <div class="brand-row">
          <img
            class="brand-thumb"
            src="./assets/computer-workstation-variables.png"
            alt=""
            width="56"
            height="56"
          />
          <div class="brand-copy">
            <p class="eyebrow">Ergonomics HF/E</p>
            <h1>${escapeHtml(data.title)}</h1>
            <p>Summary 중심으로 빠르게 훑는 중간고사 노트</p>
          </div>
        </div>
        <form class="search-panel" role="search">
          <label for="summary-search">요약 검색</label>
          <div class="search-row">
            <input
              id="summary-search"
              type="search"
              autocomplete="off"
              placeholder="예: working memory, ANOVA, 판독성"
              value="${escapeHtml(state.search)}"
            />
            <button class="clear-button" type="button" ${
              state.search ? "" : "disabled"
            }>지우기</button>
          </div>
        </form>
        <nav class="controls" aria-label="Ergonomics module filters">
          <div class="control-meta">
            <span>${escapeHtml(resultLabel)}</span>
            <span>${data.stats.totalAnswerHighlights}개 정답 하이라이트</span>
          </div>
          <div class="control-group">${renderModuleChips(route)}</div>
        </nav>
      </header>
    `;
  }

  function renderLegend() {
    const legendHtml = data.legendHtml || "Quiz 정답 개념은 <mark><strong>이렇게</strong></mark> 표시됩니다.";

    return `
      <section class="legend-strip" aria-label="정답 하이라이트 안내">
        <p>${legendHtml}</p>
      </section>
    `;
  }

  function renderGoal(goal) {
    return `
      <article class="goal-card" id="${escapeHtml(goal.key)}">
        <header class="goal-header">
          <div>
            <p>Goal ${goal.number}${goal.pageRef ? ` · ${escapeHtml(goal.pageRef)}` : ""}</p>
            <h3>${escapeHtml(goal.heading)}</h3>
          </div>
          ${
            goal.answerHighlightCount
              ? `<span class="answer-badge">${goal.answerHighlightCount} answer</span>`
              : ""
          }
        </header>
        <div class="goal-body">${goal.html}</div>
      </article>
    `;
  }

  function renderModule(module) {
    return `
      <section class="module-section" id="${escapeHtml(module.key)}">
        <header class="module-header">
          <p>${module.goals.length}개 Goal</p>
          <h2>${escapeHtml(module.title)}</h2>
        </header>
        <div class="goal-list">${module.goals.map(renderGoal).join("")}</div>
      </section>
    `;
  }

  function renderEmpty(route) {
    const selectedModuleKey = getSelectedModuleKey(route);
    const selectedModule = selectedModuleKey === "all" ? null : getModule(selectedModuleKey);
    const scope = selectedModule ? selectedModule.title : "전체 요약";

    return `
      <section class="empty-state">
        <h2>검색 결과가 없습니다.</h2>
        <p>${escapeHtml(scope)}에서 <strong>${escapeHtml(state.search)}</strong>와 일치하는 Goal을 찾지 못했습니다.</p>
      </section>
    `;
  }

  function render() {
    const route = normalizeRoute(parseRoute());
    if (window.location.hash && window.location.hash !== routeToHash(route)) {
      window.location.hash = routeToHash(route);
      return;
    }

    const activeElement = document.activeElement;
    const shouldRestoreSearch = activeElement && activeElement.id === "summary-search";
    const selectionStart = shouldRestoreSearch ? activeElement.selectionStart : null;
    const selectionEnd = shouldRestoreSearch ? activeElement.selectionEnd : null;
    const visibleModules = getVisibleModules(route);
    const content = visibleModules.length ? visibleModules.map(renderModule).join("") : renderEmpty(route);

    app.innerHTML = `
      <main class="app">
        ${renderTopbar(route, visibleModules)}
        ${renderLegend()}
        <section class="content-list" aria-label="Ergonomics summary goals">
          ${content}
        </section>
      </main>
    `;

    if (shouldRestoreSearch) {
      const searchInput = document.getElementById("summary-search");
      if (searchInput) {
        searchInput.focus();
        searchInput.setSelectionRange(selectionStart, selectionEnd);
      }
    }
  }

  app.addEventListener("input", (event) => {
    if (event.target && event.target.id === "summary-search") {
      state.search = event.target.value;
      render();
    }
  });

  app.addEventListener("click", (event) => {
    const target = event.target;
    if (!target || !target.classList.contains("clear-button") || target.disabled) {
      return;
    }

    state.search = "";
    render();

    const searchInput = document.getElementById("summary-search");
    if (searchInput) {
      searchInput.focus();
    }
  });

  window.addEventListener("hashchange", render);
  render();
})();
