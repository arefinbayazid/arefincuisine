AOS.init({
    offset: 200,
    delay: 100, 
    duration : 400, 
    casing : 'case',
    once : false ,
    mirror : false,
    anchorPlacement : 'top-bottom'
});

const navbar = document.querySelector('.navbar');
const toggle = document.querySelector('.burger');
const home = document.querySelector('.hompage');
toggle.addEventListener('click', ()=>{
    navbar.classList.toggle('nav_toggle');
    home.classList.toggle('marginSet');
})