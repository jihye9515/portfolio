$(function(){
    //tapMenu
    $('.tapMenu').tapmenu();
    window.onresize = function(){ location.reload(); }
    //nav+main + text
    var $nav = $('.nav'),
        $pageNameGroup = $('.nav .pageNameGroup'),
        $pageName = $('.pageNameGroup').find('li'),
        $btprev = $nav.find('.btPrev'),
        $btnext = $nav.find('.btNext')
        $pageNumGroup = $('.nav .pageNumGroup'),
        $pageNum = $('.pageNumGroup').find('li'),
        $main = $('.mainWrap'),
        $mnimgGroup = $('.mainWrap .imgGroup'),
        $mnimg = $mnimgGroup.find('.image'),
        $textGroup= $('.mainWrap .textGroup'),
        $mntext = $textGroup.find('h3'),
        $mainHeight = $mnimg.outerHeight(),
        delta= 0,
        scrollEvt = false;

    $pageNameGroup.css({marginTop:'-80px'});
    $pageName.eq(4).prependTo($pageNameGroup);
    $pageNumGroup.css({marginTop:'-80px'});
    $pageNum.eq(4).prependTo($pageNumGroup);
    $mnimgGroup.css({marginTop:'-'+$mainHeight+'px'});
    $mnimg.eq(4).prependTo($mnimgGroup);
    $textGroup.css({marginTop:'-160px'});
    $mntext.eq(4).prependTo($textGroup);

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


    $btprev.on('click', prev);
    $btnext.on('click', next);

    function prev(){
        $pageName = $('.pageNameGroup').find('li'),
        $pageNum = $('.pageNumGroup').find('li'),
        $mnimg = $mnimgGroup.find('.image'),
        $mntext = $textGroup.find('h3');
        



        $pageNameGroup.animate({marginTop:'0'},
        function(){
            $pageNameGroup.css({marginTop:'-80px'});
            $pageName.eq(4).prependTo($pageNameGroup);
        });
        $pageNumGroup.animate({marginTop:'0'},
        function(){
            $pageNumGroup.css({marginTop:'-80px'});
            $pageNum.eq(4).prependTo($pageNumGroup);
        });
        $pageNum.removeClass('selected');
        $pageNum.eq(0).addClass('selected');  
       
        $mnimgGroup.animate({marginTop:'0'},
        function(){
            $mnimgGroup.css({marginTop:'-'+$mainHeight+'px'});
            $mnimg.eq(4).prependTo($mnimgGroup);
        });
        $textGroup.animate({marginTop:'0'},
        function(){
            $textGroup.css({marginTop:'-160px'});
            $mntext.eq(4).prependTo($textGroup);
            $mntext.removeClass('fliker');
            $mntext.eq(0).addClass('fliker');
            scrollEvt = false;
        });
      
    
    }
    function next(){
        $pageName = $('.pageNameGroup').find('li'),
        $pageNum = $('.pageNumGroup').find('li'),
        $mnimg = $mnimgGroup.find('.image'),
        $mntext = $textGroup.find('h3');
        


        $pageNameGroup.animate({marginTop:'-160px'},function(){
            $pageNameGroup.css({marginTop:'-80px'});
            $pageName.eq(0).appendTo($pageNameGroup);
        });
        $pageNumGroup.animate({marginTop:'-160px'},function(){
            $pageNumGroup.css({marginTop:'-80px'});
            $pageNum.eq(0).appendTo($pageNumGroup);
        });
        $pageNum.removeClass('selected');
        $pageNum.eq(2).addClass('selected'); 
        
        $mnimgGroup.animate({marginTop:'-'+($mainHeight*2)+'px'},function(){
            $mnimgGroup.css({marginTop:'-'+$mainHeight+'px'});
            $mnimg.eq(0).appendTo($mnimgGroup);
        });
        $textGroup.animate({marginTop:'-320px'},function(){
            $textGroup.css({marginTop:'-160px'});
            $mntext.eq(0).appendTo($textGroup);
            $mntext.removeClass('fliker');
            $mntext.eq(2).addClass('fliker');
            scrollEvt = false;
        });
            
    }

    $('.hdrWrap nav').on('click', function(){
        $('.navWrap').toggle();
    })
    $('.navWrap').on('mouseleave', function(){
        $('.navWrap').hide();
    })
});