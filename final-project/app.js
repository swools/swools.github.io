$(document).ready(function(){
    $(".article").hover(function(){
        $(this).toggleClass("hover");
        console.log("hovered");
    })

    
// memory game

$(function(){
    $("#memory-game").memoryGame();
});

//Hamburger menu

$(".mobile-nav").hide();







  
    

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
    $('.mobile-nav').slideToggle();
});
    
    
})