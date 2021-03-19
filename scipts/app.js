// DOM
const navBar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');
const scrollUp = document.querySelector('.scroll-up');
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

    if(window.scrollY > 500){
        scrollUp.classList.add('show');
    }else{
        scrollUp.classList.remove('show');
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
    $('.scroll-up').click(function(){
        $('html').animate({scrollTop:0});
    })
})