const li = document.querySelectorAll("li");

const todoInput = document.querySelector("#todo-input");

const addBtn = document.querySelector("#add-btn");

const todo = document.querySelector("#todo");

const create = document.createElement("li");

addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() === "") return;
  create.textContent = todoInput.value;
  todo.appendChild(create);
  todoInput.value = "";
  console.log(
    "Nouveau <li> ajouté… mais il n'a aucun écouteur : le clic ne le rayera pas !",

    console.log(create.length)

    
  );
});

li.forEach((liste) => {
  liste.addEventListener("click", () => {
    liste.classList.toggle("done");
   
  });
});
