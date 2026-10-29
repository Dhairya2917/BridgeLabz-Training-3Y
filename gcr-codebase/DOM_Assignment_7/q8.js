// Q8: Custom dropdown without a select element; capture-phase click closes outside.
const dropdown = document.querySelector("#dropdown");
const toggle = document.querySelector("#dropdownToggle");
const options = document.querySelector("#options");
const selection = document.querySelector("#selection");
function setDropdownOpen(open) {
  options.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
}
toggle.addEventListener("click", event => {
  event.stopPropagation();
  setDropdownOpen(!options.classList.contains("open"));
});
options.addEventListener("click", event => {
  const option = event.target.closest('button[role="option"]');
  if (!option) return;
  toggle.textContent = `${option.textContent} ▾`;
  selection.textContent = `Selected course: ${option.textContent}`;
  setDropdownOpen(false);
});
document.addEventListener("click", event => {
  if (!dropdown.contains(event.target)) setDropdownOpen(false);
}, true);