$( document ).ready(function() {

	/*sticky header */

	// When the user scrolls the page, execute myFunction
	window.onscroll = function() {myFunction()};

	// Get the header
	var y = document.getElementsByClassName('header');
	var header = y[0];

	// Get the offset position of the navbar
	var stickyheader = header.offsetTop;

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
		if (window.pageYOffset >= stickyheader) {
			header.classList.add("sticky-header-purejs");
		} else {
			header.classList.remove("sticky-header-purejs");
		}
	}

	$('.hamburger-wrapper').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.hamburger-wrapper').toggleClass('noborderright');
		$('.menu-wrapper').toggleClass('display-block');
		$('.search').toggleClass('display-none');
	});


	$('.vse-janri').click(function() {
		$('.ul-genres').children().removeClass('display-none');
		$('.zavernut-janri').removeClass('display-none');
		$(this).addClass('display-none');
	});

	$('.zavernut-janri').click(function() {
		$('.ul-genres .hidden').addClass('display-none');
		$('.vse-janri').removeClass('display-none');
		$(this).addClass('display-none');
	});

	$('.zavernut-platformi').click(function() {
		$('.ul-platforms .hidden').addClass('display-none');
		$('.vse-platformi').removeClass('display-none');
		$(this).addClass('display-none');
	});

	$('.vse-platformi').click(function() {
		$('.ul-platforms').children().removeClass('display-none');
		$(this).addClass('display-none');
		$('.zavernut-platformi').removeClass('display-none');
	});

	$('.basket, .buy-text, .basket-header-mobile').click(function() {
		$('.basket-slider-wrapper').addClass('slide-in');
		$('.black-overall').removeClass('display-none');
		$('.black-overall').addClass('display-block');
		$('html, .body').css({'overflow-y': 'hidden'});
	});

	$('.basket-slider-closer').click(function(){
		$('.basket-slider-wrapper').removeClass('slide-in');
		$('.black-overall').removeClass('display-block');
		$('.black-overall').addClass('display-none');
		$('html').css({'overflow-y': 'scroll'});

		$('.search-popup').addClass('display-none');
	});

	$('.sidebar-tabs span').click(function() {
		$('.sidebar-tabs span').removeClass('sidebar-tab-active');
		$(this).addClass('sidebar-tab-active');
	});

	$('.owl-mobile-item').click(function() {
		$('.owl-mobile-item').children().removeClass('yellow');
		$('.owl-mobile-item').removeClass('mobile-yellow-line');
		$(this).children().addClass('yellow');
		$(this).addClass('mobile-yellow-line');
	});

	$('.filtr-mobile-overall-closer, #apply-filter').click(function() {
		$('.filtr-mobile-overall').addClass('display-none');
		$('html, .body').removeClass('mobile-disable-scrolly');
	});

	$('.mobile-filtr-img').click(function() {
		$('.filtr-mobile-overall').removeClass('display-none');
		$('html, .body').addClass('mobile-disable-scrolly');
	});

	$('.hamburger-wrapper-mobile').click(function() {
		$('.menu-mobile-overall').removeClass('display-none');
		$('html, .body').addClass('mobile-disable-scrolly');
	});

	$('.menu-mobile-overall-closer, .menu-mobile-overall .sidebar-tabs ').click(function() {
		$('.menu-mobile-overall').addClass('display-none');
		$('html, .body').removeClass('mobile-disable-scrolly');
	});

	$('.search').click(function() {
		$('.search-popup').removeClass('display-none');
		$('.black-overall').removeClass('display-none');
		$('.body').css({'overflow-y': 'hidden'});
		$('#input-search').focus();
	});

$('#mobile-search-button').click(function(){
	$('.menu-mobile-overall').addClass('display-none');
	$('.search-popup').removeClass('display-none');
	$('.black-overall').removeClass('display-none');
	$('.body').css({'overflow-y': 'hidden'});
	$('#input-search').focus();
});

$('.black-overall').click(function(){
	$('.search-popup').addClass('display-none');
	$('.body').css({'overflow-y': 'scroll'});

	$('.black-overall').addClass('display-none');
	$('.menu-modal-popup').addClass('display-none');
});

$('.menu-modal-popup-closer').click(function(){
	$('.black-overall').addClass('display-none');
	$('.menu-modal-popup').addClass('display-none');
	$('html').css({'overflow-y': 'scroll'});

});

$('#howthisworks, #howthisworks-mobile').click(function(){
	$('#howthisworks-popup').removeClass('display-none');
	$('.black-overall').removeClass('display-none');
	$('html').css({'overflow-y': 'hidden'});
});

$('#help, #help-mobile').click(function(){
	$('#help-popup').removeClass('display-none');
	$('.black-overall').removeClass('display-none');
	$('html').css({'overflow-y': 'hidden'});
});

$('#politika, #politika-mobile').click(function(){
	$('#politika-popup').removeClass('display-none');
	$('.black-overall').removeClass('display-none');
	$('.body').css({'overflow-y': 'hidden'});
});

$('.sidebar-wrapper').hover(function(){
});

$('.main-content-wrapper').hover(function(){

});


	$(".owl-slider").owlCarousel({
		nav:true,
		loop:true,
		items: 1,
		dots: false,
		navText: ["<img src='../img/arrow-left.png'></img>", "<img src='../img/arrow-right.png'></img>"]
	});

	$("#owl-chapters").owlCarousel({
		dots: false
	});

		var sticky = new Waypoint.Sticky({
	  element: $('.sidebar__inner')[0],
		offset: 'bottom-in-view',
	})

});
