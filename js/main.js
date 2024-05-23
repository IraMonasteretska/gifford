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
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            576: {
                slidesPerView: 1.2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 1.2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 1.3,
                spaceBetween: 50,
            },
            1199: {
                slidesPerView: 1.6,
                spaceBetween: 90,
            },
        },
    });

    // graduates slider
    var swiper = new Swiper(".graduates-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        // loop: true,
        speed: 800,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            576: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 1.1,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 1.2,
                spaceBetween: 60,
            },
        },
    });

    // menu btn
    (function () {
        var burger2;
        burger2 = document.querySelector(".burger2");
        burger2.addEventListener("click", function () {
            return burger2.classList.toggle("on");
        });

    }).call(this);

    $('.burger').click(function(){
        $('.adaptmenu').toggleClass('show');
    })

    // accordeon
    $('.accordeon__header').click(function(){
        $('.accordeon__header').not($(this)).removeClass('active');
        $(this).toggleClass('active');

        $('.accordeon__body').not($(this).next('.accordeon__body')).slideUp();
        $(this).next('.accordeon__body').slideToggle();
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
