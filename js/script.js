//
//	jQuery Validate example script
//
//	Prepared by David Cochran
//
//	Free for your use -- No warranties, no guarantees!
//

$(document).ready(function(){
	// Slideshow Background
	$.vegas('slideshow', {
      delay:5000,
      overlay: false,
      backgrounds:[
		{ src:'./img/lake_3_lg.jpg', fade:2000 },
		{ src:'./img/lake_1_lg.jpg', fade:2000 },
		{ src:'./img/lake_2_lg.jpg', fade:2000 },
		{ src:'./img/lake_6_lg.jpg', fade:2000 },
		{ src:'./img/lake_5_lg.jpg', fade:2000 },
		{ src:'./img/lake_7_lg.jpg', fade:2000 },
		{ src:'./img/lake_9_lg.jpg', fade:2000 },
      ]
    })

	// Photobox
	$('#gallery').photobox('a',{ time:0 });

    // using a callback and a fancier selector
    //----------------------------------------------
    $('#gallery').photobox('li > a.family',{ time:0 }, callback);
    function callback(){
       console.log('image has been loaded');
    }

	// Custom JavaScript for Smooth Scrolling
	$(function() {
	    $('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			|| location.hostname == this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
				  $('html,body').animate({
				    scrollTop: target.offset().top
				  }, 1000);
				  return false;
				}
			}
	    });
  	});

	// Navbar
	$('#nav').scrollToFixed();

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions
		$('#contact-form').validate({
	    rules: {
	      name: {
	        minlength: 2,
	        required: true
	      },
	      email: {
	        required: true,
	        email: true
	      },
	      subject: {
	      	minlength: 2,
	        required: true
	      },
	      message: {
	        minlength: 2,
	        required: true
	      }
	    },
			highlight: function(element) {
				$(element).closest('.form-group').removeClass('success').addClass('error');
			},
			success: function(element) {
				element
				.text('OK!').addClass('valid')
				.closest('.form-group').removeClass('error').addClass('success');
			}
	  });

}); // end document.ready