"use strict";

$(document).ready(function () {
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();

    if (scroll > 50) {
      $(".nav-menu").addClass("nav-menu-fixed");
      $(".topheader").addClass("topheader-fixed");
    } else {
      $(".nav-menu").removeClass("nav-menu-fixed");
      $(".topheader").removeClass("topheader-fixed");
    }

    var footerHeight = $('footer').outerHeight();
    var pixelesArriba = footerHeight + $(window).scrollTop();

    if ($(window).scrollTop() + $(window).height() + pixelesArriba >= $(document).height()) {
      // Si estamos al final de la página
      $('.follow-btn').fadeOut();
    } else {
      $('.follow-btn').fadeIn();
    }
  });
  $(".closeMenu").on("click", function () {
    $(".mysidebar").removeClass("openSide");
  });
  $(".btn-menu").on("click", function () {
    $(".mysidebar").addClass("openSide");
  });
  var containerLoader = $('.container-loader');
  var loader = $('.loader');
  var loaderMap = $('.loader-map');
  var scroll = $(window).scrollTop();

  if (loader) {
    containerLoader.css({
      top: scroll
    });
    loader.css({
      top: "calc(" + scroll + "px" + " + 50vh)"
    });
  }

  $(window).on("load", function () {
    if (loader) {
      containerLoader.fadeIn(1000, function () {
        containerLoader.remove();
      });
    }

    if (loaderMap) {
      loaderMap.remove();
    }

    document.body.style.overflowY = 'visible';
  });
});