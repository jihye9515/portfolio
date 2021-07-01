$(function(){
    console.log('ddd');
    $('.other .btPriv').click(function(){
        $('.other .artGroup article:last').prependTo('.artGroup');
    });
    $('.other .btNext').click(function(){
        $('.other .artGroup article:first').appendTo('.artGroup');
    });
    
});