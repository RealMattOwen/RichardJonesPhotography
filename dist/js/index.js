'use strict';

$(document).ready(function () {
    $(window).on('resize', function () {
        if (window.innerWidth >= 992) {
            $('#header').css('height', '40px');
            $('nav > ul').css('display', 'flex');
        } else {
            $('#header').css('height', '70px');
            $('nav > ul').css('display', 'none');
        }
    });

    $('#mobile-nav').click(function () {

        var navLinks = $('nav > ul');

        if (window.innerWidth < 768) {
            if (navLinks.css('display') !== 'block') {
                $('#header').animate({ height: 124 }, 400);
                navLinks.slideDown();
                navLinks.css('display', 'block');
            } else {
                $('#header').animate({ height: 70 }, 400);
                navLinks.slideUp();
            }
        } else if (window.innerWidth >= 768) {
            if (navLinks.css('display') !== 'flex') {
                $('#header').animate({ height: 110 }, 400);
                navLinks.slideDown();
                navLinks.css('display', 'flex');
            } else {
                $('#header').animate({ height: 70 }, 400);
                navLinks.slideUp();
            }
        }
    });

    $(".gap").hover(function () {
        $("#services").css('color', '#3A3B3F');
    }, function () {
        $("#services").css('color', '');
    });
});
//# sourceMappingURL=index.js.map