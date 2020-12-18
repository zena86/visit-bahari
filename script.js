$(document).ready(function() {
    
    $(".burger-menu__burger").click(function(event) {
        $(".burger-menu__burger, .bottom-header__menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
    
    $('.sorting__slider').slick({
        infinite: true,
        dots: true,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,
    });
    $('.sorting__slider').slick('goTo',0);
    

    $('.place-link').on('click', function(){
        let filter = $(this).attr("value");
        let label = $("label", $(this).parent()).text();
        $('.sorting__slider').slick('slickUnfilter');
        $('.sorting__slider').slick('slickFilter', "."+filter);
        $('#sorting-search__row').val(label);
    });
    
    $('.sorting__slider').slick('slickFilter', ".papua");
    
    
    $('.comment__slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    
    $('#dropdown-country__select').ddslick({
        imagePosition:"right",
        width: "115px",
        defaultSelectedIndex: 3,
        background: "#3359ff"
    });
     
});
