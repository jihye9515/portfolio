(function () {
    $.fn.progress = function () {
        var $wrap = $(this),
            $progress = $wrap.find('article'),
            num = [],
            per = 0,
            nowdeg = 0,
            rightdeg = 0,
            leftdeg = 0;
        $progress.each(function (i) {
            $({percent: 0}).animate({
                percent: 100
            }, {
                duration: 3000,
                progress: function () {
                    per = parseInt(this.percent);
                    $progress.eq(i).find('span').text(per);

                    nowdeg = 360 * per / 100; //252deg
                    rightdeg = Math.min(nowdeg, 180);
                    $progress.eq(i).find('.right li').css({
                        transform: 'rotate(' + rightdeg + 'deg)'
                    })

                    leftdeg = Math.max(nowdeg, 180);
                    $progress.eq(i).find('.left li').css({
                        transform: 'rotate(' + leftdeg + 'deg)'
                    })
                }
            });
        });
    }
})($);