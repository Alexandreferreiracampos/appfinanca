import { setupNavigation } from "./navigation.js";
import { state } from "./state.js";
import { showLoading, hideLoading, showToast } from "./ui.js";

const app = {
  state,

  showLoading,
  hideLoading,
  showToast,
};

setupNavigation(app);

window.app = app;
