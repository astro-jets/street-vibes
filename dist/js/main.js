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

    
    // Music Player
   const allMuisc = document.querySelectorAll("#music-item");
   let isPlaying = false;
   let isPaused = false;
   let currentSong = {id:"",song:"",prev:""};

   allMuisc.forEach((m) => {
      m.addEventListener("click", () => {
         let work = m.parentElement;
         let audio = work.querySelector("#audio");
         audio.src = audio.getAttribute("data-music");
         const playBtn = work.querySelector(".bi-play");
         const pauseBtn = work.querySelector(".bi-pause");
         
        //  Toogle play pause
         if(currentSong.song === audio.getAttribute("data-music") || currentSong.song === "")
         {            
            if(isPlaying){
               pauseSong(audio,pauseBtn);
            }
            else{
               currentSong.song = audio.getAttribute("data-music");
               currentSong.id = audio.id;
               currentSong.prev = work;
               playSong(audio,playBtn);
            }
         }
         
        //  play new song
         else
         {
            let prevSong = currentSong.prev.querySelector("#audio");
            let pb = currentSong.prev.querySelector(".bi-pause");
            if(isPlaying){pauseSong(prevSong,pb)}
            currentSong.song = audio.getAttribute("data-music");
            currentSong.id = audio.id;
            currentSong.prev = work;
            playSong(audio,playBtn);
         }
      });
   });

   function playSong(audio,playBtn)
   {
      audio.play();
      playBtn.classList.remove("bi-play")
      playBtn.classList.add("bi-pause")
      isPlaying = true;
      isPaused = false;
   }

   function pauseSong(audio,pauseBtn)
   {
      audio.pause();
      pauseBtn.classList.remove("bi-pause")
      pauseBtn.classList.add("bi-play")
      isPlaying = false;
      isPaused = true;
   }
    // Music Player

    
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

  // Isotope
    var $container = $('.portfolioContainer');
    var $filter = $('#filter');

    if($container)
    {  $container.isotope({
          filter: '*',
          layoutMode: 'masonry',
          animationOptions: {
              duration: 750,
              easing: 'linear'
          }
      });
      $filter.find('a').click(function() {
          var selector = $(this).attr('data-filter');
          $filter.find('a').removeClass('active');
          $(this).addClass('active');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  animationDuration: 750,
                  easing: 'linear',
                  queue: false,
              }
          });
          return false;
      });
      // Isotope
    }
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
