$(document).ready(() => {

    $('.js--features-link').click(() => {
        $('html, body').animate({
            scrollTop: 
                $('.js--features-section')
                    .offset()
                    .top
        }, 1000);
    });

    $('.js--we-link').click(() => {
        $('html, body').animate({
            scrollTop: 
                $('.js--we-section')
                    .offset()
                    .top
        }, 1000);
    });

    $('.js--footer-link').click(() => {
        $('html, body').animate({
            scrollTop: 
                $('.js--footer')
                    .offset()
                    .top
        }, 1000);
    });

});