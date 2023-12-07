$(document).ready(function () {
	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: ('<i class="far fa-chevron-left banner-pre-arrow"></i>'),
		nextArrow: ('<i class="far fa-chevron-right banner-next-arrow"></i>'),
		responsive: [
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	});


	$('.cp_slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: ('<i class="far fa-chevron-left cp-pre-arrow"></i>'),
		nextArrow: ('<i class="far fa-chevron-right cp-next-arrow"></i>'),
		responsive: [
			{
				breakpoint: 375,
				settings: {

					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 767,
				settings: {

					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 991,
				settings: {

					slidesToShow: 3,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('.about_cp_slider').slick({
		infinite: true,
		speed: 300,
		dots: true,
		autoplay: false,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: ('<i class="far fa-chevron-left cp-pre-arrow"></i>'),
		nextArrow: ('<i class="far fa-chevron-right cp-next-arrow"></i>')
	});

	$('.product_cp_slider').slick({
		infinite: true,
		speed: 300,
		dots: false,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: ('<i class="far fa-chevron-left cp-pre-arrow"></i>'),
		nextArrow: ('<i class="far fa-chevron-right cp-next-arrow"></i>'),
		responsive: [
			{
				breakpoint: 375,
				settings: {

					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 767,
				settings: {

					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 991,
				settings: {

					slidesToShow: 3,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('.nav_slider').slick({
		infinite: false,
		speed: 300,
		dots: false,
		slidesToShow: 3,
		// prevArrow: ('<i class="far fa-chevron-left cp-pre-arrow"></i>'),
		// nextArrow: ('<i class="far fa-chevron-right cp-next-arrow"></i>'),
		responsive: [
			{
				breakpoint: 375,
				settings: {
					autoplay: false,
					autoplaySpeed: 2000,
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 576,
				settings: {

					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('.p_nav_slide').slick({
		infinite: false,
		speed: 300,
		dots: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		prevArrow: ('<i class="far fa-chevron-left p-nav-pre-arrow"></i>'),
		nextArrow: ('<i class="far fa-chevron-right p-nav-next-arrow"></i>'),
		responsive: [
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 767,
				settings: {

					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 991,
				settings: {

					slidesToShow: 4,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1190,
				settings: {

					slidesToShow: 4,
					slidesToScroll: 1,
				}
			},
		]

	});

	// Staky Header Start
	$(window).scroll(function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 200) {
			$('.about_nav').addClass('about-nav-bg');
		} else {
			$('.about_nav').removeClass('about-nav-bg');

		}
	});
	// Staky Header End

});

$(function () {

	$("#exzoom").exzoom({

		// thumbnail nav options
		"navWidth": 60,
		"navHeight": 60,
		"navItemNum": 5,
		"navItemMargin": 7,
		"navBorder": 1,

		// autoplay
		"autoPlay": false

	});

});


$("a.p_nav").click(function () {
	$("a.p_nav").css("border", "none");
	$(this).css("border-bottom", "3px solid #e64545");
	$("a.p_nav").css("color", "#555");
	$(this).css("color", "#e64545");
});