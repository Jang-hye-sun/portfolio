$(function(){
    // gnb
    $("#gnb").hover(function(){
        $("#gnb").addClass("height");
    },function(){
        $("#gnb").removeClass("height");
    });

    $(".gnb_inner .menu > ul > li").focusin(function(){
        $(".gnb_inner .menu > ul > li").removeClass("white");
        $(this).addClass("white");
    });
    $(".gnb_inner .menu li li").focusin(function(){
        $(this).parent().parent().parent().addClass("white");
    });
    $(".menu > ul > li:first-child").focusin(function(){
        $("#gnb").addClass("height");
    });
    $(".menu li:last-child li:last-child a").focusout(function(){
        $("#gnb").removeClass("height");
        $(this).parent().parent().parent().removeClass("over");
    });

    $(".desktop_menu > ul > li").hover(function(){
            $("#header").addClass("active");
        },
        function(){
            $("#header").removeClass("active");
    });

	// 모바일 gnb
	let winw;
	let isMobile;

	$("#header .main_manu").click(function(e){
		e.preventDefault();

		$("#gnb_mobile").addClass("open");
		$(".close").addClass("open");
	});
	$(".close").click(function(e){
		e.preventDefault();
		$("#gnb_mobile").removeClass("open");
		$(".close").removeClass("open");
	});
	
	// 모바일 메뉴 누르면 서브 보이기

	$(".mobile_menu > ul > li").click(function(e){
		e.preventDefault();

		if(isMobile){
			if($(this).hasClass("open") == false){
				$(".mobile_menu > ul > li").removeClass("open");
				$(this).addClass("open");
				$(".mobile_menu ul ul").slideUp(300, function(){
					$(this).removeAttr("style");
				});
				$(this).find("ul").slideDown(300);
			}
			else{
				$(this).removeClass("open");
				$(this).find("ul").slideUp(300, function(){
					$(this).removeAttr("style");
				});
			}
		}
	});
	// scroll  이벤트
	
	let wint=0;
	let winHalf;

	$(window).scroll(function(){
		wint=$(window).scrollTop();
		winHalf=$(window).height()/2;

		// header 메뉴
		if(wint > 70) {
			$("#header").addClass("white");
			$("#gnb .desktop_menu > ul > li").addClass("white");
		}
		else {
			$("#header").removeClass("white");
			$("#gnb .desktop_menu > ul > li").removeClass("white");
		}
	});
		
	$(window).trigger("scroll");

	// 스크롤 트리거
	$(window).resize(function(){
		winw=$(window).width();

		if(winw <= 1020){
			isMobile=true;
		}
		else{
			isMobile=false;
			$("#gnb_mobile").removeClass("open");
			$(".mobile_menu > ul > li").removeClass("open");
			$(".mobile_menu ul ul").removeAttr("style");
			$(".close").removeClass("open");
		}
	});

	$(window).trigger("resize");

	const trigger=new ScrollTrigger.default({
		trigger: {
			once: true,
			toggle: {
				class: {
					in: "active",
					out: "inactive"
				}
			},
			offset: {
				viewport: {
					x: 0,
					y: 0.25
				}
			}
		}
	});

	trigger.add("div[id*=con]");
	trigger.add("#footer");
	
	setTimeout(function(){
		$("#main_visual").addClass("active");
	}, 1000);

	const mainswiper = new Swiper(".main_visual_con", {
		speed: 2000,
		loop: true,
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		on: {
			init: function(){
				$("#main_visual .main_control li").removeClass("active");
				$("#main_visual .main_control li").eq(this.realIndex).addClass("active");
			},
			slideChange: function(){
				$("#main_visual .main_control li").removeClass("active");
				$("#main_visual .main_control li").eq(this.realIndex).addClass("active");
			}
		}
	});
	// moment

	const subswiper = new Swiper(".sub_Swiper", {
		loop:true,
		slidesPerView: 1,
		spaceBetween: 30,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
		breakpoints:{
			800:{
				slidesPerView: 2,
				spaceBetween: 30,
			}
		}
	});

	//footer checked

	$("label[for=online_Agree]").click(function(e){
		e.preventDefault();
		// $(this).toggleClass("checked");

		if($(this).hasClass("checked") == false){
		// if(!$(this).hasClass("checked")){
			$(this).addClass("checked");
			$(this).prev().prop("checked", true);
		}
		else{
			$(this).removeClass("checked");
			$(this).prev().prop("checked", false);
		}
	});

	var str="";
	var n;

	$(".ft_right .family_site a").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(".ft_right dd").slideToggle(300);
	});
	$(".ft_right dd a").click(function(e){
		e.preventDefault();
		$(".ft_right dt a").removeClass("active");
		$(".ft_right dd").slideUp(300);
		n=$(this).parent().index();
		str=$(this).text();
	});
});