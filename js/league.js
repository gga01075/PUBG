$(function(){
    //league 스크롤이벤트      
    $(window).on('scroll',function(){ 
        // 대회소개
        if($(window).scrollTop() > $("#leagueIntr").offset().top - 400){
            gsap.to("#leagueIntr .intro_txt", {delay:0,left:70, opacity:1, duration: 0.5, ease:Power3.easeOut});
            $('.pcs1_img').addClass('img_slide');
        }
        });  
    
    //league 인디케이터 클릭이벤트
    $('.league_indi ul li a').on('click',function(e){
        e.preventDefault();
        var region = $(this).attr('href');
        var regionLocation = $(region).offset();
        $('html, body').animate({scrollTop : regionLocation.top-60}, 400);
    });
    
    $('.league_indi > a').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop : 0 }, 400);
    });
    
    //리그 스케쥴 클릭시 대회지역 해당 슬라이드 이동 
    $('#leagueSche tbody tr a').on('click',function(){
        var region_btn = $(this).attr('data-region');
        var teamLocation = $('#leagueTeam').offset().top-60;
        $('html, body').animate({scrollTop : teamLocation}, 400);
        $('#leagueTeam .teamslider_pager').find('>#'+region_btn).click().focus();
        return false;
    });
    
    
    // 다시보기 focus제어
     $('#leagueRepl ul li').on('focusin',function(){
        $(this).addClass('on').children('.over').attr('tabIndex', 0).focus();
    });
    $('#leagueRepl ul li').on('focusout',function(){
        $(this).removeClass('on').children('.over');
    });
    
    
    
    });