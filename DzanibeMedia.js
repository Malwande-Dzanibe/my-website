

const menuBarsButton = document.querySelector(".menu-bars")
const menuLinks = document.querySelector(".nav-links")
const top1 = document.querySelector(".top")
const hero = document.querySelector(".hero")
const closeMenu = document.querySelector(".close-menu")
const flexContainer = document.querySelector(".flex-container")
const projectsSection = document.querySelector(".p-card")
const about = document.querySelector("#about-me")
const projects = document.querySelector("#projects")
const profilePic = document.querySelector(".profile-pic")
const footerElement = document.querySelector(".footer")

menuBarsButton.addEventListener("click", function(){
    menuBarsButton.classList.toggle("close")
    menuLinks.classList.toggle("show")
    profilePic.classList.toggle("show")
})

document.addEventListener("scroll", function(){
    const scl = window.scrollY
    if(scl > projects.offsetTop){
        top1.classList.add("show-top")
    }else{
        top1.classList.remove("show-top")
    }
})

const footerYear = new Date().getFullYear()

footerElement.innerHTML = `Dzanibe Media &copy; ${footerYear},  All rights reserved`



