const solution = document.querySelector('#solution');
const solutionMenu = document.querySelector('.solutions-items');
const body = document.querySelector('body');
solution.addEventListener("click", solutionActionner);

function solutionActionner(){
    solutionMenu.classList.toggle("solutions-items-active")
    
}

const icon = document.querySelectorAll(".ionicon");
let currentTheme = "Light";

icon.forEach(el => {
    el.addEventListener("click", themeActionner);
});

function themeActionner(event){
    icon.forEach(el => {
        el.classList.remove("theme-active")
    });
    if(event.currentTarget.id == "light"){
        currentTheme = "dark";
        icon[1].classList.add('theme-active');
        body.setAttribute('theme','dark');
    }
    else {
        currentTheme = "light";
        icon[0].classList.add('theme-active');
        body.setAttribute('theme','light');
    }
}


