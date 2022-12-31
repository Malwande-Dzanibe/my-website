

const menuBarsButton = document.querySelector(".menu-bars")
const menuLinks = document.querySelector("ul")
const top1 = document.querySelector(".top")
const hero = document.querySelector(".hero")
const closeMenu = document.querySelector(".close-menu")
const flexContainer = document.querySelector(".flex-container")
const projectsSection = document.querySelector(".p-card")
const about = document.querySelector("#about-me")

closeMenu.addEventListener("click", function(){
    menuLinks.style.display = "none"
    flexContainer.classList.remove("ghost-close-menu")
})

menuBarsButton.addEventListener("click", function(){
    menuLinks.style.display = "block"
    flexContainer.classList.add("ghost-close-menu")
})

document.addEventListener("scroll", function(){
    const scl = window.scrollY
    if(scl > about.offsetTop){
        top1.classList.add("show-top")
    }else{
        top1.classList.remove("show-top")
    }
})



