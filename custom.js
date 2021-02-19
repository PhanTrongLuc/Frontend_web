$(function() {

	$(window).scroll(function(event) {
		if ($('html,body').scrollTop()>100) {
			$('.header-bottom').addClass('menu-top-header');
			$('.footer-postions').addClass('show-tab')
		} 
		else{
			$('.header-bottom').removeClass('menu-top-header');
			$('.footer-postions').removeClass('show-tab');
		}
	});


	$('.scrollToTop1').click(function(event) {
			$('html,body').animate({scrollTop:0});
			return false;
		});

	   
		
});
	function cancelClick() {
		// body...
		$('#name,#email,#comment').val("");
	}
	