// DOM
const navBar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');
const bar = document.querySelector('.menu-btn');
const i = document.querySelector('.menu-btn i');

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
    i.classList.toggle('fa-times');
});

// jquery
$(document).ready(function(){
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayHoverPause:true,
        autoplayTimeOut:2000,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })
})