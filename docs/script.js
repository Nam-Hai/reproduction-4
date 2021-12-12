const solution = document.querySelector('#solution');
const solutionMenu = document.querySelector('.solutions-items');

solution.addEventListener("click", solutionActionner);

function solutionActionner(){
    solutionMenu.classList.toggle("solutions-items-active")
}