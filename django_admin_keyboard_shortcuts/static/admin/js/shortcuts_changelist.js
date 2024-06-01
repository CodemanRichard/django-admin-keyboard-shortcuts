let checkboxes = null;
let currentCheckbox = null;

function setUpShortcuts() {
  checkboxes = document.querySelectorAll("#action-toggle, .action-select");
}

function focusPreviousCheckbox() {
  if (!currentCheckbox) {
    currentCheckbox = checkboxes.length - 1;
  } else {
    currentCheckbox = checkboxes[Array.prototype.indexOf.call(checkboxes, currentCheckbox) - 1];
  }
  currentCheckbox.focus();
}

function focusNextCheckbox() {
  if (!currentCheckbox) {
    currentCheckbox = checkboxes[0];
  } else {
    currentCheckbox = checkboxes[Array.prototype.indexOf.call(checkboxes, currentCheckbox) + 1];
  }
  currentCheckbox.focus();
}

function selectCheckbox() {
  if (currentCheckbox) {
    currentCheckbox.click();
  }
}

function selectActionsSelect() {
  const actionsSelect = document.querySelector("select[name=action]")
  actionsSelect.focus();
}

function handleKeyUp(event) {
  switch (event.code) {
    case "KeyJ":
      focusPreviousCheckbox();
      break;
    case "KeyK":
      focusNextCheckbox();
      break;
    case "KeyX":
      selectCheckbox();
      break;
      case "KeyA":
        selectActionsSelect();
      break;
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setUpShortcuts);
} else {
  setUpShortcuts();
}
document.addEventListener("keyup", handleKeyUp);
