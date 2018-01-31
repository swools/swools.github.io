$(document).ready(function(){
    $(".article").hover(function(){
        $(this).toggleClass("hover");
        console.log("hovered");
    })

})