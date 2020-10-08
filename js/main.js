$(function(){
    //index 스크롤이벤트      
    $(window).on('scroll',function(){ 
        // index 리그전
        if($(window).scrollTop() > $(".cnt2").offset().top - 600){
            gsap.to("#league h3", {delay:0.2,marginLeft:0, opacity:1, duration: 0.5, ease:Power3.easeOut});
            gsap.to("#league>ul>li:nth-of-type(1)", {delay:0.4,marginLeft:0, opacity:1, duration: 0.5, ease:Power3.easeOut});
            gsap.to("#league>ul>li:nth-of-type(2)", {delay:0.6,marginLeft:0, opacity:1, duration: 0.5, ease:Power3.easeOut});
            gsap.to("#league>ul>li:nth-of-type(3)", {delay:0.8,marginLeft:0, opacity:1, duration: 0.5, ease:Power3.easeOut});
            gsap.to("#league>ul>li:nth-of-type(4)", {delay:1.0,marginLeft:0, opacity:1, duration: 0.5, ease:Power3.easeOut});
            gsap.to("#league>.read_more", {delay:0.8,marginLeft:0, opacity:1, duration: 0.5, ease:Power3.easeOut});
        //index 패치노트
            gsap.to("#patchnote h3", {delay:0.2,marginLeft:-50, opacity:1, duration: 0.5, ease:Power3.easeOut});
            gsap.to("#patchnote>ul>li:nth-of-type(1)", {delay:0.4,marginLeft:0, opacity:1, duration: 0.5, ease:Power3.easeOut});
            gsap.to("#patchnote>ul>li:nth-of-type(2)", {delay:0.6,marginLeft:70, opacity:1, duration: 0.5, ease:Power3.easeOut});
            gsap.to("#patchnote>ul>li:nth-of-type(3)", {delay:0.8,marginLeft:140, opacity:1, duration: 0.5, ease:Power3.easeOut});
            gsap.to("#patchnote>ul>li:nth-of-type(4)", {delay:1.0,marginLeft:210, opacity:1, duration: 0.5, ease:Power3.easeOut});
            gsap.to("#patchnote>.read_more", {delay:0.8,marginLeft:270, opacity:1, duration: 0.5, ease:Power3.easeOut});
        }
        //index 신상품
        if($(window).scrollTop() > $(".cnt4").offset().top - 650){
            gsap.to("#storeNew h2", {delay:0.2,marginLeft:0, opacity:1, duration: 0.5, ease:Power3.easeOut});
            gsap.to("#storeNew .area >p", {delay:0.2,marginLeft:0, opacity:1, duration: 0.5, ease:Power3.easeOut});

            gsap.to("#storeNew .area > span:first-of-type", {delay:0.4,marginLeft:0, opacity:1, duration: 0.5, ease:Power3.easeOut});
            gsap.to("#storeNew .area > span+span", {delay:0.4,marginLeft:10, opacity:1, duration: 0.5, ease:Power3.easeOut});
            gsap.to("#storeNew .read_more", {delay:0,marginLeft:0, opacity:1, duration: 0.5, ease:Power3.easeOut});
            gsap.to("#storeNew .store_list li:nth-of-type(-n+2)", {delay:0,marginTop:0, opacity:1, duration: 0.5, ease:Power3.easeOut});
            gsap.to("#storeNew .store_list li:nth-of-type(n+2)", {delay:0.2,marginTop:0, opacity:1, duration: 0.5, ease:Power3.easeOut});
        }

        //index 신상품 목록 hover
        $('#storeNew .store_list li a').on('focusin',function(){
            $(this).parent('li').addClass('on');
        });
        $('#storeNew .store_list li a').on('focusout',function(){
            $(this).parent('li').removeClass('on');
        });





    });  


});