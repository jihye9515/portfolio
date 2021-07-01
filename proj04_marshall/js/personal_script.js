$(function () {
    $(window).on('scroll', function () {
        var winoffset = window.pageYOffset,
            overView = $('.overView').offset().top,
            partic = $('.partic').offset().top;
        console.log(winoffset, partic, overView);
        if (winoffset > overView && winoffset < partic) {
            console.log('ddd');
            $('.partic').progress();
        }
    });


});