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

  if ($('.js_phone-mask').length > 0) {
    $('.js_phone-mask').inputmask({alias: "phoneru"});
  }

  if($('.portfolio__slider').length > 0) {
      $('.portfolio__slider').slick({
          arrows: false,
          dots: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
              {
                  breakpoint: 1400,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3
                  }
              },
              {
                  breakpoint: 1200,
                  settings: {
                      slidesToShow: 4,
                      slidesToScroll: 4
                  }
              },
              {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3
                  }
              },
              {
                  breakpoint: 660,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                  }
              },
              {
                  breakpoint: 400,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }
          ]

      });
  }

  if ($('.blog__slider--wrap').length > 0 || $('.feedback__slider').length > 0) {
    $('.blog__slider--wrap').slick({
      dots: true,
      variableWidth: true,
      infinite: true,
      prevArrow: '<button class="prevArrow-blog" type="button" ><svg class="prevArrow-blogsvg" version="1.1" id="arrow-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 38 28" style="enable-background:new 0 0 38 28;" xml:space="preserve">\n' +
        '<path  class="prevArrow-blogfill" d="M0.5,12.7c-0.7,0.7-0.7,1.9,0,2.7l11.3,12.1c0.3,0.4,0.8,0.6,1.2,0.6c0.5,0,0.9-0.2,1.2-0.6c0.7-0.7,0.7-1.9,0-2.7L6,15.9\n' +
        '\th30.2c1,0,1.8-0.8,1.8-1.9c0-1-0.8-1.9-1.8-1.9H6l8.3-8.9c0.7-0.7,0.7-1.9,0-2.7c-0.7-0.7-1.8-0.7-2.5,0L0.5,12.7L0.5,12.7z\n' +
        '\t M0.5,12.7"/>\n' +
        '</svg></button>',
      nextArrow: '<button class="nextArrow-blog" type="button" ><svg class="nextArrow-blogsvg" version="1.1" id="arrow-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 38 28" style="enable-background:new 0 0 38 28;" xml:space="preserve">\n' +
        '<path  class="nextArrow-blogfill" d="M37.5,12.7L26.2,0.6c-0.7-0.7-1.8-0.7-2.5,0c-0.7,0.7-0.7,1.9,0,2.7l8.3,8.9H1.8C0.8,12.1,0,13,0,14c0,1,0.8,1.9,1.8,1.9H32\n' +
        '\tl-8.3,8.9c-0.7,0.7-0.7,1.9,0,2.7c0.3,0.4,0.8,0.6,1.2,0.6c0.5,0,0.9-0.2,1.2-0.6l11.3-12.1C38.2,14.6,38.2,13.4,37.5,12.7\n' +
        '\tL37.5,12.7z M37.5,12.7"/>\n' +
        '</svg></button>',
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            variableWidth: true,
            slidesToShow: 1
          }
        },

        {
          breakpoint: 768,
          settings: {
            variableWidth: true,
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



  // if (typeof dotdotdot !== "undefined") {
    if ($('.dotdot').length > 0 || $('.dotdot-title').length > 0) {
      $('.dotdot').dotdotdot({
        height: 80
      });

      $('.dotdot-title').dotdotdot({
        ellipsis: '...',
        height: 23 * 2
      });
    }


    if ($('.dottext').length > 0 || $('.blog__block-text').length > 0) {
      $('.dottext').dotdotdot({
        height: 160
      });

      $('.blog__block-text').dotdotdot({
        ellipsis: '...',
        height: 70 * 2
      });
    }

    $(".dotportfolio").dotdotdot({
      ellipsis: "\u2026 ",
      height: 50,
    });
  // }

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
    var body = $('body');

    if ($(".header__mobile-btn").hasClass("header__mobile-btn--active")) {
      body.addClass(' bodyOverflow');
    } else if ($(".header__mobile-btn").hasClass("header__mobile-btn--submenu")) {
      body.addClass(' bodyOverflow');
    } else {
      body.removeClass(' bodyOverflow');
    }
  });

  $(document).on('click', '.header__mobile-btn--active', function () {
    $('.header__mobile-btn').removeClass('header__mobile-btn--active');
    $('.header__nav').slideUp().css('display', 'flex');
    var body = $('body');
    if ($(".header__mobile-btn").hasClass("header__mobile-btn--active")) {
      body.addClass(' bodyOverflow');
    } else if ($(".header__mobile-btn").hasClass("header__mobile-btn--submenu")) {
      body.addClass(' bodyOverflow');
    } else {
      body.removeClass(' bodyOverflow');
    }
  });

  if (window.innerWidth > 992) {
    $('.tittle .block_span_title').addClass('animated').css('opacity', '0');
    $('.tittle .block_title').addClass('animated').css('opacity', '0');

    // hover menu elements
    $('.header__nav-container li a').hover(
      function () {
        $(this).parent().addClass('menu-item_hovered');
      },
      function () {
        $(this).parent().removeClass('menu-item_hovered');
      }
    );
  }

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
  $(".portfolio-scroll").on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
  });

  $(document).on('mouseenter', '.dropdown', function () {
    var submenu = $(this).find('.header__submenu');
    var headerParent = $(this).parents('.header');
    var elementsToHide = headerParent.find('.header__nav-li > a');
    var closeBtn = headerParent.find('.header__mobile-btn--active');

    if (window.innerWidth > 1200) {
      submenu.slideDown(0);
      submenu.toggleClass('flex');
    }
  });

  $(document).on('mouseleave', '.dropdown', function () {
    var submenu = $(this).find('.header__submenu');
    var headerParent = $(this).parents('.header');
    var elementsToHide = headerParent.find('.header__nav-li > a');
    var closeBtn = headerParent.find('.header__mobile-btn--active');

    if (window.innerWidth > 1200) {
      submenu.slideUp(0);
      submenu.toggleClass('flex');
    }

  });

  $(document).on('click', '.dropdown_mob', function () {
    var headerParent = $(this).parents('.header');
    var hiddenElements = headerParent.find('.header__nav-li > a');
    var submenu = headerParent.find('.header__submenu');
    var headLogo = headerParent.find('.header__logo');
    var headerCallback = headerParent.find('.header__callback');
    var closeBtn = headerParent.find('.header__mobile-btn');
    var dropdownBtn = headerParent.find('.dropdown_mob');

    hiddenElements.addClass('hidden_links');
    dropdownBtn.addClass('hidden_links');
    headLogo.addClass('hidden_links');
    headerCallback.addClass('hidden_links');
    submenu.css('display', 'flex');

    closeBtn.removeClass('header__mobile-btn--active');
    closeBtn.addClass('header__mobile-btn--submenu');
  });

  $(document).on('click', '.header__mobile-btn--submenu', function () {
    var headerParent = $(this).parents('.header');
    var hiddenElements = headerParent.find('.header__nav-li > a');
    var submenu = headerParent.find('.header__submenu');
    var headLogo = headerParent.find('.header__logo');
    var headerCallback = headerParent.find('.header__callback');
    var dropdownBtn = headerParent.find('.dropdown_mob');

    hiddenElements.removeClass('hidden_links');
    dropdownBtn.removeClass('hidden_links');
    headLogo.removeClass('hidden_links');
    headerCallback.removeClass('hidden_links');
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

  // menu toggle
    var themeBody = $('.js_header');
    var overlay = $('.header__overlay');
    var headNav = $('.header__nav');

    $(window).scroll(function () {
        if ($('.header__overlay').css('display') == 'none'
            && window.innerWidth > 1200
            && !themeBody.hasClass('done')) {
            $(document).on('click', '.js-header-close', function () {
                themeBody.addClass('done');
            });
            if ($(this).scrollTop() > $(window).height() && themeBody.hasClass('header-wrapper-active')) {
                headNav.slideUp().css('display', 'none');
                themeBody.removeClass('header-wrapper-up header-wrapper-active');
                $('.js-header-close').addClass('header-open');
            }
            else if (!themeBody.hasClass('header-wrapper-active') && $(this).scrollTop() < $(window).height()) {
                headNav.slideUp().css('display', 'flex');
                themeBody.addClass('header-wrapper-up header-wrapper-active');
                $('.js-header-close').removeClass('header-open');
            }
        }
    });

  $(document).on('click', '.js-header-close', function () {
    headerToggle();
  });

  function headerToggle() {
      $('.js-header-close').toggleClass('header-open');
      if ($(".header__mobile-btn").hasClass("header__mobile-btn--active")) {
          overlay.fadeIn("slow");
      } else if ($(".header__mobile-btn").hasClass("header__mobile-btn--submenu")) {

      } else {
          overlay.fadeOut("slow");
      }
      if (window.innerWidth > 1200) {
          headNav.slideToggle().css('display', 'flex');
          themeBody.toggleClass(' header-wrapper-active');
          if ($(".js_header").hasClass("header-wrapper-active")) {
              themeBody.toggleClass('header-wrapper-down');
              themeBody.toggleClass('header-wrapper-up');
              overlay.fadeIn("slow");
          }
      }
  }

  $(document).on('click', function (e) {
    if ($('.header__overlay').is(e.target)) {
      var themeBody = $('.js_header');
      var overlay = $('.header__overlay');
      var headNav = $('.header__nav');
      headNav.slideToggle().css('display', 'flex');
      themeBody.removeClass(' header-wrapper-active');
      themeBody.toggleClass('header-wrapper-down');
      themeBody.toggleClass('header-wrapper-up');
      overlay.fadeOut("slow");
    }
  });

  // close menu
  $(document).on('click', '.scroll', function (event) {
    event.preventDefault();
    var themeBody = $('.js_header');
    var overlay = $('.header__overlay');
    var headNav = $('.header__nav');
    themeBody.toggleClass('header-wrapper-down');
    themeBody.toggleClass('header-wrapper-up');
    if ($(window).width < 992) {
      $('.header__mobile-btn').removeClass('header__mobile-btn--active');
    }
    headNav.slideToggle().css('display', 'flex');
    themeBody.removeClass(' header-wrapper-active');
    overlay.fadeOut("slow");
    $('.header__mobile-btn').removeClass('header__mobile-btn--active');
  });
});

//sidebar for portfolio and single blog
window.onload = function () {
  if(window.innerWidth > 992 && document.getElementById('sidebar')) {
    var stickySidebar = new StickySidebar('#sidebar', {
      topSpacing: 20,
      bottomSpacing: 20,
      containerSelector: '.main',
      innerWrapperSelector: '.sidebar__inner'
    });
  }
};

var viewportWidth = document.body.clientWidth;
var gallery = document.querySelector('.portfolio__gallery');
var portfolioBrief = document.querySelector('.portfolio__brief');

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return box.right;
}

// getCoords(portfolioBrief)
function resize() {
  if (viewportWidth > 1280) {
    gallery.style.marginLeft = Math.round(viewportWidth - getCoords(portfolioBrief)) + 'px';
  }
  else {
    gallery.style.marginLeft = '0px';
  }
}

if (gallery) {
  resize();
}

$('.btn_services-mob').next().hide();
$('.btn_services-mob').click(function () {
  if ($(this).hasClass("open-services-mob")) {
    $('.btn_services-mob').removeClass('open-services-mob').next().slideUp();
  } else {
    $('.btn_services-mob.open-services-mob').not(this).removeClass('open-services-mob').next().slideUp();
    $(this).addClass(' open-services-mob').next().slideToggle();
  }
});


//brief massage
// $(document).on('click', '.service__form-submit', function () {
//   $('.sk-fading-circle').addClass('sk-fading-circle-active');
// });
//
// $(document).on('click', '.service__form-submit', function () {
//   setTimeout(function () {
//     $('.brief-massage').addClass('brief-massage-active');
//     $('.sk-fading-circle').removeClass('sk-fading-circle-active');
//   }, 2000);
// });
//
// $(document).on('click', '.brief-massage-close', function () {
//   setTimeout(function () {
//     $('.brief-massage').removeClass('brief-massage-active');
//   }, 500);
// });


// phone massage

$('.header__callback_bottom').fancybox({
  // Options will go here
});

$(document).on('click', '.js_phoneMassage', function () {
  $('.phone-brief-overlay').addClass('phone-massage-active');
  $('body').css('overflow', 'hidden');
  $.fancybox.close();
});

$(document).on('click', '.phone-massage-close', function () {
  $('.phone-brief-overlay').removeClass('phone-massage-active');
  $('body').css('overflow', 'visible');
});

$(document).on('click', '.phone-brief-overlay', function () {
  $('.phone-brief-overlay').removeClass('phone-massage-active');
  $('body').css('overflow', 'visible');
});

$(document).on('click', '.js_phoneMassage', function () {
  $('.phone-massage-submite .sk-fading-circle').addClass('sk-fading-circle-active');
});

$(document).on('click', '.more_btn', function () {
  $('.more_btn .sk-fading-circle').addClass('sk-fading-circle-active');
});

$(document).ready(function() {
    if (document.querySelector('.js-tab')) {
        var tabs = document.querySelectorAll('.js-tab');
        for (var i = 0; i < tabs.length; i++) {
            var tab = tabs[i];
            var parent = tab.closest('.tabs');
            tab.onclick = function(e) {
                e.preventDefault();
                    var active = parent.querySelector('.tab-active');
                    if (this !== active) {
                        var href= this.getAttribute('href');
                        var content = document.querySelector(href);
                        var activeContent = document.querySelector('.tab-content-active');
                        activeContent.classList.remove('tab-content-active');
                        content.classList.add('tab-content-active');
                        active.classList.remove('tab-active');
                        this.classList.add('tab-active');
                    }
              }
        }
    }

    var height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    if (document.querySelector('.steps__scale')) {
        var count = true;
        var scale = document.querySelector('.steps__scale');
        var stepsItems = document.querySelectorAll('.steps__item');
        var scaleNumber = document.querySelector('.steps__scale-number');
        var scaleLine = document.querySelector('.steps__scale-line');
        var stepsWrap = document.querySelector('.steps__items');
        scaleLine.style.height =  stepsWrap.clientHeight - stepsItems[stepsItems.length - 1].clientHeight + 15 + 'px';
        document.addEventListener('scroll', function() {
            var scalePos = scale.getBoundingClientRect();
            if (height - scalePos.top > 0 && scalePos.bottom > 0) {
                if (count) {
                    var i = 1;
                    var stepsInterval = setInterval(function() {
                        var stepsItem = stepsItems[i];
                        scaleNumber.style.top = stepsItem.offsetTop + 15 + 'px';
                        if (i < 9) {
                            scaleNumber.innerHTML = '0' + (i + 1);
                        }
                        else {
                            scaleNumber.innerHTML = i + 1;
                        }
                        i++;
                        if (i >= stepsItems.length) {
                            clearInterval(stepsInterval);
                        }
                    }, 1500);
                    count = false;
                }
            }
        });
    }
    if (document.querySelector('.suggestion__clock')) {
        var timers = document.querySelectorAll('.suggestion__clock');
        for (var i = 0; i < timers.length; i++) {
            var timer = timers[i];
            var time = timer.dataset.time;
            var now = new Date();
            var date = new Date(time);
            var rest = (date.getTime() - now.getTime()) / 1000;
            rest = rest > 0 ? rest : 0;
            $(timer).FlipClock(rest, {
                countdown: true,
                clockFace: 'DailyCounter'
            });
        }
    }
    if ($('.accordion').length > 0) {
        $('.accordion__title').on('click', function() {
          var parent = $(this).parents('.accordion');
          var item = $(this).parents('.accordion__item');
          var content = item.children('.accordion__content');
          item.toggleClass('accordion-active');
          parent.find('.accordion__item').not(item).removeClass('accordion-active');
          parent.find('.accordion__content').not(content).slideUp();
          content.slideToggle();
        });
    }

    if ($('.cases__slider').length > 0) {
        var svgDo = true;
        $('.cases__slider').on('init', function() {
            if (this.querySelector('.slick-current .svg-lines')) {
                var slider = this;
                document.addEventListener('scroll', function() {
                    var svg = slider.querySelector('.slick-current .svg-lines');
                    var svgPos = svg.getBoundingClientRect();
                    if (height - svgPos.top > 0 && svgPos.bottom > 0) {
                        if (svgDo) {
                            var allCircles = svg.getElementsByTagName('circle');
                            var allLines = svg.getElementsByTagName('line');
                            svgLinesMove(allCircles, allLines);
                            svgDo = false;
                        }
                    }
                });
            }
        }).on('afterChange', function() {
            if (this.querySelector('.slick-current .svg-lines')) {
                var svg = this.querySelector('.slick-current .svg-lines');
                var allCircles = svg.getElementsByTagName('circle');
                var allLines = svg.getElementsByTagName('line');
                svgLinesMove(allCircles, allLines);
                var slides = this.querySelectorAll('.slick-slide');
                for (var i = 0; i < slides.length; i++) {
                    var slide = slides[i];
                    if (!slide.classList.contains('slick-current') && slide.querySelector('.svg-lines')) {
                        var secondSvg = slide.querySelector('.svg-lines');
                        var secondAllCircles = secondSvg.getElementsByTagName('circle');
                        var secondAllLines = secondSvg.getElementsByTagName('line');
                        for (var j = 0; j < secondAllCircles.length; j++) {
                            var item = secondAllCircles[j];
                            item.setAttribute('cy', 10.5);
                        }
                        for (var j = 0; j < secondAllLines.length; j++) {
                            var item = secondAllLines[j];
                            item.setAttribute('y1', 11);
                            item.setAttribute('y2', 11);
                        }
                    }
                }
            }
        }).slick({
            prevArrow: '<button class="cases__prev" type="button" ><svg class="prevArrow-blogsvg" version="1.1" id="arrow-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
                '\t viewBox="0 0 38 28" style="enable-background:new 0 0 38 28;" xml:space="preserve">\n' +
                '<path  class="prevArrow-blogfill" d="M0.5,12.7c-0.7,0.7-0.7,1.9,0,2.7l11.3,12.1c0.3,0.4,0.8,0.6,1.2,0.6c0.5,0,0.9-0.2,1.2-0.6c0.7-0.7,0.7-1.9,0-2.7L6,15.9\n' +
                '\th30.2c1,0,1.8-0.8,1.8-1.9c0-1-0.8-1.9-1.8-1.9H6l8.3-8.9c0.7-0.7,0.7-1.9,0-2.7c-0.7-0.7-1.8-0.7-2.5,0L0.5,12.7L0.5,12.7z\n' +
                '\t M0.5,12.7"/>\n' +
                '</svg></button>',
            nextArrow: '<button class="cases__next" type="button" ><svg class="nextArrow-blogsvg" version="1.1" id="arrow-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
                '\t viewBox="0 0 38 28" style="enable-background:new 0 0 38 28;" xml:space="preserve">\n' +
                '<path  class="nextArrow-blogfill" d="M37.5,12.7L26.2,0.6c-0.7-0.7-1.8-0.7-2.5,0c-0.7,0.7-0.7,1.9,0,2.7l8.3,8.9H1.8C0.8,12.1,0,13,0,14c0,1,0.8,1.9,1.8,1.9H32\n' +
                '\tl-8.3,8.9c-0.7,0.7-0.7,1.9,0,2.7c0.3,0.4,0.8,0.6,1.2,0.6c0.5,0,0.9-0.2,1.2-0.6l11.3-12.1C38.2,14.6,38.2,13.4,37.5,12.7\n' +
                '\tL37.5,12.7z M37.5,12.7"/>\n' +
                '</svg></button>',
        });
    }

    var destArray = [15,115,77,220,185,313,288, 356];

    function svgLinesMove(allCircles, allLines) {

        TweenMax.set(allCircles, {
            attr:{fill:'#954CE9', r:5},
            transformOrigin:'50% 50%',
            scale:0
        });
        TweenMax.set([allLines], {
            attr:{stroke:'#18B5DD'},
            drawSVG:'100% 100%',
            strokeWidth:2
        });

        TweenMax.set([allCircles, allLines], {
            y:'400'
        });

        TweenMax.set('svg', {
            alpha:1
        });
        for(var i = 0; i < allCircles.length; i++){
            TweenMax.to(allCircles[i], 2, {
                attr:{cy:'-=' + destArray[i]},
                onUpdate:moveLines,
                onUpdateParams:[i, allCircles, allLines],
                delay:i/5,
                ease:Power4.easeInOut
            });
            if(allLines[i]){

                TweenMax.to(allLines[i], 1, {
                    drawSVG:'400',
                    delay:i/5,
                    ease:Power4.easeInOut
                })
            }

            TweenMax.to(allCircles[i], 1, {
                scale:1,
                delay:i/5,
                ease:Power4.easeInOut
            })

        }
    }
    function moveLines(i, allCircles, allLines){

        if(allLines[i]){

            TweenMax.set(allLines[i], {
                attr:{
                    'x2':allCircles[i].getAttribute('cx'), 'y2':allCircles[i].getAttribute('cy')
                }
            });
            TweenMax.set(allLines[i], {
                attr:{
                    'x1':allCircles[i+1].getAttribute('cx'), 'y1':allCircles[i+1].getAttribute('cy')
                }
            });
        }
    }
});