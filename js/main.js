import './components/LandingPage.js';
import './components/HoverCard.js';
import './components/PageSection.js';
import './components/NavMenu.js';
import './components/MenuButton.js';

const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("dialog button");

dialog.showModal();

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});