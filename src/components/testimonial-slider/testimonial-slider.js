$(function () {
    $('.testimonial-slider-wrapper .customer-slider-container').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows : false,
        responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        ]
    });
});