$(function(){
    // myskill 
var $partic = $('.partic'),
$bar = $partic.find('.bar');

$(window).on('scroll', function(){
var winoffset = window.pageYOffset,
    partic = $('.partic').offset().top,
    design = $('.design').offset().top;


// console.log(winoffset, myskill, like);    
if(winoffset>partic-300 && winoffset<design){

    barWidth();
}else{
    barReset(); 
}
});



function barWidth(){
// console.log('ddd');
console.log('^^^^^')
$bar.eq(0).stop().animate({width:100+'%'},{
    duration:1000
});
$bar.eq(1).stop().animate({width:100+'%'},{
    duration:1000
});
$bar.eq(2).stop().animate({width:100+'%'},{
    duration:1000
});
$bar.eq(3).stop().animate({width:100+'%'},{
    duration:1000
});
}
function barReset(){
console.log('프로그래스실행안됨')
$bar.css({width : 0});
}
});
