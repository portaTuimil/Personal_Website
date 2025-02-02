import './styles/style.css'
import './styles/animations.css'


//Loading screen, credits to https://codepen.io/abaicus/pen/ypXypE:
(function (){
    const loader = document.querySelector(".loader");
    const loadDiv = document.querySelector(".load-div");
  
    window.addEventListener("load", function(event) {
        loadDiv.style.display = "block";
        loader.style.display = "none";
        document.querySelector(".scroll").scrollIntoView();
    });
})();
  
//Mobile Menu Interactions:
const nav = document.querySelector(".navbar");
const lateralMenu = document.querySelector("#lateralMenu");
let openButton;
let closeButton = document.querySelector(".closebtn");
let menuState = false;
let queryState = 1000;

function mediaQuery(){
    let width = window.innerWidth

    if (width <= 580 && queryState != 0){
        nav.innerHTML = "<h1>Pablo Porta</h1> <div id='menuToggle'> <input class='mediaButton' type='checkbox' /> <span></span> <span></span> <span></span> </div>";
        menuState = 0
        menuActivation();
        queryState = 0;

    } else if (width >= 580 && queryState != 1){
        nav.innerHTML = "<h1>Pablo Porta</h1> <ul class='nav-links'> <li><a href='#' id='home'>Home</a></li> <li><a href='#' id='about'>About</a></li> <li><a href='https://portatuimil.github.io/Technical_Blog/'>Blog</a></li> <li><a href='https://github.com/portaTuimil'  target='_blank'>Contact</a></li>";
        queryState = 1;
    }
};

mediaQuery();
window.addEventListener('resize', function() {mediaQuery(), scrollButtons();});

function menuActivation(){
    if (!menuState){
        openButton = document.querySelector("#menuToggle");
        openButton.addEventListener("click", ()=>{
            lateralMenu.style.width = "200px";
            menuState = true;
            menuActivation();
        });
    } else{
        closeButton.addEventListener("click", ()=>{
            lateralMenu.style.width = "0";
            menuState = false;
            menuActivation();
        });
    }
}

//Animations:
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting && entry.target.classList[0] == "introduction-wrapper"){
            setTimeout(function(){
                entry.target.classList.add("show1");
            }, 150);
        } else if (entry.isIntersecting && entry.target.classList[0] == "divider"){
            setTimeout(function(){
                entry.target.classList.add("show2");
            }, 150);
        } else if (entry.isIntersecting && entry.target.classList[0] == "aboutme"){
            setTimeout(function(){
                entry.target.classList.add("show3");
            }, 150);
        }
    });
});

const animationObjects = document.querySelectorAll(".animation");
animationObjects.forEach((el)=>{observer.observe(el)});

//Nav Buttons Functionality:
function scrollButtons(){
    document.querySelector("#home").addEventListener("click", ()=> {console.log(document.querySelector("#home")); document.querySelector("header").scrollIntoView({behavior: 'smooth'})});
    document.querySelector("#about").addEventListener("click", ()=> {console.log(document.querySelector("#about")); document.querySelector(".divider").scrollIntoView({behavior: 'smooth'})});
};
scrollButtons();