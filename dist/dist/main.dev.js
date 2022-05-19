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
    var pixelesArriba = footerHeight;

    if ($(window).scrollTop() + $(window).height() + pixelesArriba >= $(document).height()) {
      // Si estamos al final de la página
      $('.follow-btn').stop(true).animate({
        // Escondemos el elemento
        opacity: 0
      }, 200, function () {
        $(this).css('display', 'none'); // Lo ocultamos
      });
    } else {
      $('.follow-btn').stop(true).animate({
        // Mostramos el elemento
        opacity: 1
      }, 200, function () {
        $(this).css('display', 'block'); // Lo mostramos
      });
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
      top: "calc(" + scroll + "px" + " + " + "50vh - " + "50px" + ")"
    });
  }

  $(window).on("pageshow", function () {
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