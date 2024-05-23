const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value;

    if (text !== "") {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.textContent = text;

      li.appendChild(p);
      li.appendChild(addDelateBtn());
      ul.appendChild(li);

      input.value = "";
      empty.style.display = "none";
    }
});

function addDelateBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";
    
  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });
  return deleteBtn
}