import { setupNavigation } from "./navigation.js";
import { state } from "./state.js";
import { showLoading, hideLoading, showToast } from "./ui.js";
import { auth, db } from "./firebase.js";

const app = {
  state,
  auth,
  db,

  showLoading,
  hideLoading,
  showToast,
};

setupNavigation(app);

window.app = app;
