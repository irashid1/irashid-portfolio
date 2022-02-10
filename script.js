const navigationMenuItem = document.querySelector('.menu-item-container').children
const navigationMenu = document.querySelector('.menu-item-container')
const exploreButton = document.getElementById('explore-projects')
const hamburgerMenu = document.querySelector('.menu-icon')
const listElement = document.querySelectorAll('.menu-item')

hamburgerMenu.addEventListener("click", () => {
    navigationMenu.classList.toggle("isActive");
})

listElement.forEach((li) => {
    console.log(li)
    li.addEventListener("click", () => {
        navigationMenu.classList.remove("isActive")
    })

})

const clickHandler = (event) => {
    event.preventDefault()
    const element = event.target
    const href = element.getAttribute("href")  
    const elementTop = document.querySelector(href).offsetTop
    
    scroll({
        top: elementTop,
        behavior: "smooth",
    })
}

for(const link of navigationMenuItem) {
    const anchor = link.children[0]
    anchor.addEventListener("click", clickHandler)
}

exploreButton.addEventListener("click", clickHandler)
