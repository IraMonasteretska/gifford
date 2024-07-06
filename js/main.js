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
        speed: 800,

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
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    // tabs
    // $('.wrapper1 .tab').on('click', function (event) {
    //     var id = $(this).attr('data-id');
    //     $('.wrapper1').find('.tab-item').removeClass('active-tab').hide();
    //     $('.wrapper1 .tabs').find('.tab').removeClass('active');
    //     $(this).addClass('active');
    //     $('#' + id).addClass('active-tab').fadeIn();
    //     return false;
    // });

    // $('.wrapper2 .tab').on('click', function (event) {
    //     var id = $(this).attr('data-id');
    //     $('.wrapper2').find('.tab-item').removeClass('active-tab').hide();
    //     $('.wrapper2 .tabs').find('.tab').removeClass('active');
    //     $(this).addClass('active');
    //     $('#' + id).addClass('active-tab').fadeIn();
    //     return false;
    // });

    // test
    // if ($(window).width() < 576) {
    //     const tabs = document.querySelectorAll('.wrapper1 .tab');
    //     const tabItems = document.querySelectorAll('.wrapper1 .tab-item');

    //     tabs.forEach(tab => {
    //         tab.addEventListener('click', function () {
    //             const id = this.dataset.id;

    //             tabs.forEach(t => t.classList.remove('active'));
    //             tabItems.forEach(item => item.classList.remove('active-tab'));

    //             this.classList.add('active');
    //             document.getElementById(id).classList.add('active-tab');

    //             document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    //         });
    //     });


    //     const tabs2 = document.querySelectorAll('.wrapper2 .tab');
    //     const tabItems2 = document.querySelectorAll('.wrapper2 .tab-item');

    //     tabs2.forEach(tab => {
    //         tab.addEventListener('click', function () {
    //             const id = this.dataset.id;

    //             tabs2.forEach(t => t.classList.remove('active'));
    //             tabItems2.forEach(item => item.classList.remove('active-tab'));

    //             this.classList.add('active');
    //             document.getElementById(id).classList.add('active-tab');

    //             document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    //         });
    //     });
    // }

    // select2
    if ($('select').length) {
        $('.styledselect').select2({
            placeholder: "Please select",
            minimumResultsForSearch: Infinity,
        });
    }


    // steps

    // $('.nextbtn').click(function(){
    //     var currentSection = $(this).closest('.stepsection');
    //     var nextSection = currentSection.next('.stepsection');
    //     if (nextSection.length) {
    //         $('.stepsection').addClass('hide'); 
    //         nextSection.removeClass('hide'); 
    //     }
    // });

    // $('.backbtn').click(function(){
    //     var currentSection = $(this).closest('.stepsection');
    //     var prevSection = currentSection.prev('.stepsection');
    //     if (prevSection.length) {
    //         $('.stepsection').addClass('hide'); // ховаємо всі секції
    //         prevSection.removeClass('hide'); // показуємо попередню секцію
    //     }
    // });


    function updateStepsHeader(index) {
        const steps = $('.steps__header ul li');
        steps.each(function (i) {
            $(this).removeClass('active check');
            if (i < index) {
                $(this).addClass('check');
            } else if (i === index) {
                $(this).addClass('active');
            }
        });
    }

    $('.nextbtn').click(function () {

        var currentSection = $(this).closest('.stepsection');
        var nextSection = currentSection.next('.stepsection');
        if (nextSection.length) {
            $('.stepsection').addClass('hide'); 
            nextSection.removeClass('hide'); 
            updateStepsHeader(nextSection.index('.stepsection')); 
        }
    });

    $('.backbtn').click(function () {
        var currentSection = $(this).closest('.stepsection');
        var prevSection = currentSection.prev('.stepsection');
        if (prevSection.length) {
            $('.stepsection').addClass('hide'); 
            prevSection.removeClass('hide'); 
            updateStepsHeader(prevSection.index('.stepsection')); 
        }
    });

    // Initial call to set the correct step on load
    updateStepsHeader($('.stepsection:not(.hide)').index('.stepsection'));






    // form scripts
    function updateHiddenBlock() {
        $('.stepblock').each(function () {
            var radioYes = $(this).find('.radiochoice .yes').is(':checked');
            var hiddenBlock = $(this).find('.hiddenblock');
            var choiseYes = $(this).find('.choise-yes');
            var choiseNo = $(this).find('.choise-no');
            if (radioYes) {
                hiddenBlock.addClass('active');
                choiseYes.show();
                choiseNo.hide();
            } else {
                hiddenBlock.removeClass('active');
                choiseYes.hide();
                choiseNo.show();
            }
        });
    }

    // Initial check on page load
    updateHiddenBlock();

    // Check when any radio button changes
    $('.radiochoice input[type="radio"]').change(function () {
        updateHiddenBlock();
    });


    //  form upload file scripts

    $('.upload-row').each(function() {
        var $uploadRow = $(this);
        var $inputFile = $uploadRow.find('input[type="file"]');
        var $fileInfo = $uploadRow.find('.fileinfo');
        var $removeBtn = $uploadRow.find('.removebtn');

        $inputFile.change(function() {
            var fileName = this.files.length > 0 ? this.files[0].name : "No File Chosen";
            $fileInfo.text(fileName);
        });

        $removeBtn.click(function() {
            $inputFile.val('');
            $fileInfo.text("No File Chosen");
        });
    });

    // form checkbox textarea 
    $('.checkfield.with-textarea').each(function() {
        var $checkField = $(this);
        var $checkBox = $checkField.find('input[type="checkbox"]');
        var $textArea = $checkField.find('textarea');

        $checkBox.change(function() {
            if ($(this).is(':checked')) {
                $textArea.prop('disabled', false);
                $textArea.addClass('active');
            } else {
                $textArea.removeClass('active').val('');
            }
        });
    });

    // checkbox with hidden fields

    $('.check-hidden-field').click(function(){
        if ($(this).is(':checked')) {
            $('.hidden-field').show();
        } else {
            $('.hidden-field').hide();
        }
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
