$(document).ready(function () {

	var lights = 'on';



// $('#lightswitch').click(function(){
// 	if(lights == 'on'){
// 		$('#lightswitch').css('background-color','black');
// 		$('#lightswitch').css('color','white');

// 	} else {
// 		$('#lightswitch').css('background-color','white');
// 		$('#lightswitch').css('color','black');
// 		$('body').css('background-color','black');
// 	}
// })



// $('#lightswitch').click(function(){
// 	if($('#lightswitch').attr('class') == "switch-on"){
// 		$('#lightswitch').attr('class','switch-off');
// 		$('body').css('background-color','black');
// 	} else {
// 		$('#lightswitch').attr('class','switch-on');
// 		$('body').css('background-color','white');
// 	}
// })


//using toggleClass
$('#lightswitch').click( function(){
	$('#lightswitch').toggleClass('switch-on switch-off');

	if ($('#lightswitch').attr('class') == 'switch-on'){
		$('body').removeClass('.lights-off');
		$('#lightswitch').html('ON');
	} else {
		$('body').addClass('lights-off');
		$('#lightswitch').html('OFF');
	}
})

})
// When the lights are on:

// give the #lightswitch element a background-color of black and a text color of white
// give the body a background color of white

// When the lights are off:

// give the #lightswitch element a background-color of white and a text color of black
// give the body a background color of black;

