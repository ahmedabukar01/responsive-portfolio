// DOM
const navBar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');
const bar = document.querySelector('.menu-btn i');

// Affects
window.addEventListener('scroll', e=>{
    if(window.scrollY > 40){
        navBar.classList.add('nav-affect')
    }
    else{
        navBar.classList.remove('nav-affect')
    }
});
bar.addEventListener('click',e=>{
    menu.classList.toggle('active');
    console.log('CLICKED')
})