(function () {
  const app = document.getElementById("app");
  const data = window.MIS_DATA;

  if (!app || !data || !Array.isArray(data.weeks)) {
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

  const weeks = data.weeks;
  const materials = [
    { key: "summary", label: "Summary" },
    { key: "terms", label: "Key Terms" },
    { key: "essays", label: "Essays" },
  ];

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function parseWeek(value) {
    return Number.parseInt(value, 10);
  }

  function getWeek(weekNumber) {
    return weeks.find((week) => week.week === weekNumber) || null;
  }

  function isValidWeek(weekNumber) {
    return Number.isInteger(weekNumber) && Boolean(getWeek(weekNumber));
  }

  function getMaterial(materialKey) {
    return materials.find((material) => material.key === materialKey) || null;
  }

  function getMaterialItems(materialKey, week) {
    if (materialKey === "summary") {
      return week.summary || [];
    }

    if (materialKey === "terms") {
      return week.terms || [];
    }

    if (materialKey === "essays") {
      return week.essays || [];
    }

    return [];
  }

  function hasMaterialItems(materialKey, week) {
    return getMaterialItems(materialKey, week).length > 0;
  }

  function parseLegacyRoute(parts) {
    const [view, scope] = parts;

    if (view === "summary") {
      if (scope === "all") {
        return { view: "material", materialKey: "summary" };
      }
      return { view: "material-week", materialKey: "summary", week: parseWeek(scope) };
    }

    if (view === "essay") {
      if (scope === "all") {
        return { view: "material", materialKey: "essays" };
      }
      return { view: "material-week", materialKey: "essays", week: parseWeek(scope) };
    }

    if (view === "fill" || view === "flashcard") {
      if (scope === "all") {
        return { view: "material", materialKey: "terms" };
      }
      return { view: "material-week", materialKey: "terms", week: parseWeek(scope) };
    }

    return null;
  }

  function parseRoute() {
    const raw = window.location.hash.replace(/^#/, "") || "home";
    const parts = raw.split("/").filter(Boolean);
    const legacyRoute = parseLegacyRoute(parts);

    if (legacyRoute) {
      return legacyRoute;
    }

    if (parts[0] === "material" && parts[2] === "week") {
      return {
        view: "material-week",
        materialKey: parts[1],
        week: parseWeek(parts[3]),
      };
    }

    if (parts[0] === "material") {
      return {
        view: "material",
        materialKey: parts[1],
      };
    }

    if (parts[0] === "week") {
      return {
        view: "week",
        week: parseWeek(parts[1]),
      };
    }

    return { view: "home" };
  }

  function normalizeRoute(route) {
    if (route.view === "material-week") {
      if (!getMaterial(route.materialKey) || !isValidWeek(route.week)) {
        return { view: "home" };
      }
      return route;
    }

    if (route.view === "material") {
      return getMaterial(route.materialKey) ? route : { view: "home" };
    }

    if (route.view === "week") {
      return isValidWeek(route.week) ? route : { view: "home" };
    }

    return { view: "home" };
  }

  function routeToHash(route) {
    if (route.view === "material-week") {
      return `#material/${route.materialKey}/week/${route.week}`;
    }

    if (route.view === "material") {
      return `#material/${route.materialKey}`;
    }

    if (route.view === "week") {
      return `#week/${route.week}`;
    }

    return "#home";
  }

  function getSelectedMaterialKey(route) {
    return route.view === "material" || route.view === "material-week"
      ? route.materialKey
      : "all";
  }

  function getSelectedWeek(route) {
    return route.view === "week" || route.view === "material-week" ? route.week : "all";
  }

  function makeRoute(materialKey, weekNumber) {
    if (materialKey !== "all" && weekNumber !== "all") {
      return `#material/${materialKey}/week/${weekNumber}`;
    }

    if (materialKey !== "all") {
      return `#material/${materialKey}`;
    }

    if (weekNumber !== "all") {
      return `#week/${weekNumber}`;
    }

    return "#home";
  }

  function getEntries(route) {
    if (route.view === "material-week") {
      const week = getWeek(route.week);
      const material = getMaterial(route.materialKey);
      return hasMaterialItems(material.key, week) ? [{ week, material }] : [];
    }

    if (route.view === "material") {
      const material = getMaterial(route.materialKey);
      return weeks
        .filter((week) => hasMaterialItems(material.key, week))
        .map((week) => ({ week, material }));
    }

    if (route.view === "week") {
      const week = getWeek(route.week);
      return materials
        .filter((material) => hasMaterialItems(material.key, week))
        .map((material) => ({ week, material }));
    }

    return weeks.flatMap((week) =>
      materials
        .filter((material) => hasMaterialItems(material.key, week))
        .map((material) => ({ week, material }))
    );
  }

  function renderTopbar(route) {
    const selectedMaterialKey = getSelectedMaterialKey(route);
    const selectedWeek = getSelectedWeek(route);
    const materialChips = [
      `<a class="chip" href="${makeRoute("all", selectedWeek)}" aria-current="${
        selectedMaterialKey === "all" ? "page" : "false"
      }">전체</a>`,
      ...materials.map(
        (material) => `<a class="chip" href="${makeRoute(material.key, selectedWeek)}" aria-current="${
          selectedMaterialKey === material.key ? "page" : "false"
        }">${escapeHtml(material.label)}</a>`
      ),
    ].join("");
    const weekChips = [
      `<a class="chip" href="${makeRoute(selectedMaterialKey, "all")}" aria-current="${
        selectedWeek === "all" ? "page" : "false"
      }">전체</a>`,
      ...weeks.map(
        (week) => `<a class="chip" href="${makeRoute(selectedMaterialKey, week.week)}" aria-current="${
          selectedWeek === week.week ? "page" : "false"
        }">Week ${week.week}</a>`
      ),
    ].join("");

    return `
      <header class="topbar">
        <div class="brand">
          <p class="eyebrow">Management Information System</p>
          <h1>MIS Midterm Study</h1>
          <p>요약, 핵심 용어, 에세이를 필요한 주차만 골라서 읽기</p>
        </div>
        <nav class="controls" aria-label="MIS 자료 필터">
          <div class="control-group" aria-label="자료 종류">${materialChips}</div>
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
          <div class="stat"><strong>${data.stats.totalSummarySections}</strong><span>요약 섹션</span></div>
          <div class="stat"><strong>${data.stats.totalTerms}</strong><span>핵심 용어</span></div>
          <div class="stat"><strong>${data.stats.totalEssays}</strong><span>에세이</span></div>
        </div>
      </section>
    `;
  }

  function renderQuickLinks() {
    const materialLinks = materials
      .map(
        (material) =>
          `<a class="link-chip" href="#material/${material.key}">${escapeHtml(material.label)}</a>`
      )
      .join("");
    const weekLinks = weeks
      .map((week) => `<a class="link-chip" href="#week/${week.week}">Week ${week.week}</a>`)
      .join("");

    return `
      <section class="hero">
        <h2>자료별로 보기</h2>
        <div class="quick-grid">${materialLinks}</div>
      </section>
      <section class="hero">
        <h2>주차별로 보기</h2>
        <div class="quick-grid">${weekLinks}</div>
      </section>
    `;
  }

  function renderSummary(week) {
    return week.summary
      .map(
        (section) => `
          <section class="section">
            <h3>${escapeHtml(section.heading)}</h3>
            ${section.html}
          </section>
        `
      )
      .join("");
  }

  function renderTerms(week) {
    const terms = week.terms
      .map(
        (term) => `
          <article class="term-item">
            <h4>${escapeHtml(term.term)}</h4>
            <p>${escapeHtml(term.definition)}</p>
            ${term.note ? `<p class="term-note">${escapeHtml(term.note)}</p>` : ""}
          </article>
        `
      )
      .join("");

    return `
      <section class="section">
        <h3>핵심 용어</h3>
        <div class="term-list">${terms}</div>
      </section>
    `;
  }

  function renderEssays(week) {
    return week.essays
      .map((essay, index) => {
        const answer = String(essay.answer || "")
          .split(/\n{2,}/)
          .map((paragraph) => paragraph.trim())
          .filter(Boolean)
          .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
          .join("");

        return `
          <section class="section essay-section">
            <h3>Q${index + 1}. ${escapeHtml(essay.question)}</h3>
            <div class="essay-answer">${answer}</div>
          </section>
        `;
      })
      .join("");
  }

  function renderEntry(entry) {
    let sections = "";

    if (entry.material.key === "summary") {
      sections = renderSummary(entry.week);
    } else if (entry.material.key === "terms") {
      sections = renderTerms(entry.week);
    } else if (entry.material.key === "essays") {
      sections = renderEssays(entry.week);
    }

    return `
      <article class="summary-block" id="${escapeHtml(entry.material.key)}-week-${entry.week.week}">
        <header class="summary-header">
          <p>${escapeHtml(entry.material.label)}</p>
          <h2>Week ${entry.week.week}: ${escapeHtml(entry.week.title)}</h2>
        </header>
        ${sections}
      </article>
    `;
  }

  function getPageTitle(route) {
    if (route.view === "material-week") {
      return `Week ${route.week} · ${getMaterial(route.materialKey).label}`;
    }

    if (route.view === "material") {
      return `${getMaterial(route.materialKey).label} 전체`;
    }

    if (route.view === "week") {
      return `Week ${route.week} 전체`;
    }

    return "전체 자료";
  }

  function renderEmpty() {
    return `
      <section class="empty-state">
        <h2>표시할 자료가 없습니다.</h2>
        <p>선택한 자료 종류와 주차 조합에 해당하는 내용이 없습니다.</p>
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
    const content = entries.length
      ? `<section class="content-list">${entries.map(renderEntry).join("")}</section>`
      : renderEmpty();

    app.innerHTML = `
      <main class="app">
        ${renderTopbar(route)}
        ${renderHero(getPageTitle(route), "필요한 자료 종류와 주차만 골라서 읽을 수 있습니다.")}
        ${quickLinks}
        ${content}
      </main>
    `;

    document.title =
      route.view === "home"
        ? "MIS Midterm Study"
        : `${getPageTitle(route)} | MIS Midterm Study`;
  }

  window.addEventListener("hashchange", render);
  render();
})();
