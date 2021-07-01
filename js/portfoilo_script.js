$(function(){
    $('.tapMenu').tapmenu();

    var  $portfolio = $('.portfolio'),
         btPrev = $portfolio.find('.prev'),
         btNext = $portfolio.find('.next'),
         $imgGroup = $portfolio.find('.imgGroup'),
         $image = $portfolio.find('.image'),
         imgheight =$image.outerHeight(),
         $hGroup = $portfolio.find('hGroup'),
         $h4 = $portfolio.find('h4'),
         $ulGroup = $portfolio.find('.ulGroup'),
         $ul = $portfolio.find('ul'),
         $prevImgGroup = $portfolio.find('.prevImgGroup'),
         $prevImg = $portfolio.find('.prevImg'),
         $height= $('.ulView').outerHeight(),
         delta= 0,
         scrollEvt = false,
         i=0;

    $imgGroup.css({marginTop:-imgheight});
    $image.eq(3).prependTo($imgGroup);
    $hGroup.css({top:'-100%'});
    $h4.eq(3).prependTo($hGroup);
    $ulGroup.css({top:'-'+$height+'px'});
    $ul.eq(3).prependTo($ulGroup);
    $prevImgGroup.css({top:'-80px'});
    $prevImg.eq(3).prependTo($prevImgGroup);

    $(window).on('mousewheel', wheelPage);
    
    function wheelPage(e){
        delta = e.originalEvent.wheelDelta;
        console.log(delta);
        if(delta > 0 && scrollEvt == false){
            //console.log('스크롤 아래쪽');
            scrollEvt = true;
            prev();
           
        }else if(delta < 0 && scrollEvt == false){
            //다음페이지를 보기 위해 휠울 아래로 동작하면 - 120이 발생
            scrollEvt = true;
            next();
            
        }
    }
    
    btNext.on('click', next);
    btPrev.on('click', prev);
    var path =[],
    webPath =[];
    path[0] = 'proj04_marshall/personal_marshall.html',
    path[1] = 'proj03_cnp/personal_cnp.html',
    path[2] = 'proj02_sejong/personal_sj.html',
    path[3] = 'proj01_jeep/personal_jeep.html';
    webPath[0] = 'proj04_marshall/index.html',
    webPath[1] = 'proj03_cnp/index.html',
    webPath[2] = 'proj02_sejong/index.html',
    webPath[3] = 'proj01_jeep/index.html';


    function next(){
        var  $portfolio = $('.portfolio'),
         btPrev = $portfolio.find('.prev'),
         btNext = $portfolio.find('.next'),
         $imgGroup = $portfolio.find('.imgGroup'),
         $image = $portfolio.find('.image'),
         imgheight =$image.outerHeight(),
         $hGroup = $portfolio.find('hGroup'),
         $h4 = $portfolio.find('h4'),
         $ulGroup = $portfolio.find('.ulGroup'),
         $ul = $portfolio.find('ul'),
         $prevImgGroup = $portfolio.find('.prevImgGroup'),
         $prevImg = $portfolio.find('.prevImg');


        $imgGroup.animate({marginTop:-imgheight*2},function(){
            $imgGroup.css({marginTop:-imgheight});
            $image.eq(0).appendTo($imgGroup);
        });
        $hGroup.animate({top:'-200%'},function(){
            $hGroup.css({top:'-100%'});
            $h4.eq(0).appendTo($hGroup);
        });
        $ulGroup.animate({top:'-'+($height*2)+'px'},function(){
            $ulGroup.css({top:'-'+$height+'px'});
            $ul.eq(0).appendTo($ulGroup);
        });
        $prevImgGroup.animate({top:'-160px'},function(){
            $prevImgGroup.css({top:'-80px'});
            $prevImg.eq(0).appendTo($prevImgGroup);
            scrollEvt = false;
        });
        i= (i+1)%4;
        $portfolio.find('span').text('0'+(i+1));
        $('.pro').attr('href', path[i]);
        $('.web').attr('href', webPath[i]);

    }

    function prev(){

        var  $portfolio = $('.portfolio'),
         btPrev = $portfolio.find('.prev'),
         btNext = $portfolio.find('.next'),
         $imgGroup = $portfolio.find('.imgGroup'),
         $image = $portfolio.find('.image'),
         imgheight =$image.outerHeight(),
         $hGroup = $portfolio.find('hGroup'),
         $h4 = $portfolio.find('h4'),
         $ulGroup = $portfolio.find('.ulGroup'),
         $ul = $portfolio.find('ul'),
         $prevImgGroup = $portfolio.find('.prevImgGroup'),
         $prevImg = $portfolio.find('.prevImg');


        $imgGroup.animate({marginTop:0},function(){
            $imgGroup.css({marginTop:-imgheight});
            $image.eq(3).prependTo($imgGroup);
        });
        $hGroup.animate({top:'0'},function(){
            $hGroup.css({top:'-100%'});
            $h4.eq(3).prependTo($hGroup);
        });
        $ulGroup.animate({top:'0'},function(){
            $ulGroup.css({top:'-'+$height+'px'});
            $ul.eq(3).prependTo($ulGroup);
        });
        $prevImgGroup.animate({top:'0'},function(){
            $prevImgGroup.css({top:'-80px'});
            $prevImg.eq(3).prependTo($prevImgGroup);
            scrollEvt = false;
        });
        i= (i+3)%4;
        $portfolio.find('span').text('0'+(i+1));
        $('.pro').attr('href', path[i]);
        $('.web').attr('href', webPath[i]);
    }

    $('.hdrWrap nav').on('click', function(){
        $('.navWrap').toggle();
    })
    $('.navWrap').on('mouseleave', function(){
        $('.navWrap').hide();
    })
});