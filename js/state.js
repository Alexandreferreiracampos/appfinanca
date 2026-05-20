export const state = {
  selectedYear: new Date().getFullYear(),

  selectedMonth: new Date().getMonth(),

  currentTab: "resumo",

  transactions: [],

  categories: {
    receitas: [],
    gastos: [],
    pendentes: [],
  },

  editingTransaction: null,

  currentCategoryView: null,

  loading: false,

  search: "",
};
