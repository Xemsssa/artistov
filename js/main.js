$(document).ready(function () {
    $('.screen-1 >.owl-carousel').owlCarousel({
        // lazyLoad:true,
        items:1,
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        // margin: 10,
        dots: false,
        responsiveClass: true,
        singleItem:true,
       
    }),


    $('.owl-carousel').owlCarousel({
        // lazyLoad:true,
        // items:1,
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        // margin: 10,
        dots: false,
        responsiveClass: true,
        singleItem:true,
        responsive: {
            0: {
                items: 1,
                // nav: true,
            },
            600: {
                items: 3,
                // nav: false
            },
            1000: {
                items: 6,
                // nav: true,
                // loop: false
            }
        }
    })
});