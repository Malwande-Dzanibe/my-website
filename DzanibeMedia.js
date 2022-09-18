

const menuBarsButton = document.querySelector(".menu-bars")
const menuLinks = document.querySelector("ul")
const top1 = document.querySelector(".top")
const hero = document.querySelector(".hero")
const closeMenu = document.querySelector(".close-menu")
const flexContainer = document.querySelector(".flex-container")
const projectsSection = document.querySelector(".p-card")

closeMenu.addEventListener("click", function(){
    menuLinks.style.display = "none"
    flexContainer.classList.remove("ghost-close-menu")
})

menuBarsButton.addEventListener("click", function(){
    menuLinks.style.display = "block"
    flexContainer.classList.add("ghost-close-menu")
})

document.addEventListener("scroll", function(){
    if(window.scrollY > 680){
        top1.classList.add("show-top")
    }else{
        top1.classList.remove("show-top")
    }
})

const projects = [
    {
        id : 01,
        projectLink : "https://malwande-dzanibe.github.io/questions",
        projectTittle : "My questions project",
        prjectImage : "./images/Screenshot (14).jpg"
    },
    {
        id : 02,
        projectLink : "https://malwande-dzanibe.github.io/cars",
        projectTittle : "My favorite cars project",
        prjectImage : "./images/01mercepexels-photo-120049.jpeg"
    },
    {
        id : 03,
        projectLink : "https://malwande-dzanibe.github.io/kota",
        projectTittle : "My Kota menu project",
        prjectImage : "./images/FB_IMG_1663420490758.jpg"
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
    console.log(amaProject);
    projectsSection.innerHTML = amaProject
}