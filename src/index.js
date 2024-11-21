import './styles/style.css'
import './styles/animations.css'


//Loading screen, credits to https://codepen.io/abaicus/pen/ypXypE:
(function (){
    const loader = document.querySelector(".loader");
    const loadDiv = document.querySelector(".load-div");
  
    window.addEventListener("load", function(event) {
        loadDiv.style.display = "block";
        loader.style.display = "none";
        
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
        nav.innerHTML = "<h1>Pablo Porta</h1> <ul class='nav-links'> <li><a href='#'>Home</a></li> <li><a href='#''>Blog</a></li> <li><a href='#'>Contact</a></li> <li><a href='#''>About</a></li>";
        queryState = 1;
    }
};

mediaQuery();
window.addEventListener('resize', function() {mediaQuery()});

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
        if (entry.isIntersecting){
            setTimeout(function(){
                entry.target.classList.add("show");
            }, 400);
        }
    });
});

const animationObjects = document.querySelectorAll(".animation");
console.log(document.querySelectorAll(".animation"))
animationObjects.forEach((el)=>{observer.observe(el)});
