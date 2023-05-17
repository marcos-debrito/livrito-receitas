import { recipes } from "./database.js";

const recipe = localStorage.getItem("receita");
console.log(recipe);
const returnHome = () => {
  const button = document.querySelector("#closeButton");
  button.addEventListener("click", () => {
    localStorage.clear();
    location.replace("../../index.html");
  });
};

const renderRecipe = (obj) => {
  const name = document.querySelector(".nameRecipe");
  name.innerHTML = obj.nome;
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  const ol = document.querySelector("ol");
  ol.innerHTML = "";
  let ingredientes = obj.ingredientes;

  ingredientes.forEach((element) => {
    ul.insertAdjacentHTML(
      "beforeend",
      `
            <li>${element}</li>
        `
    );
  });

  let preparo = obj.preparo;
  preparo.forEach((element) => {
    ol.insertAdjacentHTML(
      "beforeend",
      `
            <li>${element}</li>
        `
    );
  });
};

for (let i = 0; i < recipes.length; i++) {
  if (recipes[i].nome == recipe) {
    console.log(recipes[i]);
    renderRecipe(recipes[i]);
    returnHome();
  }
}
