(function () {
  const STORAGE_KEY = "hb-theme";

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* ignore */
    }
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const buttons = document.querySelectorAll("[data-theme-toggle]");
    buttons.forEach((btn) => {
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"
      );
      btn.setAttribute("title", theme === "dark" ? "Modo claro" : "Modo oscuro");
    });
  }

  function toggleTheme() {
    const current = document.documentElement.dataset.theme || "light";
    const next = current === "dark" ? "light" : "dark";
    setStoredTheme(next);
    applyTheme(next);
  }

  function init() {
    const stored = getStoredTheme();
    const theme = stored === "dark" || stored === "light" ? stored : "light";
    applyTheme(theme);

    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.addEventListener("click", toggleTheme);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.HBTheme = { toggle: toggleTheme, apply: applyTheme };
})();
