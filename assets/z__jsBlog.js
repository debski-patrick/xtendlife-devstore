/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
window.PXUTheme.jsBlog = {
  init: function($section){

    // Add settings from schema to current object
    window.PXUTheme.jsBlog = $.extend(this, window.PXUTheme.getSectionData($section));

    if(this.enable_filter == true) {
      $('#blog_filter').on('change', function() {
        window.PXUTheme.jsBlog.blogFilter();
      });
    }
//    $(document).on('scroll', function() {
//   if($('.header-sticky-wrapper').hasClass('is-sticky')) {
//   alert();
// }
//    });
  },
  blogFilter: function() {
    let url = $('#blog_filter').val();
    window.location = url;
  },
  unload: function($section) {
    $('#blog_filter').off();
  }
}

/******/ })()
;