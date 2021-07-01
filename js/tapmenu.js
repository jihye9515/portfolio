(function($){
    $.fn.tapmenu = function(){
        var $tapBar = $('.tapMenu .tapBar'),
            $tapNav = $('.tapMenu .tapNav');

    $tapBar.on('click' , toggleNav);
    $tapBar.on('mouseleave' , hideNav);
    $tapBar.on('mouseenter' , tapColor);
    $tapNav.on('mouseleave' , hideNav);
    $tapNav.on('mouseenter' , showNav);
    
    function toggleNav(){
        $tapNav.toggle();
    }
    function showNav(){
        $tapNav.show();
        $tapBar.css('color','#07175f');
        $tapBar.css('textShadow','3px 3px 5px #74a2ee');
        $tapBar.stop().animate({marginLeft:0});
        
    }
    function hideNav(){
        $tapNav.hide();
        $tapBar.css('color','#07175f');
        $tapBar.css('textShadow','none');
        $tapBar.stop().animate({marginLeft:'-40px'});
    }
    function tapColor(){
        $tapBar.css('color','#07175f');
        $tapBar.css('textShadow','3px 3px 5px #74a2ee');
        $tapBar.stop().animate({marginLeft:0});
    }
    }
})($)