$(document).ready(function () {
    $('#myForm').submit(function(event){
        event.preventDefault();
        console.log('submitted', $('#name-input').val());
    })
})
