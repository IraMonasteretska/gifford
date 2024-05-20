$(document).ready(function () {
    // Mainslider
    var swiper = new Swiper(".mainslider", {
        speed: 1500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    // header
    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('change-bg');
        } else {
            $('.header').removeClass('change-bg');
        }
    });


    const player = new Plyr('#player');

    // slider 2
    var swiper = new Swiper(".learnslider", {
        slidesPerView: 1.6,
        spaceBetween: 90,
        loop: true,
        centeredSlides: true,
        speed: 800,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // graduates slider
    var swiper = new Swiper(".graduates-slider", {
        slidesPerView: 1.2,
        spaceBetween: 60,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });




})





















// switch
document.addEventListener('DOMContentLoaded', function () {
    const domestic = document.querySelector('.domestic');
    const international = document.querySelector('.international');
    const checkbox = document.getElementById('switch');

    domestic.addEventListener('click', function () {
        domestic.classList.add('active');
        international.classList.remove('active');
        checkbox.checked = false;
    });

    international.addEventListener('click', function () {
        international.classList.add('active');
        domestic.classList.remove('active');
        checkbox.checked = true;
    });

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            international.classList.add('active');
            domestic.classList.remove('active');
        } else {
            domestic.classList.add('active');
            international.classList.remove('active');
        }
    });
});
