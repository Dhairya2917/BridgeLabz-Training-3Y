// Q7: Show live client coordinates and place a red dot on double-click.
const mouseBox = document.querySelector("#mouseBox");
const coordinates = document.querySelector("#coordinates");
mouseBox.addEventListener("mousemove", event => {
  coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});
mouseBox.addEventListener("dblclick", event => {
  const bounds = mouseBox.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "dot";
  dot.style.left = `${event.clientX - bounds.left}px`;
  dot.style.top = `${event.clientY - bounds.top}px`;
  mouseBox.append(dot);
});