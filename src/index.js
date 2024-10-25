import './styles/style.css'
import './styles/animations.css'

const nav = document.querySelector(".navbar");
const lateralMenu = document.querySelector("#lateralMenu");
let openButton;
let closeButton = document.querySelector(".closebtn");
let menuState = false;
let queryState = 1000;

//Mobile Menu Interactions:
function mediaQuery(){
    let width = window.innerWidth

    if (width <= 580 && queryState != 0){
        nav.innerHTML = "<h1>Pablo Porta</h1> <div id='menuToggle'> <input class='mediaButton' type='checkbox' /> <span></span> <span></span> <span></span> </div>";
        menuState = 0
        menuActivation();
        queryState = 0;

    } else if (width >= 580 && queryState != 1){
        nav.innerHTML = "<h1>Pablo Porta</h1> <ul class='nav-links'> <li><a href='#'>Place</a></li> <li><a href='#''>Holder</a></li> <li><a href='#'>Place</a></li> <li><a href='#''>Holder</a></li>";
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

