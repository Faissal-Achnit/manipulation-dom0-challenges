const btn = document.querySelector("#btn");

btn.addEventListener("click", (event) => {
  event.target.textContent = "C'est clique !";
});
