// Q6: Filter student rows as the user types (case-insensitive).
const searchInput = document.querySelector("#search");
const studentRows = [...document.querySelectorAll("#studentRows tr")];
const noResults = document.querySelector("#noResults");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;
  studentRows.forEach(row => {
    const matches = row.textContent.toLowerCase().includes(query);
    row.hidden = !matches;
    if (matches) visibleCount++;
  });
  noResults.hidden = visibleCount !== 0;
});