$(document).ready(function() {
	$(window).scroll(function() {
  if(this.scrollY > 20) {
  	$('.navbar').addClass('sticky');
  } else {
  	$('.navbar').removeClass('sticky');
  }
  
  //scroll-up button show/hide script
  if(this.scrollY > 500) {
	  $('.scroll-up-btn').addClass("show");
  } else {
	  $('.scroll-up-btn').removeClass("show");
  }

	});
$('.menu-btn').click(function() {
	$('.navbar .menu').toggleClass("active");
	$('.menu-btn i').toggleClass("active");
});
// typing text animation script

var typed = new Typed(".typing-2", {
	strings: ["online Courses", "Distance Education", "Global Education"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});
//owl carousel
$('.carousel').owlCarousel({
	margin: 20,
	loop: true,
	autoplayTimeOut: 2000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			nav: false
		},

		600: {
			items: 2,
			nav: false
		},

		1000: {
			items: 3,
			nav: false
		}
	}
});
});