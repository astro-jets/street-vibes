  document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      const togglescrollTop = function() {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
      window.addEventListener('load', togglescrollTop);
      document.addEventListener('scroll', togglescrollTop);
      scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }));
    }

    // Hamburger Menu
    const hambagurger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    const lines = document.querySelectorAll('.line');
    if (hambagurger) {
        hambagurger.addEventListener('click',()=>{
        navLinks.classList.toggle('open');
        lines.forEach(l=>{l.classList.toggle('active');});
      });
    }

    /**
     * Animation on scroll function and init
     */
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', () => {
      aos_init();
    });

  });

(function($) {

	"use strict";

	var topSlider = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='bi-chevron-left'></span>","<span class='bi-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});

	};

	var musicSlider = function() {
		$('.featured-carousel').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    dots: false,
	    autoplayHoverPause: true,
	    items: 1,
	    navText : ["<span class='bi-chevron-left'></span>","<span class='bi-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:2,
          margin:35
	      },
	      600:{
	        items:2
	      },
	      1000:{
	        items:4
	      }
	    }
		});

	};

	topSlider();
	musicSlider();

})(jQuery);
