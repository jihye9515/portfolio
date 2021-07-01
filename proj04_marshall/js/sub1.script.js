$(function () {
    //hdrWarp
    var $hdr = $('.hdrWrap'),
        $bars = $hdr.find('.xi-bars'),
        $navWrap = $('.navWrap');

    $bars.on('click', showUl);
    $navWrap.mouseleave(hideUl);

    function showUl() {
        $navWrap.slideToggle();
    }

    function hideUl() {
        $navWrap.slideUp();
    }
});
