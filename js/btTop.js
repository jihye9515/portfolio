(function ($) {
    $.fn.btTop = function(){
        var $btTop = $('.btTop');

    $btTop.on('click', function () { 
            $('html').animate({scrollTop:0});
});
    }
    
})($)
