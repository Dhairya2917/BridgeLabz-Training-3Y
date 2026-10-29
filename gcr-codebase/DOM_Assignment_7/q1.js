// Q1: Add, edit, and delete products using event delegation.
const productForm = document.querySelector("#productForm");
const productInput = document.querySelector("#productInput");
const productList = document.querySelector("#productList");
let productId = 0;

productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = productInput.value.trim();
  if (!name) return;
  const item = document.createElement("div");
  item.className = "product-item";
  item.dataset.id = String(++productId);
  const label = document.createElement("span");
  label.className = "product-name";
  label.textContent = name;
  const edit = document.createElement("button");
  edit.type = "button"; edit.dataset.action = "edit"; edit.textContent = "Edit";
  const remove = document.createElement("button");
  remove.type = "button"; remove.dataset.action = "delete"; remove.className = "danger"; remove.textContent = "Delete";
  item.append(label, edit, remove);
  productList.append(item);
  productInput.value = "";
  productInput.focus();
});

function saveEditedItem(item) {
  if (!item) return;
  const editor = item.querySelector("input");
  if (!editor) return;
  const newName = editor.value.trim();
  const label = document.createElement("span");
  label.className = "product-name";
  label.textContent = newName || editor.dataset.original || "Untitled product";
  editor.replaceWith(label);
  item.dataset.editing = "false";
}

productList.addEventListener("click", (event) => {
  const actionButton = event.target.closest("button[data-action]");
  if (!actionButton) return;
  const item = actionButton.closest(".product-item");
  if (actionButton.dataset.action === "delete") {
    item.remove();
  } else if (actionButton.dataset.action === "edit") {
    const oldEditor = productList.querySelector(".product-item input");
    if (oldEditor) saveEditedItem(oldEditor.closest(".product-item"));
    const label = item.querySelector(".product-name");
    const editor = document.createElement("input");
    editor.value = label.textContent;
    editor.dataset.original = label.textContent;
    editor.setAttribute("aria-label", "Edit product name");
    editor.style.margin = "0";
    label.replaceWith(editor);
    editor.focus();
    editor.select();
  }
});

document.addEventListener("click", (event) => {
  const editingItem = productList.querySelector(".product-item input");
  if (editingItem && !editingItem.closest(".product-item").contains(event.target)) {
    saveEditedItem(editingItem.closest(".product-item"));
  }
});
productList.addEventListener("keydown", (event) => {
  if (event.target.matches("input") && event.key === "Enter") {
    event.preventDefault();
    saveEditedItem(event.target.closest(".product-item"));
  }
});