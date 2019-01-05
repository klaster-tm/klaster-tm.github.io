$(document).ready(function() {
//---------------Mobile Menu---------------
	$(".bars").on("click", function () {
		$(".mb").toggleClass("mb-act");
		$(this).css("display", "none");
		$(".times").css("display", "flex");
		$(".header").css("background-color", "rgba(0,0,0,0.83)");
		//-----------
		$(".real-content").css("z-index", "-1");
		$(".about-game-short").css("z-index", "-1");
		$(".button-down").css("z-index", "-1");
	})

	$(".times").on("click", function () {
		$(".mb").removeClass("mb-act");
		$(this).css("display", "none");
		$(".bars").css("display", "flex");
		$(".header").css("background-color", "rgba(0,0,0,0.7)");
		//-----------
		$(".real-content").css("z-index", "1");
		$(".about-game-short").css("z-index", "1");
		$(".button-down").css("z-index", "1");
	})
//-------------------Up Button--------------------
	$('body').append('<a href="#" id="go-top" title="To top"><i class="fas fa-chevron-up"></i></a>');
	$(function() {
		$.fn.scrollToTop = function() {
			$(this).hide().removeAttr("href");
			if ($(window).scrollTop() >= "300") $(this).fadeIn("slow")
			var scrollDiv = $(this);
			$(window).scroll(function() {
				if ($(window).scrollTop() <= "300") $(scrollDiv).fadeOut("slow")
				else $(scrollDiv).fadeIn("slow")
			});
			$(this).click(function() {
			$("html, body").animate({scrollTop: 0}, "fast")
			})
		}
	});
	$(function() {
		$("#go-top").scrollToTop();
	})
//
});