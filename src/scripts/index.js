import { recipes } from "./database.js"

const menuHamburguer = () => {
    const button = document.querySelector('.menu-hamburguer > img')
    const modal = document.querySelector('#hamburguinho')

    button.addEventListener('click', ()=>{
        modal.classList.add('leftToRight')


        modal.showModal()
        closeMenu()
        search()
    })
}

const closeMenu = () => {
    const closeButton = document.querySelector('.close')
    const modal = document.querySelector('#hamburguinho')

    closeButton.addEventListener('click', () => {
        modal.classList.remove('leftToRight')
        modal.classList.add('rightToLeft')

        setTimeout( ()=> {
            modal.classList.remove('rightToLeft')
            return modal.close()
        }, 900)
        
    })
}

menuHamburguer()

const search = () => {
    const input = document.querySelector('.modal__controller > input')
    const searchButton = document.querySelector('.modal__controller > button')

    searchButton.addEventListener('click', () => {
        console.log(input.value.toUpperCase())
        let receita = input.value.toUpperCase()
        input.value = ''
        
        localStorage.setItem('receita', receita)
        location.replace("src/pages/recipes.html")
    })

}
