var menu = document.querySelector('#menu-bars');
var navbar = document.querySelector('.navbar');
const headerE1 = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{
        
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top => offset && top < offset + height ){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector("header .navbar a[href*='+id+']").classList.add("active");
            });
        };
    });
}

window.addEventListener('scroll', () => {
    headerE1.classList.toggle("sticky", window.scrollY >0)

    // if(window.scrollY >50){
    //     headerE1.classList.add("sticky");
    // }else if(window.scrollY <=50){
    //     headerE1.classList.remove("sticky");
    // }
});
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     document.getElementById("logo").style.fontSize = "15px";
//   } else {
//     document.getElementById("navbar").style.padding = "80px 10px";
//     document.getElementById("logo").style.fontSize = "25px";
//   }
// }

var swiper = new Swiper(".home-slider", {
    effect: 'fade',
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

// var swiper = new Swiper(".review-slider", {
//     spaceBetween: 20,
//     centeredSlides: true,
//     autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//     },
//     loop: true,
//     breakpoints: {
//         0: {
//             slidesPerView : 1,
//         },
//         640: {
//             slidesPerView : 2,
//         },
//         768: {
//             slidesPerView : 2,
//         },
//         1024: {
//             slidesPerView : 3,
//         },
//     },
// });