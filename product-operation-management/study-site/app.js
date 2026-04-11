(function () {
  const app = document.getElementById("app");
  const data = window.POM_SUMMARIES;

  if (!app || !data || !Array.isArray(data.categories) || !Array.isArray(data.weeks)) {
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

  const categories = data.categories;
  const weeks = data.weeks;

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function parseRoute() {
    const raw = window.location.hash.replace(/^#/, "") || "home";
    const parts = raw.split("/").filter(Boolean);

    if (parts[0] === "category" && parts[2] === "week") {
      return {
        view: "category-week",
        categoryKey: parts[1],
        week: Number.parseInt(parts[3], 10),
      };
    }

    if (parts[0] === "category") {
      return {
        view: "category",
        categoryKey: parts[1],
      };
    }

    if (parts[0] === "week") {
      return {
        view: "week",
        week: Number.parseInt(parts[1], 10),
      };
    }

    return { view: "home" };
  }

  function getCategory(categoryKey) {
    return categories.find((category) => category.key === categoryKey) || null;
  }

  function getWeek(weekNumber) {
    return weeks.find((week) => week.week === weekNumber) || null;
  }

  function isValidWeek(weekNumber) {
    return Number.isInteger(weekNumber) && Boolean(getWeek(weekNumber));
  }

  function normalizeRoute(route) {
    if (route.view === "category-week") {
      if (!getCategory(route.categoryKey) || !isValidWeek(route.week)) {
        return { view: "home" };
      }
      return route;
    }

    if (route.view === "category") {
      return getCategory(route.categoryKey) ? route : { view: "home" };
    }

    if (route.view === "week") {
      return isValidWeek(route.week) ? route : { view: "home" };
    }

    return { view: "home" };
  }

  function routeToHash(route) {
    if (route.view === "category-week") {
      return `#category/${route.categoryKey}/week/${route.week}`;
    }

    if (route.view === "category") {
      return `#category/${route.categoryKey}`;
    }

    if (route.view === "week") {
      return `#week/${route.week}`;
    }

    return "#home";
  }

  function getSelectedCategoryKey(route) {
    return route.view === "category" || route.view === "category-week" ? route.categoryKey : "all";
  }

  function getSelectedWeek(route) {
    return route.view === "week" || route.view === "category-week" ? route.week : "all";
  }

  function makeRoute(categoryKey, weekNumber) {
    if (categoryKey !== "all" && weekNumber !== "all") {
      return `#category/${categoryKey}/week/${weekNumber}`;
    }

    if (categoryKey !== "all") {
      return `#category/${categoryKey}`;
    }

    if (weekNumber !== "all") {
      return `#week/${weekNumber}`;
    }

    return "#home";
  }

  function renderTopbar(route) {
    const selectedCategoryKey = getSelectedCategoryKey(route);
    const selectedWeek = getSelectedWeek(route);
    const categoryChips = [
      `<a class="chip" href="${makeRoute("all", selectedWeek)}" aria-current="${
        selectedCategoryKey === "all" ? "page" : "false"
      }">전체</a>`,
      ...categories.map(
        (category) => `<a class="chip" href="${makeRoute(category.key, selectedWeek)}" aria-current="${
          selectedCategoryKey === category.key ? "page" : "false"
        }">${escapeHtml(category.label)}</a>`
      ),
    ].join("");
    const weekChips = [
      `<a class="chip" href="${makeRoute(selectedCategoryKey, "all")}" aria-current="${
        selectedWeek === "all" ? "page" : "false"
      }">전체</a>`,
      ...weeks.map(
        (week) => `<a class="chip" href="${makeRoute(selectedCategoryKey, week.week)}" aria-current="${
          selectedWeek === week.week ? "page" : "false"
        }">Week ${week.week}</a>`
      ),
    ].join("");

    return `
      <header class="topbar">
        <div class="brand">
          <p class="eyebrow">Product Operation Management</p>
          <h1>POM Summaries</h1>
          <p>모바일에서 빠르게 훑어보는 중간고사 요약</p>
        </div>
        <nav class="controls" aria-label="요약 필터">
          <div class="control-group" aria-label="자료 종류">${categoryChips}</div>
          <div class="control-group" aria-label="주차">${weekChips}</div>
        </nav>
      </header>
    `;
  }

  function renderHero(title, copy) {
    return `
      <section class="hero">
        <div>
          <h2>${escapeHtml(title)}</h2>
          <p>${escapeHtml(copy)}</p>
        </div>
        <div class="stat-row">
          <div class="stat"><strong>${data.stats.totalCategories}</strong><span>자료 종류</span></div>
          <div class="stat"><strong>${data.stats.totalWeeks}</strong><span>주차</span></div>
          <div class="stat"><strong>${data.stats.totalSections}</strong><span>섹션</span></div>
        </div>
      </section>
    `;
  }

  function getEntries(route) {
    if (route.view === "category-week") {
      const week = getWeek(route.week);
      return week.categories
        .filter((category) => category.key === route.categoryKey)
        .map((category) => ({ week: week.week, category }));
    }

    if (route.view === "category") {
      return weeks.flatMap((week) =>
        week.categories
          .filter((category) => category.key === route.categoryKey)
          .map((category) => ({ week: week.week, category }))
      );
    }

    if (route.view === "week") {
      const week = getWeek(route.week);
      return week.categories.map((category) => ({ week: week.week, category }));
    }

    return weeks.flatMap((week) =>
      week.categories.map((category) => ({ week: week.week, category }))
    );
  }

  function renderSummaryEntry(entry) {
    const sections = entry.category.sections
      .map(
        (section) => `
          <section class="section">
            <h3>${escapeHtml(section.heading)}</h3>
            ${section.html}
          </section>
        `
      )
      .join("");

    return `
      <article class="summary-block" id="${escapeHtml(entry.category.key)}-week-${entry.week}">
        <header class="summary-header">
          <p>${escapeHtml(entry.category.label)}</p>
          <h2>Week ${entry.week}</h2>
        </header>
        ${sections}
      </article>
    `;
  }

  function renderQuickLinks() {
    const categoryLinks = categories
      .map(
        (category) =>
          `<a class="link-chip" href="#category/${category.key}">${escapeHtml(category.label)}</a>`
      )
      .join("");
    const weekLinks = weeks
      .map((week) => `<a class="link-chip" href="#week/${week.week}">Week ${week.week}</a>`)
      .join("");

    return `
      <section class="hero">
        <h2>자료별로 보기</h2>
        <div class="quick-grid">${categoryLinks}</div>
      </section>
      <section class="hero">
        <h2>주차별로 보기</h2>
        <div class="quick-grid">${weekLinks}</div>
      </section>
    `;
  }

  function getPageTitle(route) {
    if (route.view === "category-week") {
      return `Week ${route.week} · ${getCategory(route.categoryKey).label}`;
    }

    if (route.view === "category") {
      return `${getCategory(route.categoryKey).label} 전체`;
    }

    if (route.view === "week") {
      return `Week ${route.week} 전체`;
    }

    return "전체 요약";
  }

  function renderEmpty() {
    return `
      <section class="empty-state">
        <h2>표시할 요약이 없습니다.</h2>
        <p>선택한 자료 종류와 주차 조합에 해당하는 요약이 없습니다.</p>
      </section>
    `;
  }

  function render() {
    const route = normalizeRoute(parseRoute());
    if (window.location.hash && window.location.hash !== routeToHash(route)) {
      window.location.hash = routeToHash(route);
      return;
    }

    const entries = getEntries(route);
    const quickLinks = route.view === "home" ? renderQuickLinks() : "";
    const summaryList = entries.length
      ? `<section class="content-list">${entries.map(renderSummaryEntry).join("")}</section>`
      : renderEmpty();

    app.innerHTML = `
      <main class="app">
        ${renderTopbar(route)}
        ${renderHero(getPageTitle(route), "필요한 자료 종류와 주차만 골라서 읽을 수 있습니다.")}
        ${quickLinks}
        ${summaryList}
      </main>
    `;
  }

  window.addEventListener("hashchange", render);
  render();
})();
