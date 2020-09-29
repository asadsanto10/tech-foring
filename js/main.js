$(document).ready(function () {
    // Header scroll class
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('scroll');
        } else {
            $('#header').removeClass('scroll');
        }
    });
    
    /*=============silk slider=====================*/

    // testimonila slider
    $('#testimonila-slider #slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        //dots: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='./image/Desktop/icon/left-arrow.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='./image/Desktop/icon/right-arrow.png'>",
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }
        ]
    });

    // video-testimonila slider
    $('#video-testimonila #video-testimonila-slider').slick({
        infinite: true,
        autoplay: false,
        // autoplaySpeed: 3000,
        //dots: true,
        prevArrow: false,
        nextArrow: false,
        speed: 300,
        slidesToShow: 1,
        rows: 4,
        slidesToScroll: 1,
        nextArrow: "<img class='a-right control-c next slick-next' src='./image/Desktop/icon/next (1).png'>",
        responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                rows: 2,
                infinite: true,
            }
        }
        ]
    });
    // feedback slider
    $('#feedback #single-feedback').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: false,
        nextArrow: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    //client - slider
    $('#single-client-slider').slick({
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 3000,
        // dots: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='./image/Desktop/icon/prev.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='./image/Desktop/icon/next.png'>",
        responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }
        ]
    });
    /*=============silk slider=====================*/
})