// DOM
const navBar = document.querySelector('.navbar');

// Affects
window.addEventListener('scroll', e=>{
    if(window.scrollY > 40){
        navBar.classList.add('nav-affect')
    }
    else{
        navBar.classList.remove('nav-affect')
    }
})