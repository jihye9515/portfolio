$(function(){
    $('.review article').mouseover(function(){
        $(this).find('.on').css('color', 'red');
    });
    $('.review article').mouseleave(function(){
        $('.review .rating .on').css('color', '#ccc');
    });
});