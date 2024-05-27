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

    $('.burger').click(function () {
        $('.adaptmenu').toggleClass('show');
    })

    // accordeon
    $('.accordeon__header').click(function () {
        $('.accordeon__header').not($(this)).removeClass('active');
        $(this).toggleClass('active');

        $('.accordeon__body').not($(this).next('.accordeon__body')).slideUp();
        $(this).next('.accordeon__body').slideToggle();
    });

    // career slider
    var swiper = new Swiper(".careerslider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        speed: 800,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    // tabs
    $('.wrapper1 .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.wrapper1').find('.tab-item').removeClass('active-tab').hide();
        $('.wrapper1 .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.wrapper2 .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.wrapper2').find('.tab-item').removeClass('active-tab').hide();
        $('.wrapper2 .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    // test
    if ($(window).width() < 576) {
        const tabs = document.querySelectorAll('.wrapper1 .tab');
        const tabItems = document.querySelectorAll('.wrapper1 .tab-item');

        tabs.forEach(tab => {
            tab.addEventListener('click', function () {
                const id = this.dataset.id;

                tabs.forEach(t => t.classList.remove('active'));
                tabItems.forEach(item => item.classList.remove('active-tab'));

                this.classList.add('active');
                document.getElementById(id).classList.add('active-tab');

                document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
            });
        });


        const tabs2 = document.querySelectorAll('.wrapper2 .tab');
        const tabItems2 = document.querySelectorAll('.wrapper2 .tab-item');

        tabs2.forEach(tab => {
            tab.addEventListener('click', function () {
                const id = this.dataset.id;

                tabs2.forEach(t => t.classList.remove('active'));
                tabItems2.forEach(item => item.classList.remove('active-tab'));

                this.classList.add('active');
                document.getElementById(id).classList.add('active-tab');

                document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
            });
        });
    }


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
