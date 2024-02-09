(function ($) {

    /*
        1. Data Background Function
        2. Scroll top button
        3. Offcanvus toggle
        4. Theme Slider Functions
        5. Pricing Range Slider
        6. Nice Select
        7. Checkout Toggle
        8. Header Sticky
        9. Mobile Menu
        10. Header Search 
        11. Preloader
        12. Fancybox
        13. Countdown
        14. Cart Drawer
        15. Wow Js
        16. Count Down
        17. Accordion Boxs
    */

// data background
    $('[data-background]').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });

//fancy box video popup 
    Fancybox.bind("[data-fancybox]", {
    });

// all page slider
    $(".testi_slider").slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay:true,
        speed:1000,
        customPaging: function (slider, i) {
            return '<span></span>';
        },
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".testimonials__slider").slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
    });

    $(".hm1_hero_slider").slick({
        dots:true,
        autoplay: true,
        slidesToShow: 1,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-arrow-left-long"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-arrow-right-long"></i></button>',
        speed: 1200,
        fade: true,
        customPaging: function (slider, i) {
            return '<span></span>';
        },
    });

    $(".gallary_slider").slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
        customPaging: function (slider, i) {
            return '<span></span>';
        },
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".cam_detail_slider").slick({
        slidesToShow: 2,
        arrows: false,
        dots: true,
        customPaging: function (slider, i) {
            return '<span></span>';
        },
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".contact__slider").slick({
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
    });

    $(".user__Slider").slick({
        slidesToShow: 2,
        arrows: false,
        slidesToScroll: 1,
    });

    $('.km__main__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.bottom__slider'
    });
    $('.bottom__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        asNavFor: '.km__main__slider',
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
    });



    //nice select
    $('.nice_select').niceSelect();


    // Preloader
    setTimeout(() => {
        $('.preloader').fadeOut()
    }, 1000);



    // Scroll back to top
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    });

    // sticky header

    // $(window).scroll(function () {

    //     if ($(window).scrollTop() > 200) {
    //         $('.header_bottom').addClass('fixed_menu');
    //     } else {
    //         $('.header_bottom').removeClass('fixed_menu');
    //     }
    // });


    // counter UP
    $(document).ready(function () {
        $('.count').counterUp({
            delay: 10,
            time: 5000
        });
    });

    // Button hover js
    $(function () {
        $('.default-btn')
            .on('mouseenter', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            })
            .on('mouseout', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            });
    });


})(jQuery);












