//myFader.js
(function ($) {
    $.fn.myFader = function () {
        var $main = $(this),
            $imgGroup = $main.find('.imgGroup'),
            $image = $imgGroup.children('.image'),
            $pGroup = $main.find('.pGroup'),
            $p = $main.find('.texts').find('p'),
            $li = $main.find('.pageNav ul li');

        $imgGroup.children('.image').eq(0).appendTo($imgGroup);
        $pGroup.css({top: '-100%'});
        $p.eq(3).prependTo($pGroup);


        $li.on('click', function () {
            $imgGroup.children('.image').eq(3).stop().fadeOut(700, function () {
                $imgGroup.children('.image').eq(0).appendTo($imgGroup)
                $imgGroup.children('.image').eq(0).stop().show(0);
            });
            $pGroup.stop().animate({
                top: '-200%'
            }, 700, function () {
                $pGroup.css({
                    top: '-100%'
                });
                $('p:first').appendTo($pGroup);
            });
            $('li').removeClass('viewed');
            $(this).addClass('viewed');
        });
        
        

        return this;
    }
})($)