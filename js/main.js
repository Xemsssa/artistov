$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        // lazyLoad:true,
        items:1,
        autoplay: true,
        smartSpeed: 15000,
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 6,
                nav: true,
                loop: false
            }
        }
    })
});