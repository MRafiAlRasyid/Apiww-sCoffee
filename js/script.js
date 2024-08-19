// Toggle class active navbar
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hm = document.querySelector("#hamburger-menu");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Toggle class active shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
}

// // Carousel
// let nextDom = document.getElementById('next');
// let prevDom = document.getElementById('prev');
// let carouselDom = document.querySelector('.carousel');
// let listItemDom = document.querySelector('.carousel .list');
// let thumbnailDom = document.querySelector('.carousel .thumbnail');

// nextDom.onclick = function() {
//   showSlider('next');
// }

// prevDom.onclick = function() {
//   showSlider('prev');
// }

// let timeRunning = 3000;
// let timeAutoNext = 7000;
// let runTimeOut;
// let runAutoRun = setTimeout(() => {
//   nextDom.click();
// }, timeAutoNext); 

// function showSlider(type) {
//   let itemSlider = document.querySelector('.carousel .list .item');
//   let itemThumbnail = document.querySelector('.carousel .thumbnail .item');

//   if(type === 'next') {
//     listItemDom.appendChild(itemSlider[0]);
//     thumbnailDom.appendChild(itemThumbnail[0]);
//     carouselDom.classList.add('next');
//   } else {
//     let positionLastItem = itemSlider.length - 1;
//     listItemDom.prepend(itemSlider[positionLastItem]);
//     thumbnailDom.prepend(itemThumbnail[positionLastItem]);
//     carouselDom.classList.add('prev');
//   }

//   clearTimeout(runTimeOut);
//   runTimeOut = setTimeout(() => {
//     carouselDom.classList.remove('next');
//     carouselDom.classList.remove('prev');
//   }, timeRunning)

//   clearTimeout(runAutoRun);
//   runAutoRun = setTimeout(() => {
//     nextDom.click();
//   }, timeAutoNext)
// }

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelectorAll('.carousel .list .item');
let thumbnailDom = document.querySelectorAll('.carousel .thumbnail .item');

nextDom.onclick = function() {
    showSlider('next');
}

prevDom.onclick = function() {
    showSlider('prev');
}

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
// let runAutoRun = setTimeout(() => {
//     nextDom.click();
// }, timeAutoNext); 

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next') {
        itemSlider[0].parentNode.appendChild(itemSlider[0]);
        itemThumbnail[0].parentNode.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        itemSlider[positionLastItem].parentNode.insertBefore(itemSlider[positionLastItem], itemSlider[0]);
        itemThumbnail[positionLastItem].parentNode.insertBefore(itemThumbnail[positionLastItem], itemThumbnail[0]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext)
}