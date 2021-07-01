$(function(){
    $('.tapMenu').tapmenu();
    $('.btTop').btTop();
    
    $('.hdrWrap nav').on('click', function(){
        $('.navWrap').toggle();
    })
    $('.navWrap').on('mouseleave', function(){
        $('.navWrap').hide();
    })
});