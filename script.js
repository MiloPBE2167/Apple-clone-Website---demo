var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let menu = document.querySelector(".ri-menu-fill");
let close = document.querySelector(".ri-close-fill");
let respoNav = document.querySelector(".respo-nav");

menu.addEventListener('click', () => {
  respoNav.style.top = "0%";
})
close.addEventListener('click', () => {
  respoNav.style.top = "-100%";
})

// var store = document.querySelector("#store");
// var subMeny = document.querySelector(".submenu");

const thongtin = document.querySelectorAll('.main .thongtin .thongtinbottom');
const thongtintop = document.querySelectorAll('.main .top .thongtintop');

let activeScreen;
thongtintop.forEach(element =>{
    element.addEventListener('mouseover', ()=>{
        thongtin.forEach((element) => {
            element.style.display = 'none';
        })
        if(element == thongtintop[0]){
            thongtin[0].style.display ='grid';
            activeScreen = thongtin[0];
        }
        else if (element == thongtintop[1]) {
            thongtin[1].style.display ='grid';
            activeScreen = thongtin[1];
        }
        return activeScreen;
    })
})


thongtin.forEach(element =>{
  element.addEventListener('mouseover', ()=>{
      if(element == thongtin[0]){
          thongtin[0].style.display ='grid';
          activeScreen = element;
      }
      else if (element == thongtin[1]) {
          thongtin[1].style.display ='grid';
          activeScreen = element;
      }
  })
})

thongtin.forEach(element =>{
  element.addEventListener('mouseout', ()=>{
      if(element == thongtin[0]){
          thongtin[0].style.display ='none';
      }
      else if (element == thongtin[1]) {
          thongtin[1].style.display ='none';
      }
  })
})