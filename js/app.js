import { setupNavigation } from "./navigation.js";
import { state } from "./state.js";
import { showLoading, hideLoading, showToast } from "./ui.js";
import { auth, db } from "./firebase.js";
import { initializeAuth } from "./auth.js";
import {
  addTransaction,
  loadTransactions,
  removeTransaction,
  editTransaction,
} from "./transactions.js";

const app = {
  state,
  auth,
  db,

  addTransaction,
  loadTransactions,
  removeTransaction,
  editTransaction,

  showLoading,
  hideLoading,
  showToast,
};

async function initializeApp() {
  app.showLoading("Iniciando aplicação...");

  try {
    await initializeAuth(app);
    await loadTransactions();

    setupNavigation(app);

    app.showToast("Aplicação iniciada");
  } catch (error) {
    console.error(error);

    app.showToast("Erro ao iniciar");
  } finally {
    app.hideLoading();
  }
}

setupNavigation(app);

window.app = app;
