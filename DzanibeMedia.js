

const menuBarsButton = document.querySelector(".menu-bars")
const menuLinks = document.querySelector("ul")
const top1 = document.querySelector(".top")

console.log(top1);


menuBarsButton.addEventListener("click", function(){
    if(menuLinks.classList.contains("show")){
        menuLinks.classList.remove("show") 
        menuBarsButton.classList.remove("close-bars")
    }else{
        menuLinks.classList.add("show")
        menuBarsButton.classList.add("close-bars")
    }
})

document.addEventListener("scroll", function(){
    if(window.scrollY > 680){
        top1.classList.add("show-top")
    }else{
        top1.classList.remove("show-top")
    }
})