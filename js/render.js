import { state } from "./state.js";

export function renderTransactions() {
  const receitasList = document.getElementById("receitasList");

  const gastosList = document.getElementById("gastosList");

  const pendentesList = document.getElementById("pendentesList");

  receitasList.innerHTML = "";
  gastosList.innerHTML = "";
  pendentesList.innerHTML = "";

  state.transactions.forEach((transaction) => {
    const item = createTransactionElement(transaction);

    if (transaction.type === "receita") {
      receitasList.appendChild(item);
    }

    if (transaction.type === "gasto") {
      gastosList.appendChild(item);
    }

    if (transaction.type === "pendente") {
      pendentesList.appendChild(item);
    }
  });
}

function createTransactionElement(transaction) {
  const div = document.createElement("div");

  div.className = "transaction-item";

  div.innerHTML = `

    <div class="transaction-header">

      <div class="transaction-info">

        <div class="transaction-description">
          ${transaction.description}
        </div>

        <div class="transaction-date">
          ${transaction.category}
        </div>

      </div>

      <div class="transaction-value">

        R$ ${Number(transaction.value).toFixed(2).replace(".", ",")}

      </div>

    </div>

  `;

  return div;
}
