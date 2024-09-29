import './style.css'

const nav = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
let menuToggle;
let menuState = 0;
let queryState = 1000;

//Mobile Menu Interactions:
function mediaQuery(){
    let width = window.innerWidth

    if (width <= 580 && queryState != 0){
        nav.innerHTML = "<h1>Pablo Porta</h1> <div id='menuToggle'> <input class='mediaButton' type='checkbox' /> <span></span> <span></span> <span></span> </div>";
        menuActivation();
        queryState = 0;

    } else if (width >= 580 && queryState != 1){
        nav.innerHTML = "<h1>Pablo Porta</h1> <ul class='nav-links'> <li><a href='#'>Place</a></li> <li><a href='#''>Holder</a></li> <li><a href='#'>Place</a></li> <li><a href='#''>Holder</a></li>";
        menu.innerHTML = " ";
        queryState = 1;
    }
};

mediaQuery();
window.addEventListener('resize', function() {mediaQuery()});

function menuActivation(){
    if (menuState == 0){
        menuToggle = document.querySelector("#menuToggle"); 
        menuToggle.addEventListener("click", ()=>{
            menu.innerHTML = "<ul id='menu'><li><a href='#'>Place</a></li><li><a href='#'>Holder</a></li><li><a href='#'>Place</a></li><li><a href='#'>Holder</a></li></ul>";
            menuTab = document.querySelector("#menu"); //Código a tratar
            menuTab.setAttribute("left", "100px")
            menuState = 1;
            menuActivation();
        });
        menuState = 1;
    } else{
        menuToggle = document.querySelector("#menuToggle"); 
        menuToggle.addEventListener("click", ()=>{
            menu.innerHTML = " ";
            menuState = 0;
            menuActivation();
        });
        menuState = 0;
    }
};