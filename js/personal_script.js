$(function(){
    $('.tapMenu').tapmenu();
    // $('.partic').progress();
    $('.btTop').btTop();

    //content.design
    var offsetTop = [],
        endlight = [],
        $lightText = $('.design .textGroup').eq(0).find('h4'),
        $lightText_yello = $('.design .textGroup').eq(1).find('h4'),
        $lightText_pink = $('.design .textGroup').eq(2).find('h4'),
        $lightText_y2 = $('.design .textGroup').eq(3).find('h4'),
        $checkedP = $('.design .check .wrapper').find('p').eq(0),
        $checkedP2 = $('.design .check .wrapper').find('p').eq(1);
       

    offsetTop = $('.design').offset().top - 500;
    endlight = $('.keyword').offset().top -500;
    

    var check = $('input').prop("checked");
    $('input').on('click', function(params) {
        check = $('input').prop("checked");
        if(check == true){
            offlight();
        }else if(check == false){
            onlight();
        }
    });
   
    
   
    
 
$(window).on('scroll', function(){
    var winoffset = window.pageYOffset;
    if(winoffset>offsetTop){
        onlight();
    }
    if(winoffset<offsetTop){
        offlight();
    }
    if(winoffset>endlight){
        offlight();
    }
    

});
function onlight(params) {
    $lightText.addClass('flicker_blue');
    $lightText_y2.addClass('flicker_yello');
    $lightText_yello.addClass('flicker_yello');
    $lightText_pink.addClass('flicker_pink');
    $checkedP2.removeClass('checked');
    $checkedP.addClass('checked');
}
function offlight(params) {
    $lightText.removeClass('flicker_blue');
    $lightText_y2.removeClass('flicker_yello');
    $lightText_yello.removeClass('flicker_yello');
    $lightText_pink.removeClass('flicker_pink');
    $checkedP.removeClass('checked');
    $checkedP2.addClass('checked');

}



$(window).on('scroll', function(){
    var winoffset = window.pageYOffset,
        overView = $('.overView').offset().top,
        partic = $('.partic').offset().top;
    console.log(winoffset, partic, overView);    
    if(winoffset>overView && winoffset<partic){
        console.log('ddd');
        $('.partic').progress();
    }  
});
$('.hdrWrap nav').on('click', function(){
    $('.navWrap').toggle();
})
$('.navWrap').on('mouseleave', function(){
    $('.navWrap').hide();
})

});