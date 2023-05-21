import { recipes } from "./database.js";



const recipe = localStorage.getItem("receita");
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
            <li>
            
            ${element};
            <input type="checkbox" id="scales" name="scales">
            </li>
        `
    );
  });

  let preparo = obj.preparo;
  preparo.forEach((element) => {
    ol.insertAdjacentHTML(
      "beforeend",
      `
      <li>
        ${element};
        <input type="checkbox" name="scales">
      </li>

      `
    );
  });
};

const renderAddOns = (array) => {

  if (array.length > 0){
  const div = document.querySelector('.add')
  const btn = document.createElement('button')
  btn.innerHTML = 'Adicionais'  
  div.appendChild(btn)
  
  showAdds()
  } else {
    return;
  }
}

const showAdds = () => {
  const buttons = document.querySelectorAll('button')
  const modal = document.querySelector('.modal')
  buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
      console.log(button.innerHTML)
      modal.showModal()
    })
  })
}


for (let i = 0; i < recipes.length; i++) {
  if (recipes[i].nome == recipe) {
    console.log(recipes[i].adicionais.length > 0);
    renderRecipe(recipes[i]);
    renderAddOns(recipes[i].adicionais)
    returnHome();
  }
}
