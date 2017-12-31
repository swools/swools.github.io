$('#submit').click(function(){
    var a = parseInt($("#a").val());
    var b = parseInt($("#b").val());

    if(a == b){
        $("#comparison").html('==');
    } else if (a > b) {
        $("#comparison").html('>');
    } else {
        $("#comparison").html('<');
    }
})