const swiper = new Swiper('.sample-slider', {
    loop: true,                         //loop
    slidesPerView: 2,                   //number of slides to show
    centeredSlides : true,              //put acctive slide center
    spaceBetween: 20,                   //space between slides
    autoplay: {                         //autoplay
        delay: 4000,  
    },   
    pagination: {                       //pagination（dots）
        el: '.swiper-pagination',
        clickable:true,
    },
    navigation: {                       //navigation（arrows）
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})