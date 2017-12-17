// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()


$(document).ready (function(){

    

    //add 10 to middle box
    $('#a10').click(function(){
        var out = $('#out').html();
        
        $('#out').html(parseInt(out) + 10);
    })

    //add 20 to middle box
    $('#a20').click(function(){
        var out = $('#out').html();
        
        $('#out').html(parseInt(out) + 20);
    })

    //add 30 to middle box
    $('#a30').click(function(){
        var out = $('#out').html();
        
        $('#out').html(parseInt(out) + 30);
    })

    //subtract 10 to middle box
    $('#n10').click(function(){
        var out = $('#out').html();
        
        $('#out').html(parseInt(out) - 10);
    })

    //subtract 20 to middle box
    $('#n20').click(function(){
        var out = $('#out').html();
        
        $('#out').html(parseInt(out) - 20);
    })

    //subtract 30 to middle box
    $('#n30').click(function(){
        var out = $('#out').html();
        
        $('#out').html(parseInt(out) - 30);
    })

    //change background color of middle box to red
    $('#red').click(function(){
        $('#out').css('background-color', 'red');
    })

    //change background color of middle box to blue
    $('#blue').click(function(){
        $('#out').css('background-color', 'blue');
    })

    //clear middle box to 0 and set background to white
    $('#out').click(function(){
        $('#out').css('background-color', 'white');
        $('#out').html('0');
    })
})






