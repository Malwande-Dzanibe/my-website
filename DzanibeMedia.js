

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

const projects = [
    {
        id : 01,
        projectLink : "https://malwande-dzanibe.github.io/questions",
        projectTittle : "Questions Project",
        prjectImage : "./images/Screenshot (14).jpg"
    },
    {
        id : 02,
        projectLink : "https://malwande-dzanibe.github.io/cars",
        projectTittle : "Favorite Cars Project",
        prjectImage : "./images/01mercepexels-photo-120049.jpeg"
    },
    {
        id : 03,
        projectLink : "https://malwande-dzanibe.github.io/kota",
        projectTittle : "Kota Menu Project",
        prjectImage : "./FB_IMG_1663420490758.jpg"
    },
    {
        id : 04,
        projectLink : "https://malwande-dzanibe.github.io/clock",
        projectTittle : "Digital Clock Project",
        prjectImage : "./pexels-aphiwat-chuangchoem-359989.jpg"
    },
]



window.addEventListener("DOMContentLoaded", function(){
    showProjects()
})

function showProjects(){
    const amaProject = projects.map(function(items){
        return`<a class="p-title" href=${items.projectLink} target="_blank"><h4>${items.projectTittle}</h4></a>
        <a class="p-link" href=${items.projectLink} target="_blank"><img class="p-image" src=${items.prjectImage}></a>`
    }).join("")
    projectsSection.innerHTML = amaProject
}