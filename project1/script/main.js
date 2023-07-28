window.addEventListener("load", ()=>{
	let lang=document.getElementsByClassName("lang")[0];
	let [langA, langLi]=lang.children;

	langA.addEventListener("click", (e)=>{
		e.preventDefault();
		langA.classList.toggle("active");
		langLi.classList.toggle("active");
	});

	let tab=this.document.getElementById("tab");
	let moMenu=document.getElementById("mo-menu");
	let [mLogo, mClose]=moMenu.firstElementChild.children;
	let body=document.body;

	tab.addEventListener("click", (e)=>{
		e.preventDefault();

		moMenu.classList.add("m-open");
		body.classList.add("m-open");

	});

	mClose.addEventListener("click", (e)=>{
		e.preventDefault();

		moMenu.classList.remove("m-open");
		body.classList.remove("m-open");
	});

	let mgnb=document.getElementById("mgnb");
	let mgnbLi=mgnb.firstElementChild.children;

	for(let i=0; i<mgnbLi.length; i++){
		mgnbLi[i].addEventListener("click", (e)=>{
			e.preventDefault();

			if(e.currentTarget.classList.contains("active") === false){
				for(let j=0; j<mgnbLi.length; j++){
					if(j === i){
						mgnbLi[j].classList.add("active");

						if(mgnbLi[j].children.length === 2){
							let activeUl=e.currentTarget.lastElementChild;

							gsap.fromTo(activeUl, {display: "block", height: 0}, {height: "auto", duration: 0.3});
						}
					}
					else{
						mgnbLi[j].classList.remove("active");

						if(mgnbLi[j].children.length === 2){
							let activeUl=mgnbLi[j].lastElementChild;

							gsap.to(activeUl, {height: 0, duration: 0.3, onComplete: () => {
								activeUl.removeAttribute("style");
							}});
						}
					}
				}
			}
			else{
				e.currentTarget.classList.remove("active");

				if(e.currentTarget.children.length === 2){
					let activeUl=e.currentTarget.lastElementChild;

					gsap.to(activeUl, {height: 0, duration: 0.3, onComplete: () => {
						activeUl.removeAttribute("style");
					}});
				}
			}
		});
	}
});

$(function(){
	$("#gnb > ul > li").hover(
		function(){
			$(this).addClass("active")
		},
		function(){
			$(this).removeClass("active")
		}
	);

	let total=$("#gnb > ul > li").length;
	

	for(let i=0; i<total; i++){
		if($("#gnb > ul > li").eq(i).find("ul").length === 0){
			$("#gnb > ul > li").eq(i)[0].sub="no";
		}
		else{
			$("#gnb > ul > li").eq(i)[0].sub="yes";
		}

		if($("#gnb > ul > li").eq(i)[0].sub === "no"){
			// console.log($("#gnb > ul > li").eq(i).text());
		}
	}

	$("#gnb > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
	});

	for(let i=0; i<total; i++){
		if($("#gnb > ul > li").eq(i)[0].sub === "yes"){

			$("#gnb > ul > li").eq(i).find("ul li:last-child a").focusout(function(){
				console.log("focusout");
			});
			// $("#gnb li li:last-child a").focusout(function(){
				// $(this).parent().parent().parent().removeClass("active");
			// });
		}
		else{
			// return;
			// console.log("no");

			// $("#gnb > ul > li > a").focusout(function(){
				// $(this).parent().removeClass("active");
			// });
		}
	}
	setTimeout(function(){
		$("#main-visual").addClass("active");
	}, 1000);

	const mainswiper = new Swiper(".main-slider-con", {
		speed: 2000,
		loop: true,
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: ".right",
			prevEl: ".left",
		},
		pagination: {
			el: ".main-control",
			type: "progressbar",
			clickable: true,
		}
	});
	
	const swiper = new Swiper(".conts-Swiper", {
		// centeredSlides: true,
		// autoplay : {
		// 	delay : 3000,
		// 	disableOnInteraction : false,
		// },
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			480: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1020: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		},
	});

	const reviewSwiper = new Swiper(".review-swiper", {
		// centeredSlides: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			480: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			1020: {
				slidesPerView: 4,
				spaceBetween: 10,
			}
		},
	});
});