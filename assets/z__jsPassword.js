/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
window.PXUTheme.jsPassword = {
  init: function() {
    $('#open-me').on('click', function() {
      $('.overlay1').addClass('overlay-open');
      $('#password-container').addClass('modal--open');
    });

    $('#close-me').on('click', function() {
     $('.overlay1').removeClass('overlay-open');
      $('#password-container').removeClass('modal--open');
    });
  },
  unload: function($target) {
    $('#open-me').off('click');
    $('#close-me').off('click');
  }
}


/******/ })()
;