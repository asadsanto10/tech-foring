$(document).ready(function () {
    // Header scroll class
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('scroll');
        } else {
            $('#header').removeClass('scroll');
        }
    });
})