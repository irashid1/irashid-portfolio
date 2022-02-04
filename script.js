const navigationMenu = document.querySelector('.menu-item-container').children
const exploreButton = document.getElementById('explore-projects')

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

for(const link of navigationMenu) {
    const anchor = link.children[0]
    anchor.addEventListener("click", clickHandler)
}

exploreButton.addEventListener("click", clickHandler)





// () => {
//     projects.scrollIntoView({
//         behavior: "smooth",
//         block: "start"
//     });
// }