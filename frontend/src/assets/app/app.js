let WOW
let $skrollr
if (typeof window !== 'undefined') {
  const $ = require('jquery')
  window.$ = $
  window.jQuery = $
  WOW = require('wowjs')
  $skrollr = require('skrollr')
  require('owl.carousel/dist/owl.carousel')
  require('jarallax/dist/jarallax.min')
  require('magnific-popup/dist/jquery.magnific-popup.min')
}

export const sofbox = {
  index () {
    this.loaderInit()
    this.onScroll()
    this.toggleDropdown()
    this.skrollr()
    this.jarallax()
    this.accordion()
    this.progressBar()
    this.wowInit()
    this.owlCarousel()
    // this.magnific()
  },
  loaderInit () {
    // eslint-disable-next-line no-undef
    $('#load').fadeOut()
    // eslint-disable-next-line no-undef
    $('#loading').delay(1000).fadeOut('slow')
  },

  onScroll () {
    // eslint-disable-next-line no-undef
    $(window).on('scroll', function () {
      // eslint-disable-next-line no-undef
      if ($(this).scrollTop() > 100) {
        // eslint-disable-next-line no-undef
        $('header').addClass('menu-sticky')
      } else {
        // eslint-disable-next-line no-undef
        $('header').removeClass('menu-sticky')
      }
    })
    // eslint-disable-next-line no-undef
    $('#back-to-top').fadeOut()
    // eslint-disable-next-line no-undef
    $(window).on('scroll', function () {
      // eslint-disable-next-line no-undef
      if ($(this).scrollTop() > 250) {
        // eslint-disable-next-line no-undef
        $('#back-to-top').fadeIn(1400)
      } else {
        // eslint-disable-next-line no-undef
        $('#back-to-top').fadeOut(400)
      }
    })
    // eslint-disable-next-line no-undef
    $('.nav-link').click(function (event) {
      event.preventDefault()
    })
    // eslint-disable-next-line no-undef
    $('[data-spy="scroll"]').each(function () {
      // eslint-disable-next-line no-undef
      $(this).scrollspy('refresh')
    })
  },

  wowInit () {
    const elementExist = this.checkElement('class', 'wow')

    if (elementExist) {
      // eslint-disable-next-line no-undef
      new WOW.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        live: false
      }).init()
    }
  },

  toggleDropdown () {
    // eslint-disable-next-line no-undef
    $('#main-header .menu-item .toggledrop').off('click')
    // eslint-disable-next-line no-undef
    if ($(window).width() < 992) {
      // eslint-disable-next-line no-undef
      $('#main-header .menu-item .toggledrop').on('click', function (e) {
        e.preventDefault()
        // eslint-disable-next-line no-undef
        $(this).closest('li').find('.sub-menu').toggle('d-block')
      })
    }
    // eslint-disable-next-line no-undef
    $(window).on('resize', function () {
      'use strict'
      // eslint-disable-next-line no-undef
      $('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function () {
        window.$(this).closest('li').find('.sub-menu').toggle('d-block')
      })
      window.$('#main-header .menu-item .toggledrop').off('click')
      if (window.$(window).width() < 992) {
        // eslint-disable-next-line no-undef
        $('#main-header .menu-item .toggledrop').on('click', function (e) {
          e.preventDefault()
          // eslint-disable-next-line no-undef
          $(this).closest('li').find('.sub-menu').toggle('d-block')
        })
      }
    })
  },

  skrollr () {
    // const $skrollr = window.skrollr
    $skrollr.init().destroy()
    $skrollr.init({
      forceHeight: false,
      easings: {
        easeOutBack (p, s) {
          s = 1.70158
          p = p - 1
          return (p * p * ((s + 1) * p + s) + 1)
        }
      },
      mobileCheck () {
        return false
      }
    })
  },

  checkElement (type, element) {
    let found = false
    let elements
    switch (type) {
      case 'class':
        elements = document.getElementsByClassName(element)

        if (elements !== undefined && elements !== null && elements.length > 0) {
          found = true
        }
        break

      case 'id':
        elements = document.getElementById(element)

        if (elements !== undefined && elements !== null) {
          found = true
        }
        break
    }

    return found
  },
  jarallax () {
    // eslint-disable-next-line no-undef
    jarallax(document.querySelectorAll('[data-parallax="true"]'), {
      speed: 0.6
    })
  },
  accordion () {
    // eslint-disable-next-line no-undef
    $('.iq-accordion .iq-accordion .accordion-details').hide()
    // eslint-disable-next-line no-undef
    $('.iq-accordion .iq-accordion:first').addClass('accordion-active').children().slideDown('slow')
    // eslint-disable-next-line no-undef
    $('.iq-accordion .iq-accordion').on('click', function () {
      // eslint-disable-next-line no-undef
      if ($(this).children('div').is(':hidden')) {
        // eslint-disable-next-line no-undef
        $('.iq-accordion .iq-accordion').removeClass('accordion-active').children('div').slideUp('slow')
        // eslint-disable-next-line no-undef
        $(this).toggleClass('accordion-active').children('div').slideDown('slow')
      }
    })
  },
  progressBar () {
    const elementExist = this.checkElement('class', 'iq-progress-bar')
    if (elementExist) {
      // eslint-disable-next-line no-undef
      $('.iq-progress-bar > span').each(function () {
        // eslint-disable-next-line no-undef
        const $this = $(this)
        const width = $this.data('percent')
        $this.css({
          transition: 'width 2s'
        })
        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function () {
          // tslint:disable-next-line:only-arrow-functions
          $this.appear(function () {
            $this.css('width', width + '%')
          })
        }, 500)
      })
    }
  },
  magnific () {
    // eslint-disable-next-line no-undef
    $('.popup-gallery').magnificPopup({
      delegate: 'a.popup-img',
      tLoading: 'Loading image #%curr%...',
      type: 'image',
      mainClass: 'mfp-img-mobile',
      gallery: {
        navigateByImgClick: true,
        enabled: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      }
    })

    // eslint-disable-next-line no-undef
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      type: 'iframe',
      disableOn: 700,
      mainClass: 'mfp-fade',
      preloader: false,
      removalDelay: 160,
      fixedContentPos: false
    })
  },
  owlCarousel () {
    const elementExist = this.checkElement('class', 'owl-carousel')
    if (elementExist) {
      // eslint-disable-next-line no-undef
      $('.owl-carousel').each(function () {
        // eslint-disable-next-line no-undef
        const $carousel = $(this)
        $carousel.owlCarousel({
          items: $carousel.data('items'),
          loop: $carousel.data('loop'),
          margin: $carousel.data('margin'),
          nav: $carousel.data('nav'),
          dots: $carousel.data('dots'),
          autoplay: $carousel.data('autoplay'),
          autoplayTimeout: $carousel.data('autoplay-timeout'),
          navText: ['<i class="fas fa-angle-left fa-2x"></i>', '<i class="fas fa-angle-right fa-2x"></i>'],
          responsiveClass: true,
          responsive: {
            // breakpoint from 0 up
            0: {
              items: $carousel.data('items-mobile-sm')
            },
            // breakpoint from 480 up
            480: {
              items: $carousel.data('items-mobile')
            },
            // breakpoint from 786 up
            786: {
              items: $carousel.data('items-tab')
            },
            // breakpoint from 1023 up
            1023: {
              items: $carousel.data('items-laptop')
            },
            1199: {
              items: $carousel.data('items')
            }
          }
        })
      })
    }
  }
}
