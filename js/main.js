  jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 30,
            time: 1000
        });
    })
    $(document).ready(function() {
            $(window).bind('scroll', function() {
                var navHeight = $("#box1").height();
                ($(window).scrollTop() > navHeight) ? $('nav').addClass('goToTop'): $('nav').removeClass('goToTop');
            });
        });
AOS.init();