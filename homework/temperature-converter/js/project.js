// $('#f-button').click(function() {
// 	var farInput = parseFloat($('#f-input').val());
// 	var celOutput = (farInput - 32) * 5 / 9;

// 	if(celOutput >= 26.66){
// 		$("body").css("background-color", "red");
// 	} else if(celOutput <= 0 ){
// 		$("body").css("background-color", "blue");
// 	} else {
// 		$("body").css("background-color", "white");
// 	}
	
	
// 	// Clear input elements
// 	$('#f-input').val('')
// 	$('#c-input').val('')

// 	$('#answer').html(farInput + '&deg; fahrenheit is ' + celOutput + '&deg; celcius.');
// });

// $('#c-button').click(function() {
// 	var celInput = parseFloat($('#c-input').val());
// 	var farOutput = celInput * 9 / 5 +32;
	
// 	if(farOutput >= 80){
// 		$("body").css("background-color", "red");
// 	} else if(farOutput <= 32){
// 		$("body").css("background-color", "blue");
// 	} else {
// 		$("body").css("background-color", "white");
// 	}


// 	// Clear input elements
// 	$('#f-input').val('')
// 	$('#c-input').val('')
	
// 	$('#answer').html(celInput + '&deg; celcius is ' + farOutput + '&deg; fahrenheit.');
// });

$("#convert-button").click(function(){
	var farInput = parseFloat($('#f-input').val());
	var celOutput = (farInput - 32) * 5/9;
	var celInput = parseFloat($("#c-input").val());
	var farOutput = celInput * 9 / 5 + 32;
	


	if(!isNaN(farInput)){
		$('#answer').html(farInput + '&deg; fahrenheit is ' + celOutput + '&deg; celsius.');
	} else if(!isNaN(celInput)){
		$('answer').html(celInput + '&deg; celsius is ' + farOutput + '&deg; fahrenheit');
	}

	if(farOutput >= 80 || celOutput >= 26.6666){
		$('body').css('background-color', 'red');
	} else if (farOutput <= 32 || celOutput <= 0){
		$('body').css('background-color', 'blue');
	} else {
		$('body').css('background-color', 'white');
	}
	// Clear input elements
	$('#f-input').val('')
	$('#c-input').val('')
		
});



/*

Please use your own starter code if you already have created a temperature coverter! Otherwise I've provided this folder as a starting point for the modifications.


Modifications to make:

1. Add a condition inside click functions so that some style(s) on the page change depending on the the outputted temperature (example: if the outputted temp is above 80f make background red).

2. (BONUS) Refactor temperature convertor so there is one convert button, and it automatically converts from F > C if user enters a fahrenheit tempurature, and from C > F. 

Hint: use something like !isNaN(farInput) as a condition to check that the inputed value is a number. "!" means "is not" so the condition here: 

	if (!isNaN(farInput) {
	
	}

is saying "do something if farInput isn't NaN (Not a Number)" ...or in other words "if it is a number"

3. (BONUS) use jQuery .show() and .hide() to have some elements appear on the page depending on the tempurature

*/ 



