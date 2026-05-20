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

import { setupForm } from "./form.js";

import { renderTransactions } from "./render.js";

import { setupModals } from "./modals.js";

const app = {
  state,
  auth,
  db,

  addTransaction,
  loadTransactions,
  removeTransaction,
  editTransaction,
  renderTransactions,

  showLoading,
  hideLoading,
  showToast,
};

async function initializeApp() {
  app.showLoading("Iniciando aplicação...");

  try {
    await initializeAuth(app);
    await loadTransactions();
    await loadTransactions();

    setupNavigation(app);
    setupForm(app);

    const modals = setupModals();

    app.openModal = modals.openModal;

    app.closeModal = modals.closeModal;

    app.showToast("Aplicação iniciada");
  } catch (error) {
    console.error(error);

    app.showToast("Erro ao iniciar");
  } finally {
    app.hideLoading();
  }
}

initializeApp();

window.app = app;
