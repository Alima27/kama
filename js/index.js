$( document ).ready(function() {
	$('.navigation-mobile-collapse').on('click', function(e) {
		e.preventDefault();
		
		$(this).toggleClass('navigation-mobile-collapse_active');
		$('.navigation-menu').toggleClass('navigation-menu_show');
	});


	// swiper banner
	var swiper = new Swiper(".bannerSwiper", {
		spaceBetween: 30,
		speed: 900,
		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
			stopOnLastSlide: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		on: {
			init() {
				this.el.addEventListener('mouseenter', () => {
					this.autoplay.stop();
				});
	
				this.el.addEventListener('mouseleave', () => {
					this.autoplay.start();
				});
			}
		},
	});
});
