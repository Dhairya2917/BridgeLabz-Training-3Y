// Q2: Count remaining characters and warn at 20 or fewer.
const message = document.querySelector("#message");
const counter = document.querySelector("#counter");
const resetButton = document.querySelector("#reset");
const maxCharacters = 100;

function updateCounter() {
  const remaining = maxCharacters - message.value.length;
  counter.textContent = `${remaining} characters remaining`;
  counter.style.color = remaining === 0 ? "red" : remaining <= 20 ? "#ca8a04" : "#202333";
}
message.addEventListener("input", updateCounter);
message.addEventListener("keydown", (event) => {
  if (message.value.length >= maxCharacters &&
      !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"].includes(event.key) &&
      !(event.ctrlKey || event.metaKey)) {
    event.preventDefault();
  }
});
message.addEventListener("paste", (event) => {
  const pastedText = event.clipboardData.getData("text");
  if (message.value.length + pastedText.length > maxCharacters) {
    event.preventDefault();
    message.value += pastedText.slice(0, maxCharacters - message.value.length);
    updateCounter();
  }
});
resetButton.addEventListener("click", () => {
  message.value = "";
  updateCounter();
  message.focus();
});
updateCounter();