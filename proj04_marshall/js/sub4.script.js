$(function (params) {
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
    

    //content recode
    var $recode = $('.recode'),
        $mnImgGroup = $recode.find('.mnImg .imgGroup'),
        $mnImg = $mnImgGroup.find('.image'),
        $textGroup = $recode.find('.textGroup'),
        $text = $textGroup.find('.text'),
        $thumImgGroup = $recode.find('.thumImg .imgGroup'),
        $thumImg = $thumImgGroup.find('.image'),
        btPrev = $recode.find('.Prev'),
        btNext = $recode.find('.Next')
        ;

    $mnImgGroup.css({marginLeft:'-100%'});
    $mnImg.eq(5).prependTo($mnImgGroup);
    $textGroup.css({marginLeft:'-100%'});
    $text.eq(5).prependTo($textGroup);
    $thumImgGroup.css({marginLeft:'-66.66%'});
    $thumImg.eq(5).prependTo($thumImgGroup);
    $thumImg.eq(5).prependTo($thumImgGroup);
    btPrev.on('click', prev);
    btNext.on('click', next);
    

   
   function prev(params) {
    $mnImgGroup.animate({marginLeft:'0%'},function () {
        $('.mnImg .imgGroup .image').eq(5).prependTo('.mnImg .imgGroup');
        $mnImgGroup.css({marginLeft:'-100%'});
    });
    $textGroup.animate({marginLeft:'0%'},function () {
        $('.textGroup .text').eq(5).prependTo('.textGroup');
        $textGroup.css({marginLeft:'-100%'});
    });
    $thumImgGroup.animate({marginLeft:'-33.33%'},function () {
        $('.thumImg .imgGroup .image').eq(5).prependTo('.thumImg .imgGroup');
        $thumImgGroup.css({marginLeft:'-66.66%'});
    });
   }
   function next(params) {
    $mnImgGroup.animate({marginLeft:'-200%'},function () {
        $('.mnImg .imgGroup .image').eq(0).appendTo('.mnImg .imgGroup');
        $mnImgGroup.css({marginLeft:'-100%'});
    });
    $textGroup.animate({marginLeft:'-200%'},function () {
        $('.textGroup .text').eq(0).appendTo('.textGroup');
        $textGroup.css({marginLeft:'-100%'});
    });
    $thumImgGroup.animate({marginLeft:'-99.99%'},function () {
        $('.thumImg .imgGroup .image').eq(0).appendTo('.thumImg .imgGroup');
        $thumImgGroup.css({marginLeft:'-66.66%'});
    });
   }
})