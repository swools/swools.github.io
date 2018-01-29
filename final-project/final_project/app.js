$(document).ready(function(){
    $('.topic').hover(function(){
        $(this).toggleClass('hover-shadow');
    })
        
    $(window).resize(function(){
        if ($(window).width() > '1000') {
            $('.mobile-nav').hide();
        }
    })

    $('#hamburger').click(function(){
        $('.mobile-nav').slideToggle();
    })

    $('.nav-link').hover(function(){
        $(this).toggleClass('hover-nav');
    })



})