/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
window.PXUTheme.jsSlideshowClassic = {
	init: function($section) {

    // Add settings from schema to current object
    window.PXUTheme.jsSlideshowClassic = $.extend(this, window.PXUTheme.getSectionData($section));

    // Selectors
    const $slideshowClassicEl = $section.find('[data-slideshow-classic]').removeClass('is-hidden');
      
 var nextArrowHTML = '<a class="slick-arrow slick-next"><svg aria-hidden="true" focusable="false" role="presentation" class="slick-arrow__icon" width="20px" height="15px" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg></a>';
  var prevArrowHTML = '<a class="slick-arrow slick-prev"><svg aria-hidden="true" focusable="false" role="presentation" class="slick-arrow__icon" width="20px" height="15px" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1203 544q0 13-10 23L800 960l393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10L631 983q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg></a>';

    const $slideshowClassic = $slideshowClassicEl.flickity({
      wrapAround: true,
      adaptiveHeight: true,
      prevNextButtons: this.number_of_slides > 1 ? this.show_arrows : false,
      pageDots: this.number_of_slides > 1 ? this.show_nav_buttons : false,
      draggable: true,
      imagesLoaded: true,
      fade: this.image_transition == 'fade' ? true : false,
      autoPlay: this.image_slideshow_speed * 1000,
      nextArrow: nextArrowHTML,
      prevArrow: prevArrowHTML    
    });

    // Resize flickity when the slider is settled
    $slideshowClassicEl.on( 'settle.flickity', function() {
      $slideshowClassicEl.flickity('resize');
    })

  },
  blockSelect: function($section, blockId) {
    const $slider = $section.find('[data-image-slideshow]');
    const $sliderIndex = $('#shopify-section-' + blockId).data('slide-index');

    $slider.flickity('select', $sliderIndex, true, true);

  },
	unload: function($section) {

	}
}

/******/ })()
;