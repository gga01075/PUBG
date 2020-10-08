$(function(){
	//skip navigation 제어 
	$('#skip a').on('click', function () {
        var target = $(this).attr('href');
        console.log(target);

        $(target).attr('tabIndex', -1).focus();

        return false;
      });


	//#header.active
	$('#header').on('mouseenter focusin',function(){
		$(this).addClass('active');
	});

	$('#header').on('mouseleave focusout',function(){  //헤더에 마우스떠나거나 포커스아웃될때
		if(!$(this).hasClass('hd_scroll')){   //hd_scroll클래스를 가지고있지 않다면 
			$(this).removeClass('active');
		}
	});

	//#header scroll
	$(window).scroll(function(){
		var height = $(this).scrollTop();
		console.log(height);
		if(height > 100){
			$('#header').addClass('hd_scroll').addClass('active');
		}else{
			$('#header').removeClass('hd_scroll')
		}
	});


    //#gnb hover
  var $gnb = $('#gnb>ul');
    // 초기화 
    $gnb.find('li>ul').hide();

	//1)depth1 <a>에 마우스 진입:mouseenter, focus
	$gnb.find("> li > a").on("mouseenter focus",function  () {
		//초기화
		$gnb.find("> li.on").removeClass("on").children("ul").hide();
		//현재설정
		$(this).next().stop(500).slideDown(300).parent().addClass("on");
	});
	//2)nav에서 마우스 떠나기:mouseleave
	$gnb.on("mouseleave",function  () {
		//초기화
		$gnb.find("> li.on").removeClass("on").children("ul").slideUp(300);
	});

	//3)blur: shift탭을 눌러서 gnb에서 포커스가 나가던지, 탭을 눌러 gnb에서 포커스가 나가던지, 
	$("#gnb a:first , #gnb a:last").on("blur",function  () {
		setTimeout(function  () {
			if ( !$("#gnb a").is(":focus") ) {
				$gnb.trigger("mouseleave");
			}
		}, 10);
    });
    
	//language hover
		//초기화
	var $lang = $('.lang');
	$lang.children('ul').hide();

		//마우스 호버,포커스
	$lang.on("mouseenter focusin",function(){
		$(this).children('button').addClass('on').next('ul').stop(500).slideDown(300);
	});
		//마우스 떠날때
	$lang.on("mouseleave",function(){
		$(this).children('button').removeClass('on').next('ul').slideUp(300);
	});
		//포커스떠날때
	$lang.on("focusout",function(){
		setTimeout(function() {
			if ( !$(".lang a").is(":focus") ) {
				$lang.trigger("mouseleave");
			}
		}, 10);
	});


	//login팝업창 열기 
$('.login_btn').on('click',function(){
	var $openBtn = $(this);   //모달 닫기를 클릭시 열어준 버튼에 포커스 강제 이동
	var $mdCnt = $( $(this).data('href') ); //$()로 감싸서 선택자로 변경
	var $closeBtn = $mdCnt.find('.close_btn'); //열려진 모달 내부의 닫기버튼
	var $first = $mdCnt.find('[data-link="first"]'); //열려진 모달 내부의 첫번째 포커스가 갈 대상
	var $last = $mdCnt.find('[data-link="last"]'); //열려진 모달 내부의 마지막 포커스가 갈 대상
	console.log($mdCnt, typeof $mdCnt);
	var timer = 0; //누적되는 resize 이벤트를 제어 => 성능 향상

	//1) 스크린리더에서는 열려진 모달 말고는 접근하지 못하도록 제어
	$mdCnt.siblings().attr({'aria-hidden': true, inert: ''});

	//2) #dim 동적 생성
	$mdCnt.before('<div id="dim"></div>');
	var $dim = $('#dim');

	//3) resize 이벤트로 열려질 모달의 위치 제어
	$(window).on('resize', function () {
		clearTimeout(timer);

		timer = setTimeout(function () {
			//문서가운데 위치(가로) : (윈도창의 너비-열려질모달의가로) / 2
			var xpos = ($(this).width() - $mdCnt.outerWidth()) / 2;
			var ypos = ($(this).height() - $mdCnt.outerHeight()) / 2;
			console.log(xpos, ypos);
			$mdCnt.css({left: xpos, top: ypos});
		}, 50);
	});
	
	$(window).trigger('resize');

	//4) #dim, 모달 컨텐츠를 보여지게 처리, 첫번째 링크에 포커스 강제 이동
	$dim.stop().fadeIn().next().css('visibility', 'visible');
	$first.focus();

	//5-1) 접근성 추가 : 첫번째 링크에서 shift+tab을 누르면 가장 마지막으로 포커스 강제이동
	$first.on('keydown', function (e) {
		console.log( e.keyCode ); //tab => 9
		if (e.shiftKey && e.keyCode == 9) {
			e.preventDefault();
			$last.focus();
		}
	});

	//5-2) 접근성 추가 : 마지막 링크에서 shift(X)+tab을 누르면 가장 처음으로 포커스 강제이동
	$last.on('keydown', function (e) {
		console.log( e.keyCode ); //tab => 9
		if ( !e.shiftKey && e.keyCode == 9 ) {
			e.preventDefault();
			$first.focus();
		}
	});

	//닫기 버튼 클릭시
	$closeBtn.on('click', function () {
		//1) $dim 투명도 0으로 사라지기(완료함수로 remove()로 제거), 
		$dim.stop().fadeOut('fast', function () {
			$(this).remove();
		});

		//2) 모달컨텐츠 숨기기(visibility)
		//모달상세컨텐츠의 나머지 형제들을 스크린리더에서 접근할수 있도록 되돌리기(제거 - aria-hidden, inert)
		$mdCnt.css('visibility', 'hidden').siblings().removeAttr('aria-hidden inert');

		//3) 열기 버튼으로 포커스 강제 이동
		$openBtn.focus();
	});

	//#dim을 클릭해도 모달 닫기기
	$dim.on('click', function () {
		$closeBtn.click();
	});

	//esc 키보드를 클릭하면 모달 닫기기
	$(window).on('keydown', function (e) {
		console.log(e.keyCode);  //27
		if (e.keyCode == 27) $closeBtn.click();
	});


});
	


    



});


