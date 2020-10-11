$(function(){

   // 대표인사말
   $(window).on('scroll',function(){//company 스크롤이벤트

    if($(window).scrollTop() > $("#companyIntr").offset().top - 500){
        gsap.to("#companyIntr .area img", {delay:0,marginLeft: 117, opacity:1, duration: 0.5, ease:Power3.easeOut});
        gsap.to("#companyIntr .area .companyIntr_txt", {delay:0.2,marginLeft: 0, opacity:1, duration: 0.5, ease:Power3.easeOut});
      };
    //기업이념
    if($(window).scrollTop() > $("#companyWort").offset().top - 500){
        gsap.to("#companyWort svg .cls-2", {delay:0, duration: 5,strokeDashoffset: 0, ease:Power3.easeOut});

         gsap.to("#companyWort ul li:nth-of-type(odd) .worth_txt", {delay:5,left: 0, opacity:1, duration: 0.5, ease:Power3.easeOut});
         gsap.to("#companyWort ul li:nth-of-type(even) .worth_txt", {delay:5,right: 0, opacity:1, duration: 0.5, ease:Power3.easeOut});  
      }
    
        });  

});