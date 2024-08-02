const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("dialog button");

dialog.showModal();

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});