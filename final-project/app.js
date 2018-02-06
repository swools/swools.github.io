$(".mobile-nav").hide();

$(document).ready(function(){
    $(".article").hover(function(){
        $(this).toggleClass("hover");
    })

    
// memory game

$(function(){
    $("#memory-game").memoryGame();
});

//Hamburger menu









  
    

$(window).resize(function(){
    var pageWidth = $(window).width();
    if (pageWidth > '900') {
        $('.fa-bars').hide();
        $('.mobile-nav').hide();
        $('.site-nav').show();
    } else if (pageWidth < '900') {
        $('.site-nav').hide();
        $('.fa-bars').show();
    }
});

$('.fa-bars').click(function(){
    $('.mobile-nav').slideToggle(300, "swing");
});
    
    
})