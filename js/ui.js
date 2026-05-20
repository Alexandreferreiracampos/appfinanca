export function showLoading(text = "Carregando...") {
  const overlay = document.getElementById("loadingOverlay");

  const loadingText = document.getElementById("loadingText");

  loadingText.textContent = text;

  overlay.classList.add("active");
}

export function hideLoading() {
  document.getElementById("loadingOverlay").classList.remove("active");
}

export function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
