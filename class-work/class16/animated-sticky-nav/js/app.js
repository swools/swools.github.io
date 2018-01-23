$(document).ready(function () {
    $(window).scroll(function(){
        
        if ($(window).scrollTop() >  75) {
            $('header').addClass('small-nav');
        } else {
            $('header').removeClass('small-nav');
        }
    })
})
