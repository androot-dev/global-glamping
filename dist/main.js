
$(document).ready(function() {
    $(window).on('scroll', function () {

        let scroll = $(window).scrollTop();
        
        if (scroll > 50) {
            $(".nav-menu").addClass("nav-menu-fixed");
            $(".topheader").addClass("topheader-fixed");
        } else {
            $(".nav-menu").removeClass("nav-menu-fixed");
            $(".topheader").removeClass("topheader-fixed");
        }
        let footerHeight = $('footer').outerHeight();
        var pixelesArriba = footerHeight;
        if (($(window).scrollTop() + $(window).height() + pixelesArriba ) >= $(document).height()) { // Si estamos al final de la página
            $('.follow-btn').stop(true).animate({ // Escondemos el elemento
                opacity: 0
            }, 250);
        } else {
            $('.follow-btn').stop(true).animate({ // Mostramos el elemento
                opacity: 1
            }, 200);
}
      });
    });

    
    
 

 
    $(`.closeMenu`).on("click", function () {
        $(".mysidebar").removeClass("openSide");
    });
    $(`.btn-menu`).on("click", function () {
        $(".mysidebar").addClass("openSide");
    });
    $(".services-container .owl-carousel").owlCarousel({
        items: 3,
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
        center: true,
    });    