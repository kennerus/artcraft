$(function () {

    /*clouds animation*/
    var x = 0;
    setInterval(function () {
        var pos = (x -= 1) + 'px 0';
        $('.cloud1').css('background-position', pos);
    }, 50);
    var y = 0;
    setInterval(function () {
        var pos = (y += 1) + 'px 0';
        $('.cloud2').css('background-position', pos);
    }, 70);

    $("[data-fancybox]").fancybox({
        arrows : true,
        buttons : [
            'thumbs',
            'close'
        ],
        idleTime: false
    });


    $('.portfolio__gallery--scroller').slick({
        dots: false,
        slidesToShow: 4,
        infinite: true,
        variableWidth: true
    });

    $('.blog__slider--wrap').slick({
        dots:false,
        variableWidth: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.brief__col input[type="text"]').unbind().blur( function(){

        var id = $(this).attr('id');
        var val = $(this).val();

        switch(id) {
            // Проверка поля "Имя"
            case 'name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;

                if (val.length > 2 && val != '' && rv_name.test(val)) {
                    $(this).addClass('not_error');
                    $(this).next('.error-box').addClass('correctly')
                        .css('color','transparent')
                        .animate({'paddingLeft':'20px'},400)
                        .animate({'paddingLeft':'10px'},400);
                    $(this).css({
                        'color': '#272e34',
                        'border-bottom-color': '#ccc'
                    })
                } else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').html('*').removeClass('correctly')
                        .css('color', 'red')
                        .animate({'paddingLeft':'20px'},400)
                        .animate({'paddingLeft':'10px'},400);
                    $(this).css({
                        'color': 'red',
                        'border-bottom-color': '#eb4534'
                    })
                }
                break;

            // Проверка email
            case 'phone':
                var rv_phone = /^[0-9]+$/;
                if (val != '' && rv_phone.test(val)) {
                    $(this).addClass('not_error');
                    $(this).next('.error-box').addClass('correctly')
                        .css('color','transparent')
                        .animate({'paddingLeft':'10px'},400)
                        .animate({'paddingLeft':'5px'},400);
                    $(this).css({
                        'color': '#272e34',
                        'border-bottom-color': '#ccc'
                    })
                } else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').html('*').removeClass('correctly')
                        .css('color', 'red')
                        .animate({'paddingLeft':'20px'},400)
                        .animate({'paddingLeft':'10px'},400);
                    $(this).css({
                        'color': 'red',
                        'border-bottom-color': '#eb4534'
                    })
                }
                break;
        } // end switch(...)
    }); // end blur()
    /* close contacts validation*/


    $(document).on("click", ".header__nav a", function() {
        var href = $(this).attr('href');
        if(~href.indexOf('#')) {
            event.preventDefault();
            var t = $(this).attr("href"),
                e = $(t),
                a = e.offset().top;
            return $("html,body").animate({
                scrollTop: a
            }, 1e3),
                !1
        }
    });



    $(document).on('click', '.header__mobile-btn', function () {
        $('.header__mobile-btn').toggleClass('header__mobile-btn--active');
        $('.header__nav').slideToggle().css('display', 'flex');
    });


    $('.tittle span').addClass('animated').css('opacity', '0');
    $('.tittle h2').addClass('animated').css('opacity', '0');

    if(window.innerWidth > 800) {
        $(window).scroll(function () {
            $('.tittle span').each(function () {
                var imgPos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if(imgPos < topOfWindow + 500) {
                    $(this).addClass('fadeInLeft').css('opacity', '1');
                }
            })
        });
        $(window).scroll(function () {
            $('.tittle h2').each(function () {
                var imgPos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if(imgPos < topOfWindow + 500) {
                    $(this).addClass('fadeInRight').css('opacity', '1');
                }
            })
        });
    } else {
        $(window).scroll(function () {
            $('.tittle span').each(function () {
                var imgPos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if(imgPos < topOfWindow + 400) {
                    $(this).addClass('fadeInLeft').css('opacity', '1');
                }
            })
        });
        $(window).scroll(function () {
            $('.tittle h2').each(function () {
                var imgPos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if(imgPos < topOfWindow + 400) {
                    $(this).addClass('fadeInRight').css('opacity', '1');
                }
            })
        });
    }

});











