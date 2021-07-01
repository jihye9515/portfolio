$(function(){
    $('.tapMenu').tapmenu();
    $('.btTop').btTop();
    $('.like').myDirection();



    $(window).on('scroll', function(){
        var winoffset = window.pageYOffset,
            swot = $('.swot').offset().top,
            banner = $('.banner').offset().top;
        console.log(winoffset, banner, swot);    
        if(winoffset>swot-400 && winoffset<banner-700){
            swotOn();
        }else{
            swotOff();
        }   
    });


    function swotOn(){
        $('.lightText').css({'text-shadow' : '-1px 1px 3px #ee34ff'});
        $('.swot span').css({'color' : '#ee34ff;'});
        $('.lightText').css({'color' : '#ee34ff;'});
    }
    function swotOff(){
        $('.lightText').css({'text-shadow' : 'none'});
        $('.swot span').css({'color' : '#999'});
        $('.lightText').css({'color' : '#999'});
    }



// myskill 
    var $myskill = $('.myskill'),
        $bar = $myskill.find('.bar');

    $(window).on('scroll', function(){
        var winoffset = window.pageYOffset,
            myskill = $('.myskill').offset().top,
            like = $('.like').offset().top;


        // console.log(winoffset, myskill, like);    
        if(winoffset>myskill-300 && winoffset<like){

            barWidth();
        }else{
            barReset(); 
        }
    });

   

    function barWidth(){
        // console.log('ddd');
        console.log('^^^^^')
        $bar.eq(0).stop().animate({width:80+'%'},{
            duration:1000
        });
        $bar.eq(1).stop().animate({width:65+'%'},{
            duration:1000
        });
        $bar.eq(2).stop().animate({width:95+'%'},{
            duration:1000
        });
        $bar.eq(3).stop().animate({width:90+'%'},{
            duration:1000
        });
    }
    function barReset(){
        console.log('프로그래스실행안됨')
        $bar.css({width : 0});
    }
    $('.hdrWrap nav').on('click', function(){
        $('.navWrap').toggle();
    })
    $('.navWrap').on('mouseleave', function(){
        $('.navWrap').hide();
    })
});