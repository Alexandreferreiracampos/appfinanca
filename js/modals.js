export function setupModals() {
  const modal = document.getElementById("modal");

  const fabButton = document.getElementById("fabButton");

  const modalClose = document.getElementById("modalClose");

  const formCancel = document.getElementById("formCancel");

  function openModal() {
    console.log("ABRINDO MODAL");
    modal.classList.add("active");
  }

  function closeModal() {
    modal.classList.remove("active");
  }

  fabButton.addEventListener("click", openModal);

  modalClose.addEventListener("click", closeModal);

  formCancel.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  return {
    openModal,
    closeModal,
  };
  console.log("MODALS OK");
}
