$(function(){
	let tabN=0;
	let n;
	let str="";
	let sliden=0;
	let index=0;
	let total=6;
	let btnN=3;
	// sub_gnb hover처리 
	$(".gnb > ul > li").hover(
		function(){
			$("#gnb").addClass("on");
			$(this).addClass("on");
		},
		function(){
			$("#gnb").removeClass("on");
			$(this).removeClass("on");
		}
	);
	$(".gnb > ul > li:first-child > a").focusin(function(){
		$("#gnb").addClass("on");
		$(".gnb > ul").addClass("on");
		$(this).addClass("on");
	});
	$(".gnb li:last-child li:last-child a").focusout(function(){
		$("#gnb").removeClass("on");
		$(".gnb > ul").removeClass("on");
		// $(this).removeClass("on");
	});
	$(".gnb > ul > li > a").focusin(function(){
		$(this).addClass("on");
		$(this).parent().addClass("on");
	});
	$(".gnb li li:last-child a").focusout(function(){
		$(this).parent().parent().parent().removeClass("on");
	});
	//slider

	$(".keyvisual li").eq(sliden).addClass("current");
	$(".controller li").eq(sliden).addClass("current");
	function intervalMoving(){
		if(sliden < (total-1)){
			sliden=sliden+1;
		}
		else{
			sliden=0;
		}
		$(".keyvisual li").removeClass("current");
		$(".keyvisual li").eq(sliden).addClass("current");
		$(".controller li").removeClass("current");
		$(".controller li").eq(sliden).addClass("current");
	}
	$(".controller li").click(function(e){
		e.preventDefault();
		index=$(this).index();

		if(sliden != index){
			sliden=index;
			$(".keyvisual li").removeClass("current");
			$(".keyvisual li").eq(sliden).addClass("current");
			$(".controller li").removeClass("current");
			$(".controller li").eq(sliden).addClass("current");
		}
	});
	// 공지사항
	$(".content1 > ul > li").eq(tabN).addClass("active");

	$(".content1 .title a").click(function(e){
		e.preventDefault();
		tabN=$(this).parent().parent().index();
		$(".content1 > ul > li").removeClass("active");
		$(".content1 > ul > li").eq(tabN).addClass("active");
	});
	// content2
	$(".content2 ul li").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}
	);
	$(".content2 ul li").focusin(function(){
		$(this).addClass("active");
	});
	$(".content2 ul li").focusout(function(){
		$(this).removeClass("active");
	});
	//content3
	$(".content3 dt a").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().next().slideToggle(300);
	});
	$(".content3 dd a").click(function(e){
		e.preventDefault();
		$(".content3 dt a").removeClass("active");
		$(".content3 dd").slideup(300);
		n=$(this).parent().index();
		str=$(this).text();
	});
	// $(".content3 dt a").focusin(function(){
	// 	$(this).addClass("active");
	// });
	// $(".content3 dt a").focusout(function(){
	// 	$(this).removeClass("active");
	// });
	
	//content4
	$(".btn > ul > li").eq(tabN).addClass("btn_on");

	$(".content4 .btn a").click(function(e){
		e.preventDefault();
		tabN=$(this).parent().index();
		$(".btn > ul > li").removeClass("btn_on");
		$(".btn > ul > li").eq(tabN).addClass("btn_on");
	});
	
	//content5
	$(".right li").eq(sliden).addClass("current");
	$(".right_controller li").eq(sliden).addClass("current");

	let amount=0;

	$(".right_controller li a").click(function(e){
		e.preventDefault();
		let index=$(this).parent().index();

		if(sliden != index){
			sliden=index;
			$(".right_controller li").removeClass("current");
			$(".right_controller li").eq(sliden).addClass("current");
			amount=366*-1*sliden;
			$(".right ul").css({"left": amount});
		}
	});

	// footer
	var swiper = new Swiper('#footer .swiper', {
		slidesPerView: 6,
		direction: getDirection(),
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		on: {
			resize: function () {
			swiper.changeDirection(getDirection());
			},
		},
		});
		function getDirection() {
		var windowWidth = window.innerWidth;
		var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

		return direction;
		}
});