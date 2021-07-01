(function($){
$.fn.navWrap = function(){
    var $btMenu = $('.hdrWrap').find('.menu'),
        $navWrap = $('.navWrap');

    $btMenu.on('click', function(){
        $navWrap.toggle();
    });
    $navWrap.on('mouseleave', function(){
        $navWrap.hide();
    });
}
})($)