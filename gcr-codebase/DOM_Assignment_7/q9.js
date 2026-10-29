// Q9: Validate fields, block invalid submissions, and clear errors while typing.
const signupForm = document.querySelector("#signupForm");
const fields = [
  { input: document.querySelector("#fullName"), error: document.querySelector("#fullNameError"), validate: value => value.trim() ? "" : "Name is required." },
  { input: document.querySelector("#emailAddress"), error: document.querySelector("#emailAddressError"), validate: value => !value.trim() ? "Email is required." : !value.includes("@") ? "Email must contain @." : "" },
  { input: document.querySelector("#userPassword"), error: document.querySelector("#userPasswordError"), validate: value => value.length < 6 ? "Password must be at least 6 characters." : "" }
];
const successMessage = document.querySelector("#successMessage");
function validateField(field) {
  const message = field.validate(field.input.value);
  field.error.textContent = message;
  return !message;
}
fields.forEach(field => {
  field.input.addEventListener("input", () => {
    validateField(field);
    successMessage.textContent = "";
  });
});
signupForm.addEventListener("submit", event => {
  event.preventDefault();
  const valid = fields.map(validateField).every(Boolean);
  if (!valid) {
    successMessage.textContent = "";
    return;
  }
  successMessage.textContent = "Form Submitted Successfully";
  signupForm.reset();
  fields.forEach(field => field.error.textContent = "");
});