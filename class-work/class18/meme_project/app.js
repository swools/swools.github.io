$('.meme-form').submit(function(event){
    event.preventDefault();
    
    $('.video-wrapper').empty();

    var input = $('.meme-input').val();

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + input + "+aussie&api_key=rlqN4zkfavxC2igtYUSMzbPltTHWYzPk&limit=5");

    // $('.meme-input').val("");


    
    xhr.done(function(data) { 
        var memes = data.data;
        
        memes.forEach(function(meme){
            var memeUrl = meme.images.looping.mp4;

            $('.video-wrapper').append('<video src="' + memeUrl + '"autoplay></video>');
        });
    
    });
});



