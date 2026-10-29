// Q3: Three-step form with validation and summary.
const wizardForm = document.querySelector("#wizardForm");
const steps = [...document.querySelectorAll(".step")];
const backButton = document.querySelector("#back");
const nextButton = document.querySelector("#next");
const finishButton = document.querySelector("#finish");
const summary = document.querySelector("#summary");
let currentStep = 0;

function isStepValid(index) {
  const field = steps[index].querySelector("input");
  const error = steps[index].querySelector(".error");
  let valid = field.checkValidity() && field.value.trim() !== "";
  if (field.id === "password" && field.value.length < 6) valid = false;
  error.textContent = valid ? "" : field.validationMessage || "Please enter a valid value.";
  if (!field.value.trim()) error.textContent = "This field is required.";
  return valid;
}
function showStep(index) {
  steps.forEach((step, i) => step.hidden = i !== index);
  backButton.hidden = index === 0;
  nextButton.hidden = index === steps.length - 1;
  finishButton.hidden = index !== steps.length - 1;
  summary.textContent = "";
}
nextButton.addEventListener("click", () => {
  if (!isStepValid(currentStep)) return;
  currentStep++;
  showStep(currentStep);
});
backButton.addEventListener("click", () => {
  currentStep = Math.max(0, currentStep - 1);
  showStep(currentStep);
});
wizardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!isStepValid(currentStep)) return;
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  summary.innerHTML = `<h2>Summary</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Password:</strong> ••••••</p>`;
  wizardForm.hidden = true;
});
function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
showStep(currentStep);