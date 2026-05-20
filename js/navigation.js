import { state } from "./state.js";
export function setupNavigation(app) {
  const navItems = document.querySelectorAll(".nav-item");
  const tabs = document.querySelectorAll(".tab-content");

  function switchTab(tabId, addToHistory = true) {
    state.currentTab = tabId;

    navItems.forEach((item) => {
      item.classList.toggle("active", item.dataset.tab === tabId);
    });

    tabs.forEach((tab) => {
      tab.classList.toggle("hidden", tab.id !== tabId);
    });

    if (addToHistory) {
      history.pushState({ tab: tabId }, "", `#${tabId}`);
    }
  }

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      switchTab(item.dataset.tab);
    });
  });

  window.onpopstate = (event) => {
    if (event.state?.tab) {
      switchTab(event.state.tab, false);
    } else {
      switchTab("resumo", false);
    }
  };

  history.replaceState({ tab: "resumo" }, "", "#resumo");

  app.switchTab = switchTab;
}
