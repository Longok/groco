// let searchForm = document.querySelector('.search-form');
// document.querySelector('#search-btn').onclick = () => {
//     searchForm.classList.toggle('active');            
// }

const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');

    searchBtn.addEventListener('click', function(){
        searchForm.classList.toggle('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
    });

const shoppingCart = document.querySelector('.shopping-cart');
const cartBtn = document.querySelector('#cart-btn');
    
    cartBtn.addEventListener('click', function(){
        shoppingCart.classList.toggle('active');
        searchForm.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
    });

const loginForm = document.querySelector('.login-form');
const loginBtn = document.querySelector('#login-btn');  

    loginBtn.addEventListener('click', function(){
        loginForm.classList.toggle('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        navbar.classList.remove('active');
    });

const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');  

    menuBtn.addEventListener('click', function(){
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
    });



// slider products
var swiper = new Swiper(".products-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });  

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });  