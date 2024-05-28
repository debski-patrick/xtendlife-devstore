/******/ (() => { // webpackBootstrap
var _webpack_exports_ = {};
window.PXUTheme.jsFeaturedCollection = {
  init: function($section) {

    // Add settings from schema to current object
    window.PXUTheme.jsFeaturedCollection = $.extend(this, window.PXUTheme.getSectionData($section));

    // if(this.enable_masonry_layout && !this.align_height && this.collection_style == 'grid') {
    //   window.PXUTheme.applyMasonry();
    // }

    // if(this.collection_style == 'slider') {
    //   if($(window).width() < 767)
    //     {
    //       this.createSlider();
    //     }
    // }

    function updateCollectionStyle() {
        if (window.PXUTheme.jsFeaturedCollection.enable_masonry_layout && !window.PXUTheme.jsFeaturedCollection.align_height) {
            if (window.PXUTheme.jsFeaturedCollection.collection_style === 'grid') {
                window.PXUTheme.applyMasonry();
            }
        }

        if (window.PXUTheme.jsFeaturedCollection.collection_style === 'slider') {
            if ($(window).width() < 1024) {
                window.PXUTheme.jsFeaturedCollection.createSlider();
            }
        }
    }

    // Call the function on page load
    updateCollectionStyle();

    // Add a resize event listener to update the collection style on window resize
    $(window).on('resize', function () {
        updateCollectionStyle();
    });

  },
  createSlider: function() {
   let featuredCollectionSlider = $('.featured-collection.layout--slider .slider-gallery');

    const slideData = {
      products_per_slide: 1,
      products_available: this.products_available,
      products_limit: this.products_limit,
      cellAlign: "left",
      wrapAround: true
    }

    $(featuredCollectionSlider).flickity({
      lazyLoad: 2,
      freeScroll: true,
      imagesLoaded: true,
      draggable: true,
      cellAlign: 'center',
      wrapAround: slideData.wrapAround,
      pageDots: false,
      contain: true,
      prevNextButtons: true,
      initialIndex: 0,
      arrowShape: arrowShape,
      on: {
        ready: function() {
          // Resize flickity when the slider is settled
          $(featuredCollectionSlider).on( 'settle.flickity', function() {
            $(featuredCollectionSlider).flickity('resize')
          });
        }
      }
    });

  },
  unload: function($section) {
    let $slider = $section.find('.flickity-enabled');
    $slider.flickity('destroy');
  }
}

/******/ })()