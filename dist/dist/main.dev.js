"use strict";

$(document).ready(function () {
  $(document).on('scroll', function () {
    var scroll = $(document).scrollTop();

    if (scroll > 50) {
      $(".nav-menu").addClass("nav-menu-fixed");
      $(".topheader").addClass("topheader-fixed");
    } else {
      $(".nav-menu").removeClass("nav-menu-fixed");
      $(".topheader").removeClass("topheader-fixed");
    }
  });
  $(".closeMenu").on("click", function () {
    $(".mysidebar").removeClass("openSide");
  });
  $(".btn-menu").on("click", function () {
    $(".mysidebar").addClass("openSide");
  });
  $(".services-container .owl-carousel").owlCarousel({
    items: 3,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    center: true
  });
});