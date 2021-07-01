//index.slider.js
$(function(){
    var $mn = $('.main'),
        $imgGroup = $mn.find('.imgGroup'),
        $image = $mn.find('.image'),
        flag = true,
        $pageNav = $mn.find('li'),
        i=0;

    var moveMain = gsap.to($imgGroup, {
        marginLeft: '-100%',
        //paused: true,
        duration : 2,
        easing : 'linear',
        onComplete : function () {
            //$image = $mn.find('.image')
            $imgGroup.css({marginLeft: '0%'});
            $imgGroup.children(':first').appendTo($imgGroup);
            moveMain.play()
        }
    });
    
    moveMain.repeat(-1)
    // moveMain();
    // $pageNav.on('mouseenter',function (params) {
    //     flag= false;
    // });
    // $pageNav.on('mouseleave',function (params) {
    //     flag= true;
    //     if (flag) {
    //         $image = $mn.find('.image');
    //         $imgGroup.delay(1000).animate({
    //             marginLeft: '-100%'
    //         }, {
    //             duration: 2000,
    //             complete: function () {
    //                 $imgGroup.css({
    //                     marginLeft: '0%'
    //                 });
    //                 $image.first().appendTo($imgGroup);
    //                 moveMain();
    //             }
    //         });
    //     }
    // });

    // function moveMain() {
    //     if (flag) {
    //         $image = $mn.find('.image');
    //         $imgGroup.delay(1000).animate({
    //             marginLeft: '-100%'
    //         }, {
    //             duration: 2000,
    //             complete: function () {
    //                 $imgGroup.css({
    //                     marginLeft: '0%'
    //                 });
    //                 $image.first().appendTo($imgGroup);
    //                 moveMain();
    //             }
    //         });
    //     }
    // }
})
