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
   

    //main
    $('.main').myFader();  
    
    //content maAmpli
    $('.msAmpli').myDirection();




    //content brand
    var $brand = $('.brand'),
        $brandmnImg = $brand.find('.mnImg'),
        $brandimage = $brand.find('.thumImg .image'),
        changeUrl = '',
        $logo = $brand.find('.texts .logo svg'),
        $p0 = $brand.find('p').eq(0).text(),
        $p1 = $brand.find('p').eq(1).text(),
        $p2 = $brand.find('p').eq(2).text(),
        i = 0;

    $brandimage.on('click', changeImg);

    function changeImg(params) {
        changeUrl = $(this).css('backgroundImage');
        //console.log(changeUrl);
        $brandmnImg.css('backgroundImage', changeUrl);
        i = $(this).index();
        console.log(i);
        if (i == 0) {
            $logo.attr('style', 'enable-background:new 0 0 156.8 40.1; fill:rgb(56,100,31);');
            $brand.find('p').eq(0).text($p0);
        }
        if (i == 1) {
            $logo.attr('style', 'enable-background:new 0 0 156.8 40.1; fill:#f40;');
            $brand.find('p').eq(0).text($p1);
        }
        if (i == 2) {
            $logo.attr('style', 'enable-background:new 0 0 156.8 40.1; fill:#000;');
            $brand.find('p').eq(0).text($p2);
        }
    }


    //마샬 아코디언 레이아웃
    var $ct04 = $('.ct04'),
        $art = $ct04.find('article');

    $art.on('click', showArt);
    
    
    function showArt(params) {
        $art.removeClass('show');
        $(this).addClass('show');
    }

    var $ct06 = $('.ct06'),
        $06art = $ct06.find('article');

    $06art.on('click', showArt06);


function showArt06(params) {
    $06art.removeClass('show');
    $(this).addClass('show');
}
});