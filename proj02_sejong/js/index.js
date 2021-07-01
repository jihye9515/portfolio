$(function(){
    $('.hdrWrap').navWrap();

    var $perform = $('.perform'),
        $imgGroup = $perform.find('.imgGroup'),
        btprev = $('.btPrev'),
        btnext = $('.btNext');

    
    $imgGroup.children(':last').prependTo($imgGroup);

    btprev.on('click', function(){
        console.log('ddd');
        $imgGroup.animate({marginLeft:'-33.33%'},function(){
            $imgGroup.css({marginLeft:'-66.66%'});
            $imgGroup.children(':last').prependTo($imgGroup);
        });
        
    });
    btnext.on('click', function(){
        console.log('rrr');
        $imgGroup.animate({marginLeft:'-99.99%'},function(){
            $imgGroup.css({marginLeft:'-66.66%'});
            $imgGroup.children(':first').appendTo($imgGroup);
        });
    });

    var $sjNotice = $('.sjNotice'),
        $btnext = $sjNotice.find('button'),
        $sect = $sjNotice.find('.section'),
        $poster = $sjNotice.find('.poster');
    
    $btnext.on('click', function(){
        $poster.animate({marginLeft:'-50%'});
    });
    $poster.on('click', function(){
        $poster.animate({marginLeft:'0%'});
    });
    $sect.on('mouseleave', function(){
        $poster.animate({marginLeft:'0%'});
        console.log('ddd');
    });
});