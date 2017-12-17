// Store your current age into a variable

// Store a maximum age into a variable

// Store a favorite drink (from a drop-down) into a variable

// Store an amount per day into a variable

// Calculate how much you would drink for the rest of your life!

// Output your results to the user

$('#click-me').click(function(){
    var age = $('#age').val();
    
    var maxAge = $('#max-age').val();
    
    var drink = $('#item').val();
    
    var amount = $('#num-per-day').val();
    

    
    var solution = (((maxAge-age)*365)* amount);
    $('#solution').html(solution);
    $('#drink').html(drink);
    console.log(solution);

})

