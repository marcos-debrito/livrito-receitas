import { recipes } from "./database.js";

const menuHamburguer = () => {
  const button = document.querySelector(".menu-hamburguer > img");
  const modal = document.querySelector("#hamburguinho");

  button.addEventListener("click", () => {
    modal.classList.add("leftToRight");

    modal.showModal();
    closeMenu();
    search();
  });
};

const closeMenu = () => {
  const closeButton = document.querySelector(".close");
  const modal = document.querySelector("#hamburguinho");

  closeButton.addEventListener("click", () => {
    modal.classList.remove("leftToRight");
    modal.classList.add("rightToLeft");

    setTimeout(() => {
      modal.classList.remove("rightToLeft");
      return modal.close();
    }, 900);
  });
};

menuHamburguer();

const search = () => {
  const input = document.querySelector(".modal__controller > input");
  const searchButton = document.querySelector(".modal__controller > button");

  searchButton.addEventListener("click", () => {
   
    let receita = input.value.toUpperCase();

    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].nome == receita) {
        input.classList.add("found")
        localStorage.setItem("receita", receita);
        setTimeout(() => {
          input.value = "";
          input.classList.remove("found")
          return location.replace("src/pages/recipes.html")
        }, 1000);
      }
    }

     
      input.classList.add("notFound");
      setTimeout(() => {
        input.classList.remove("notFound");
        input.value = "";
      }, 1000);
    
  });
};
