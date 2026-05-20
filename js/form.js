import { addTransaction, loadTransactions } from "./transactions.js";

import { renderTransactions } from "./render.js";

import { state } from "./state.js";

export function setupForm(app) {
  const form = document.getElementById("transactionForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      app.showLoading("Salvando...");

      const type = document.getElementById("transactionType").value;

      const category = document.getElementById("transactionCategory").value;

      const description = document.getElementById(
        "transactionDescription",
      ).value;

      const value = parseFloat(
        document.getElementById("transactionValue").value.replace(",", "."),
      );

      const date = document.getElementById("transactionDate").value;

      const transactionDate = new Date(date);

      await addTransaction({
        type,

        category,

        description,

        value,

        date,

        year: transactionDate.getFullYear(),

        month: transactionDate.getMonth(),
      });

      await loadTransactions();

      renderTransactions();

      app.showToast("Transação salva");

      form.reset();

      app.closeModal();
    } catch (error) {
      console.error(error);

      app.showToast("Erro ao salvar");
    } finally {
      app.hideLoading();
    }
  });
}
