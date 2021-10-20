$(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > window.innerHeight * 0.99) {
            $(".header__top").fadeIn();
            $(".header__top").addClass('fixed')
        } else {
            $(".header__top").removeClass('fixed')
        }
    });

    $("nav a, .header__icon, .scroll-top ").on("click", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var sc = $(this).attr("href"),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            dn = $(sc).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('html, body').animate({ scrollTop: dn }, 1500);
    });


    $('.blog__inner').slick({
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 576,
            settings: {
                dots: false,
                autoplay: true,
                autoplaySpeed: 2000
            }
        }, ]
    });
    $('.menu__btn, .menu a').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');

    });

    var mixer = mixitup('.portfolio__content');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('.scroll-top').show();
        } else {
            $('.scroll-top').hide();
        }
    });

    // $('.scroll-top').click(function() {
    //     $('html, body').animate({ scrollTop: 0 }, 600);
    //     return false;
    // });

});