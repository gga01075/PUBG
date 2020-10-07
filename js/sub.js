$(function(){
    //league

    // 다시보기 focus제어
    $('#leagueRepl ul li').on('focusin',function(){
        $(this).addClass('on').children('.over').attr('tabIndex', 0).focus();
    });
    $('#leagueRepl ul li').on('focusout',function(){
        $(this).removeClass('on').children('.over');
    });
    //company


});