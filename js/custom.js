$(function(){
    //banner slider;
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
    });

    //about video pop up;
    $('.venobox').venobox({
        closeBackground: '#e23e38',
    });

    //team slider 
    $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    });
});