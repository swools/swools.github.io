
$(document).ready(function(){
    

    $.ajax({
        url: 'https://api.performline.com/callcenter/calls/?date_from=-7days&limit=250&offset=500',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Token 8a26bba7614feb3987ddfec7c6d31755ae5d7c47")
        }, success: function(data){
            alert(data);
        }
    })
})