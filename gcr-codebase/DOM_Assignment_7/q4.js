// Q4: Apply themes with setAttribute and save the theme in a custom attribute.
const themeButtons = document.querySelectorAll("button[data-theme-choice]");
const themeStatus = document.querySelector("#themeStatus");
document.body.setAttribute("data-current-theme", "light");
themeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const theme = button.getAttribute("data-theme-choice");
    document.body.setAttribute("data-theme", theme);
    document.body.setAttribute("data-current-theme", theme);
    themeStatus.textContent = `Current theme: ${document.body.getAttribute("data-current-theme")}`;
  });
});