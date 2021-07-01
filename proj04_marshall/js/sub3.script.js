$(function() {
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

     //content major
     var $major = $('.major'),
     $mnImgGroup = $major.find('.mnImg .mnImgGroup'),
     $mnimage = $mnImgGroup.find('.image'),
     btPrev = $major.find('.btPrev'),
     btNext = $major.find('.btNext'),
     $thumImgGroup = $major.find('.thumImg .thumImgGroup'),
     $thumImage = $major.find('.thumImgGroup').children('.image');

 $mnImgGroup.css({marginLeft:'-100%'});    
 $mnimage.eq(4).prependTo($mnImgGroup);
 $thumImgGroup.css({marginLeft:'-66.66%'});
 $thumImage.eq(4).prependTo($thumImgGroup);
 $thumImage.eq(4).prependTo($thumImgGroup);


 btPrev.on('click', prev);
 btNext.on('click', Next);

 function prev(params) {
     $mnImgGroup.animate({marginLeft: '0'}, prevMnImg);
     $thumImgGroup.animate({marginLeft:'-33.33%'},prevThumImg);
 }
 function prevMnImg(params) {
     $mnImgGroup.css({marginLeft:'-100%'});
     $('.mnImgGroup .image').eq(4).prependTo('.mnImgGroup');
 }
 function prevThumImg(params) {
     $thumImgGroup.css({marginLeft:'-66.66%'});
     $('.thumImgGroup .image').eq(4).prependTo('.thumImgGroup');  
 }
 function Next(params) {
     $mnImgGroup.animate({marginLeft: '-200%'}, nextMnImg);
     $thumImgGroup.animate({marginLeft:'-99.99%'},nextThumImg);
 }
 function nextMnImg(params) {
     $mnImgGroup.css({marginLeft:'-100%'});
     $('.mnImgGroup .image').eq(0).appendTo('.mnImgGroup');
 }
 function nextThumImg(params) {
     $thumImgGroup.css({marginLeft:'-66.66%'});
     $('.thumImgGroup .image').eq(0).appendTo('.thumImgGroup');  
 }

  //content info
  var $info = $('.info'),
        $info_dt = $info.find('dt')
        $info_dd =  $info.find('dd');

    $info_dt.on('click', show_dd);

    function show_dd(params) {
        $info_dd.slideUp();
        $(this).siblings('dd').slideDown();
          
    }

});