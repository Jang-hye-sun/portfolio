window.addEventListener("load", function(){
	let body=document.body;
	let gnb=document.getElementById("gnb");
	let gnbinner=gnb.firstElementChild;
	let gnbLi=gnbinner.firstElementChild.children;
	let tab=this.document.getElementsByClassName("tab")[0];
	let tabSpan=tab.firstElementChild.children;

	tabSpan[0].classList.add("active");

	let tabDesign=(msg) => {
		let n;

		(msg === "open") ? n=1 : n=0;

		for(let i=0; i<tabSpan.length; i++){
			if(i === n){
				tabSpan[i].classList.add("active");
			}
			else{
				tabSpan[i].classList.remove("active");
			}
		}
	};

	tab.addEventListener("click", (e)=>{
		e.preventDefault();

		if(!e.currentTarget.classList.contains("close")){
			e.currentTarget.classList.add("close");
			gnb.classList.add("open");
			body.classList.add("fixed");
			tabDesign("open");
		}
		else{
			e.currentTarget.classList.remove("close");
			gnb.classList.remove("open");
			body.classList.remove("fixed");
			tabDesign("close");
		}
	});

	for(let i=0; i<gnbLi.length; i++){
		gnbLi[i].addEventListener("mouseenter", (e) => {
			e.currentTarget.classList.add("active");
		});
		gnbLi[i].addEventListener("mouseleave", (e)=> {
			e.currentTarget.classList.remove("active");
		});
	}

	let n=0;
    let h, winHalf;

	function init(){
        h=window.innerHeight;
        winHalf=h*0.65;
    }
    init();
    
    this.window.addEventListener("resize", init);

	let container=this.document.getElementById("container");
    let cont=container.children;

    function scrollInteraction(t){
        for(let i=0; i<cont.length; i++){
            if(t < cont[1].offsetTop-winHalf){
                n=0;
            }
            else if(t < cont[2].offsetTop-winHalf){
                n=1;
            }
            else if(t < cont[3].offsetTop-winHalf){
                n=2;
            }
            else if(t < cont[4].offsetTop-winHalf){
                n=3;
            }
            else{
                n=4;
            }
        }
    }
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
                    y: 0.30
                }
            }
        },
        scroll: {
            element: window,
            callback: (offset, dir) => { scrollInteraction(offset.y); }
        }
    });

	trigger.add("#gnb, section");

	let targety=0;

	for(let i=0; i<gnbLi.length; i++){
		gnbLi[i].addEventListener("click", e => {
			e.preventDefault();
			gnb.classList.remove("open");
			body.classList.remove("fixed");
			tabDesign("close");

			setTimeout(() => {
				targety=cont[i].offsetTop;
				gsap.to(this.window, {scrollTo: targety, duration : 0.3});
			}, 300);
		});
	}

	let mainN=0;
	let home=document.getElementById("home");
	let probg=home.firstElementChild.children;

	function backgroundAniamtion(n){
		for(let i=0; i<probg.length; i++){
			if(i === n){
				probg[i].classList.add("active");
			}
			else{
				probg[i].classList.remove("active");
			}
		}
	}
	const swiper = new Swiper(".ctr-list", {
		loop: true,
		pagination: {
			clickable: false,
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
		on: {
			init: function(){
				backgroundAniamtion(mainN);
			},
			slideChange: function(){
				mainN=this.realIndex;
				backgroundAniamtion(mainN);
			}
		}
	});

	let pos=0;

    const keytextString=[
		{
			title:"W Concept",
			client:"Client. W Concept",
			maintxt: "W Concept 스토어 역할에 충실할 수 있는 케이스 스터디를 제작하였습니다.",
			detail: "",
			link: "./casestudy1/index.html"
		},
		{
			title:"Ecc plus",
			client:"Client. YBM ECC",
			maintxt : "Ecc plus의 학습 서비스인 브랜드 역할에 충실할 수 있는 케이스 스터디를 제작하였습니다.",
			detail: "",
			link: "./casestudy2/index.html"
		},
		{
			title:"TOCOBO <br> 웹사이트 리뉴얼",
			client:"Client. TOCOBO",
			maintxt : "고객의 라이프 스타일에 맞는 다양한 정보와 제품을 제공하는 플랫폼으로 리뉴얼 오픈하였습니다.",
			detail: "./project1/project1_detail/index.html",
			link: "./project1/index.html"
		},
		{
			title:"OLGODA <br> 웹사이트 리뉴얼",
			client:"Client. OLGODA",
			maintxt : "올고다(Olgoda)의 핵심기술에 대한 비주얼 이미지와 설명을 중심으로 리뉴얼을 진행하였습니다.",
			detail: "./project2/project2_detail/index.html",
			link: "./project2/index.html"
		},
		{
			title:"GIOINFRA <br> 웹사이트 리뉴얼",
			client:"Client. GIOINFRA",
			maintxt : "스크롤하여 전체적인 브랜드의 홍보 컨텐츠를 확인할 수 있도록 구성하였습니다. 사용자의 편의를 위해 매장정보와 메뉴를 직관적으로 GNB에 노출하여 빠른 메뉴 이동이 가능하도록 UI를 개선하였고, 각각의 페이지에서 연계된 페이지로의 이동이 유연하도록 구성하였습니다.",
			detail: "./project3/project3_detail/index.html",
			link: "./project3/index.html"
		}
	];
	
	let current, total, winw;

	let exSlider=document.querySelector("#experience .exp-con");
	let [expswiper, expLi]=exSlider.children;
	let expswiLi=expswiper.firstElementChild.children; // swipe-slide

	let exTitle=expLi.querySelector(".slide-title");
	let exClient=expLi.querySelector(".slide-client");
	let exmaintxt=expLi.querySelector(".slide-main-text");
	let exDes=expLi.querySelector(".slide-description");
	let detailPG=exDes.firstElementChild;
	let detailLink=exDes.lastElementChild;

	const expSwiper = new Swiper(".exp-img", {
		loop:true,
		/*
		autoplay : {
			delay : 5000,
			disableOnInteraction : false,
		},
		*/
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		on: {
			init: function(){
				current=this.realIndex;
				total=this.slides.length;

				expswiper.classList.add("active");
				expLi.classList.add("active");

				exTitle.innerHTML = keytextString[current].title;
				exClient.innerHTML = keytextString[current].client;
				exmaintxt.innerHTML = keytextString[current].maintxt;

				detailPG.setAttribute("href", keytextString[current].detail);
				detailLink.setAttribute("href", keytextString[current].link);
			},
			slideChange: function(){
				current=this.realIndex;

				expLi.classList.remove("active");

				for(let i=0; i<expswiLi.length; i++){
					if(current >= 2){
						detailPG.classList.add("active");
					}
					else{
						detailPG.classList.remove("active");
					}
				}
				

				setTimeout(function(){
					expLi.classList.add("active");
					exTitle.innerHTML = keytextString[current].title;
					exClient.innerHTML = keytextString[current].client;
					exmaintxt.innerHTML = keytextString[current].maintxt;
					exClient.setAttribute("href", keytextString[current].href);
					detailPG.setAttribute("href", keytextString[current].detail);
					detailLink.setAttribute("href", keytextString[current].link);
				}, 300);
			}
		},
		
	});
	
	let hd=document.getElementById("header");

	window.addEventListener('scroll', function(){
        if(window.scrollY >= 100){
            hd.classList.add('black');
        }else{
            hd.classList.remove('black');
        }
    });
});