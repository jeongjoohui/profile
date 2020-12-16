jQuery(document).ready(function ($) {


	//for Preloader

	$(window).load(function () {
		$("#loading").fadeOut(500);
	});



	/*$(document).ready(function(){
		var Swiper = new Swiper('.swiper-container',{
			slidesPerView : 3 ,
			spaceBetween : 30 ,
			pagination: {
				el: '.swiper-pagination',
				type: 'progressbar',
				clickable: true,
			  },
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			autoplay: {
				delay: 2000
			}
		});
	});*/


	/*fullpage -----------------------
	---------------------------------*/
	$(document).ready(function () {
		$('#fullpage').fullpage({
			anchors: ['JOOHUI', '1stPage', '2ndPage', '3rdPage', '4thPage', 'Contact'],
			menu: '#myMenu',


			navigationPosition: 'right',
			navigationTooltips: ['JOOHUI', 'About Me', 'portfolio1', 'portfolio2', 'portfolio3', 'portfolio4'],
		});
	});




	/*typing----------------------------------- */

	var TxtType = function (el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 1000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};

	TxtType.prototype.tick = function () {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

		var that = this;
		var delta = 200 - Math.random() * 100;

		if (this.isDeleting) {
			delta /= 2;
		}

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(function () {
			that.tick();
		}, delta);
	};



	window.onload = function () {
		var elements = document.getElementsByClassName('typewrite');
		for (var i = 0; i < elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-type');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
				new TxtType(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
		document.body.appendChild(css);
	};



	//section2 video_btn event
	$(".video_btn").on('click', function (event) {
		//$(".contents").toggle();
		//$(this).text($(this).text() == 'Show' ? 'Hide' : 'Show');
		$(".container").delay(1000).fadeIn(1000);
		$(".video_btn").fadeOut(1000);
	});

	$(".video_btn").on('mouseover', function (event) {
		$(".click").show();
	});
	$(".video_btn").on('mouseout', function (event) {
		$(".click").hide();
	});

	function aos_init() {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out-back",
			once: true
		});
	}
	$(window).on('load', function () {
		aos_init();
	});

	/*--------------------------------------------------------
	circle progress
	--------------- */
	var values = new Array(0.9, 0.9, 0.6, 0.75, 0.7, 0.7);
	$('.skills').find('.skills-data').each(function (i) {
		$(this).circleProgress({
			value: values[i],
			fill: {
				gradient: ['#037', '#adf'],
				gradientAngle: Math.PI / 2
			}
		}).on('circle-animation-progress', function (event, progress, stepValue) {
			$(this).find('stong').html(Math.round(100 * values[i]) + '<i>%<i>');
		});
	});

	/*---------------------Porfolio isotope and filter------------------------------------------*/
	$(window).on('load', function () {
		var portfolioIsotope = $('.portfolio-container').isotope({
			itemSelector: '.portfolio-item',
			layoutMode: 'fitRows'
		});

		$('#portfolio-flters li').on('click', function () {
			$("#portfolio-flters li").removeClass('filter-active');
			$(this).addClass('filter-active');

			portfolioIsotope.isotope({
				filter: $(this).data('filter')
			});
			aos_init();
		});

		// Initiate venobox (lightbox feature used in portofilo)
		$(document).ready(function () {
			$('.venobox').venobox();
		});
	});

	//modal----------------------------------------------------------------------------------------//
	/*var modals = document.getElementById("myModal");
	// Modal을 띄우는 클래스 이름을 가져옵니다.
	var btns = document.getElementById("myBtn");
	// Modal을 닫는 close 클래스를 가져옵니다.
	var spanes = document.getElementsByClassName("close");
	var funcs = [];

	// Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
	function Modal(num) {
		return function () {
			// 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
			btns[num].onclick = function () {
				modals[num].style.display = "block";
				console.log(num);
			};

			// <span> 태그(X 버튼)를 클릭하면 Modal이 닫습니다.
			spanes[num].onclick = function () {
				modals[num].style.display = "none";
			};
		};
	}
	// 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
	for (var i = 0; i < btns.length; i++) {
		funcs[i] = Modal(i);
	}

	// 원하는 Modal 수만큼 funcs 함수를 호출합니다.
	for (var j = 0; j < btns.length; j++) {
		funcs[j]();
	}

	// Modal 영역 밖을 클릭하면 Modal을 닫습니다.
	window.onclick = function (event) {
		if (event.target.className == "modal") {
			event.target.style.display = "none";
		}
	};*/

	// Back to top button-----------------------------------------------------------------------------//
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});

	/*$('.back-to-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
		return false;
	});*/

	// Testimonials carousel (uses the Owl Carousel library)
	$(".testimonials-carousel").owlCarousel({
		autoplay: true,
		dots: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			900: {
				items: 3
			}
		}
	});
	// Portfolio details carousel
	$(".portfolio-details-carousel").owlCarousel({
		autoplay: true,
		dots: true,
		loop: true,
		items: 1
	});


	/*---------------------------------------------*
	 * Mobile menu
	 ---------------------------------------------*/
	$('#navbar-menu').find('a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top - 80)
				}, 1000);
				if ($('.navbar-toggle').css('display') != 'none') {
					$(this).parents('.container').find(".navbar-toggle").trigger("click");
				}
				return false;
			}
		}
	});



	


	// slick slider active Home Page Tow
	$(".service_slid_item").slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: "<i class='icon icon-chevron-left nextprevleft'></i>",
		nextArrow: "<i class='icon icon-chevron-right nextprevright'></i>",
		autoplay: true,
		autoplaySpeed: 2000
	});


	// slick slider active Home Page Tow
	$(".choose_slide").slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: "<i class='icon icon-chevron-left nextprevleft'></i>",
		nextArrow: "<i class='icon icon-chevron-right nextprevright'></i>",
		autoplay: true,
		autoplaySpeed: 2000
	});




	//---------------------------------------------
	// Counter 
	//---------------------------------------------

	$('.statistic-counter').counterUp({
		delay: 10,
		time: 2000
	});

	//---------------------------------------------
	// Scroll Up 
	//---------------------------------------------

	$('.scrollup').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});



	//Team Skillbar active js

	jQuery('.teamskillbar').each(function () {
		jQuery(this).find('.teamskillbar-bar').animate({
			width: jQuery(this).attr('data-percent')
		}, 6000);
	});


	// scrool Down

	//$('.scrooldown a').bind('click', function () {
	//    $('html , body').stop().animate({
	//        scrollTop: $($(this).attr('href')).offset().top - 160
	//    }, 1500, 'easeInOutExpo');
	//    event.preventDefault();
	//});

	//End
});





$(function () {
	// Initialize Isotope
	var $notes = $(".grid").isotope({
		itemSelector: ".grid-item"
	});

	// On filter button click
	$(".filters-button-group .btn").on("click", function (e) {
		var $this = $(this);

		// Prevent default behaviour
		e.preventDefault();

		// Toggle the active class on the correct button
		$(".filters-button-group .btn").removeClass("is-checked");
		$this.addClass("is-checked");

		// Get the filter data attribute from the button
		$notes.isotope({
			filter: $this.attr("data-filter")
		});

	});


	$('.mouse-scroll').bind('click', function () {
		$('html , body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 60
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});




});