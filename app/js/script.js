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
        arrows: true,
        buttons: [
            'thumbs',
            'close'
        ],
        idleTime: false
    });

    if($('.js_phone-mask').length > 0) {
        $('.js_phone-mask').inputmask({ alias: "phoneru" });
    }

    if($('.blog__slider--wrap').length > 0 || $('.feedback__slider').length > 0) {
        $('.blog__slider--wrap').slick({
            dots: false,
            variableWidth: true,
            infinite: true,
            // autoplay: true,
            // autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        variableWidth: false,
                        slidesToShow: 2
                    }
                },

                {
                    breakpoint: 576,
                    settings: {
                        variableWidth: false,
                        slidesToShow: 1
                    }
                }
            ]
        });

        $('.feedback__slider').slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slideToScroll: 1
        })
    }

    if($('.dotdot').length > 0 || $('.dotdot-title').length > 0) {
        $('.dotdot').dotdotdot({
            height: 80
        });

        $('.dotdot-title').dotdotdot({
            ellipsis: '...',
            height: 23 * 2
        });
    }

    if($('.dottext').length > 0 || $('.blog__block-text').length > 0) {
        $('.dottext').dotdotdot({
            height: 160
        });

        $('.blog__block-text').dotdotdot({
            ellipsis: '...',
            height: 70 * 2
        });
    }

    $('.brief__form-head input').unbind().blur(function () {

        var id = $(this).attr('id');
        var val = $(this).val();

        switch (id) {
            // Проверка поля "Имя"
            case 'name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;

                if (val.length > 2 && val != '' && rv_name.test(val)) {
                    $(this).addClass('not_error');
                    $(this).css({
                        'color': '#272e34',
                        'border-color': '#165EB8'
                    })
                } else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).css({
                        'color': 'red',
                        'border-color': '#eb4534'
                    })
                }
                break;

            // Проверка phone
            case 'phone':
                var rv_phone = /^[0-9]+$/;
                if (val != '' && rv_phone.test(val)) {
                    $(this).addClass('not_error');
                    $(this).css({
                        'color': '#272e34',
                    })
                } else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).css({
                        'color': 'red',
                        'border-color': '#eb4534'
                    })
                }
                break;
        } // end switch(...)
    }); // end blur()
    /* close contacts validation*/


    $(document).on("click", ".header__nav a", function (event) {
        var href = $(this).attr('href');
        if (~href.indexOf('#')) {
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
        $('.header__mobile-btn').addClass('header__mobile-btn--active');
        $('.header__nav').slideDown().css('display', 'flex');
    });

    $(document).on('click', '.header__mobile-btn--active', function() {
        $('.header__mobile-btn').removeClass('header__mobile-btn--active');
        $('.header__nav').slideUp().css('display', 'flex');
    })

        $('.tittle .block_span_title').addClass('animated').css('opacity', '0');
        $('.tittle .block_title').addClass('animated').css('opacity', '0');

    if (window.innerWidth > 800) {
        $(window).scroll(function () {
            $('.tittle .block_span_title').each(function () {
                var imgPos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imgPos < topOfWindow + 500) {
                    $(this).addClass('fadeInLeft').css('opacity', '1');
                }
            })
        });
        $(window).scroll(function () {
            $('.tittle .block_title').each(function () {
                var imgPos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imgPos < topOfWindow + 500) {
                    $(this).addClass('fadeInRight').css('opacity', '1');
                }
            })
        });
    } else {
        $(window).scroll(function () {
            $('.tittle .block_span_title').each(function () {
                var imgPos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imgPos < topOfWindow + 400) {
                    $(this).addClass('fadeInLeft').css('opacity', '1');
                }
            })
        });
        $(window).scroll(function () {
            $('.tittle .block_title').each(function () {
                var imgPos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imgPos < topOfWindow + 400) {
                    $(this).addClass('fadeInRight').css('opacity', '1');
                }
            })
        });
    }

    // smooth scroll 
    $(".scroll").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
    });


    if($(window).width() > 992) {
        $(document).on('click', '.js_header', function () {
            $('.header__nav').slideToggle().css('display', 'flex');
            $('.header__logo, .header__callback').toggleClass('header__index-appear');
            $('.header__overlay').slideToggle(100);
        });
    };


    $(document).on('mouseenter', '.dropdown', function() {
        var submenu = $(this).find('.header__submenu');
        var headerParent = $(this).parents('.header');
        var elementsToHide = headerParent.find('.header__nav-li > a');
        var closeBtn = headerParent.find('.header__mobile-btn--active');

        if(window.innerWidth > 992) {
            submenu.slideDown(0);
            submenu.toggleClass('flex');
        }
    });

    $(document).on('mouseleave', '.dropdown', function() {
        var submenu = $(this).find('.header__submenu');
        var headerParent = $(this).parents('.header');
        var elementsToHide = headerParent.find('.header__nav-li > a');
        var closeBtn = headerParent.find('.header__mobile-btn--active');

        if(window.innerWidth > 992) {
            submenu.slideUp(0);
            submenu.toggleClass('flex');
        }

    });

    $(document).on('click', '.dropdown_mob', function () {
        var headerParent = $(this).parents('.header');
        var hiddenElements = headerParent.find('.header__nav-li > a');
        var submenu = headerParent.find('.header__submenu');
        var closeBtn = headerParent.find('.header__mobile-btn');
        var dropdownBtn = headerParent.find('.dropdown_mob');

        hiddenElements.addClass('hidden_links');
        dropdownBtn.addClass('hidden_links');
        submenu.css('display', 'flex');

        closeBtn.removeClass('header__mobile-btn--active');
        closeBtn.addClass('header__mobile-btn--submenu');
    });

    $(document).on('click', '.header__mobile-btn--submenu', function() {
        var headerParent = $(this).parents('.header');
        var hiddenElements = headerParent.find('.header__nav-li > a');
        var submenu = headerParent.find('.header__submenu');
        var dropdownBtn = headerParent.find('.dropdown_mob');

        hiddenElements.removeClass('hidden_links');
        dropdownBtn.removeClass('hidden_links');
        submenu.css('display', 'none');

        $(this).addClass('header__mobile-btn--active');
        $(this).removeClass('header__mobile-btn--submenu');
    });

    // scroll to top

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // close menu at mobile
    $(document).on('click', '.scroll', function () {
        if($(window).width < 992){
            $('.header__mobile-btn').removeClass('header__mobile-btn--active');
            $('.js_nav').slideUp().css('display', 'none');
        }
        else {
            $('.js_nav').slideUp();
            $('.header__overlay').slideUp();
        }
    });
});

var viewportWidth = document.body.clientWidth;
var gallery = document.querySelector('.portfolio__gallery');
var portfolioBrief = document.querySelector('.portfolio__brief');

function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return box.right;
}

// getCoords(portfolioBrief)
function resize() {
    if(viewportWidth > 1280) {
        gallery.style.marginLeft = Math.round(viewportWidth - getCoords(portfolioBrief)) + 'px';
    }
    else {
        gallery.style.marginLeft = '0px';
    }
}

if(gallery) {
    resize();
}

$(document).on('click', '.js_header', function () {
    var themeBody = $('.js_header');
    themeBody.toggleClass('header-wrapper-down');
    themeBody.toggleClass('header-wrapper-up');
});