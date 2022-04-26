(function ($) {
	//=============================
	// Domain Slide Carousel
	//=============================

	if ($(".domain-slide").length > 0) {
		$(".domain-slide").owlCarousel({
			autoplay: true,
			dots: false,
			loop: true,
			margin: 0,
			nav: true,
			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
			responsiveBaseElement: "body",
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 2.5,
				},
				1200: {
					items: 3,
				},
			},
		});
	}
	//=============================
	// Hosting Slide Carousel
	//=============================

	$(window).on("load", function () {
		if ($(window).width() > 600) {
			$(".hosting-slide").owlCarousel({
				autoplay: true,
				dots: true,
				loop: true,
				margin: 30,
				nav: false,
				responsiveBaseElement: "body",
				responsive: {
					0: {
						items: 1,
					},
					600: {
						items: 2,
					},
					1000: {
						items: 3,
					},
					1200: {
						items: 4,
					},
				},
			});
		}
	});
	//=============================
	// Brand Slide Carousel
	//=============================

	if ($(".brand-caro").length > 0) {
		$(".brand-caro").owlCarousel({
			autoplay: true,
			dots: false,
			loop: true,
			margin: 30,
			nav: true,
			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
			responsiveBaseElement: "body",
			responsive: {
				0: {
					items: 1,
				},
				375: {
					items: 2,
				},
				480: {
					items: 3,
				},
				767: {
					items: 4,
				},

				991: {
					items: 6,
				},
				1200: {
					items: 7,
				},
			},
		});
	}
	//=============================
	// Product Slide Carousel
	//=============================

	if ($(".product-slide").length > 0) {
		$(".product-slide").owlCarousel({
			autoplay: true,
			dots: true,
			loop: true,
			margin: 30,
			nav: false,
			responsiveBaseElement: "body",
			responsive: {
				0: {
					items: 1,
				},
				480: {
					items: 2,
				},
				576: {
					items: 2,
				},

				768: {
					items: 3,
				},
				1000: {
					items: 4,
				},
			},
		});
	}

	//=============================
	// Package Slide Carousel
	//=============================

	if ($(".package-slide").length > 0) {
		$(".package-slide").owlCarousel({
			autoplay: true,
			dots: true,
			loop: true,
			margin: 30,
			nav: true,
			navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
			responsiveBaseElement: "body",
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 3,
				},
				1200: {
					items: 3,
				},
			},
		});
	}

	//=============================
	// Trstimonial Carousel
	//=============================
	if ($(".about-testimonial, .testimonial-item").length > 0) {
		$(".about-testimonial, .testimonial-item").owlCarousel({
			autoplay: true,
			dots: true,
			loop: true,
			margin: 30,
			nav: false,
			responsiveBaseElement: "body",
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 3,
				},
			},
		});
	}

	//=============================
	// Trstimonial Carousel
	//=============================
	if ($(".testimonial-s-feature").length > 0) {
		$(".testimonial-s-feature").owlCarousel({
			autoplay: false,
			dots: true,
			loop: true,
			margin: 30,
			nav: false,
			responsiveBaseElement: "body",
			responsive: {
				0: {
					items: 1,
				},
				767: {
					items: 2,
				},
				1000: {
					items: 2,
				},
			},
		});
	}

	//=============================
	// VPS Server Pricing Card Carousel
	//=============================

	$(window).on("load", function () {
		if ($(window).width() > 600) {
			$(".vps-pricing-card-wrapper").owlCarousel({
				autoplay: true,
				dots: false,
				loop: true,
				margin: 15,
				nav: true,
				navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
				responsiveBaseElement: "body",
				responsive: {
					0: {
						items: 1,
					},
					600: {
						items: 2,
					},
					1000: {
						items: 3,
					},
					1200: {
						items: 4,
					},
				},
			});
		}
	});

	//=============================
	// Partner Slider Carousel
	//=============================
	if ($(".partner-carousel").length > 0) {
		$(".partner-carousel").owlCarousel({
			autoplay: false,
			dots: false,
			loop: true,
			margin: 30,
			nav: false,
			responsiveBaseElement: "body",
			responsive: {
				0: {
					items: 2,
				},
				600: {
					items: 3,
				},
				1000: {
					items: 4,
				},
				1200: {
					items: 6,
				},
			},
		});
	}

	//=============================
	// Navigation Start
	//=============================

	$(".toggler-btn").click(function () {
		$("#overlay").toggleClass("open");
		$("body").toggleClass("body-overlay");
	});

	$(".close-btn").click(function () {
		$("#overlay").toggleClass("open");
		$("body").removeClass("body-overlay");
	});

	$(document).on("click", function (e) {
		var canvasMenu = $("#overlay");

		if (
			!$(".toggler-btn").is(e.target) && // if the target of the click isn't a link ...
			!canvasMenu.is(e.target) && // ... or the canvasMenu ...
			canvasMenu.has(e.target).length === 0
		) {
			// ... or a descendant of the canvasMenu
			canvasMenu.removeClass("open");
			$("body").removeClass("body-overlay");
		}
	});

	// ======================
	// DROPDOWN MENU
	// ======================

	$(".sub-menu ul").hide();
	$(".sub-menu a").click(function () {
		$(this).parent(".sub-menu").children("ul").slideToggle("100");
		$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
	});

	//=============================
	// Mini Cart Start
	//=============================
	$(".cart-btn").on("click", function (event) {
		event.preventDefault();
		$(".dropdown-cart").toggleClass("active");
	});

	$(document).on("click", function (e) {
		if ($(e.target).closest(".dropdown-cart").length === 0 && $(e.target).closest(".cart-btn").length === 0) {
			$(".dropdown-cart").removeClass("active");
		}
	});

	//=============================
	// Currency Start
	//=============================
	$(".currency-btn").on("click", function (event) {
		event.preventDefault();
		$(".dropdown-menu").toggleClass("active");
	});

	$(document).on("click", function (e) {
		if ($(e.target).closest(".dropdown-menu").length === 0 && $(e.target).closest(".currency-btn").length === 0) {
			$(".dropdown-menu").removeClass("active");
		}
	});

	// ==============================
	//  Tab Start
	// ==============================

	$("#pills-home-tab").click(function () {
		$(this).parents(".tabs-container-bg").removeClass("active");
	});
	$("#pills-profile-tab").click(function () {
		$(this).parents(".tabs-container-bg").addClass("active");
	});
})(jQuery);
