/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
window.PXUTheme.jsCart = {
  init: function ($section) {

    // Add settings from schema to current object
    //window.PXUTheme.jsCart = $.extend(this, window.PXUTheme.getSectionData($section));

    this.$section = $section;

    $(document).on('click', '[data-cart-page-delete]', function (e) {
      e.preventDefault();
      const lineID = $(this).data('line-item-key');
      window.PXUTheme.jsCart.removeFromCart(lineID);

      return false;
    });

    // Prevent the ajax cart form from being submitted when pressing the "Enter" key
    $('#cart_form').keydown(function(e){
      if (e.keyCode == 13) {
        e.preventDefault();
        return false;
      }
    });
  },
  removeFromCart: function (lineID) {
    const $cartItem = window.PXUTheme.jsCart.$section.find(`[data-line-item="${lineID}"]`);

    $cartItem.css('opacity', '0.5');

    $.ajax({
      type: 'POST',
      url: '/cart/change.js',
      data: 'quantity=0&line=' + lineID,
      dataType: 'json',
      success: function (cart) {

        $cartItem.addClass('animated zoomOut')
        $cartItem.remove();
var total = cart.total_price;
var amount_for_fs = $('.spend-shipping').attr('data-amt');
    var total_price = total;  
        console.log(amount_for_fs, total_price);
    if(amount_for_fs > total_price){
      //udpate
      var amt_required_ffs = amount_for_fs - total_price;
      console.log(amt_required_ffs);
      var percent = total_price/amount_for_fs*100;
      $('.free-shipping-indicator > div').css('width',percent+'%');
      var indicator_msg = $('.indicator__msg').attr('data-msg');
      indicator_msg = indicator_msg.replace('[[rem_amt]]',Shopify.formatMoney(amt_required_ffs));
      $('.indicator__msg').html(indicator_msg);
      $('.spend-shipping-wrap').show();     
       $('.shipping-subtotal').hide();
    }else{
      //remove shipping indicator
      $('.spend-shipping-wrap').hide();
      $('.shipping-subtotal').css('display','flex');
    }
        window.PXUTheme.jsCart.updateView(cart, lineID);

        if (typeof window.PXUTheme.jsAjaxCart !== 'undefined') {
          window.PXUTheme.jsAjaxCart.updateView();
        }
      },
      error: function (XMLHttpRequest, textStatus) {
        var response = eval('(' + XMLHttpRequest.responseText + ')');
        response = response.description;
      }
    });
  },
  updateView: function (cart, lineID) {

    if (cart.item_count > 0) {
      $.ajax({
        dataType: "json",
        async: false,
        cache: false,
        dataType: 'html',
        url: "/cart",
        success: function (html) {

          if (lineID !== null) {
            const updatedItems = $(html).find('.cart__item-list .cart__card');
            const currentItems = $('.cart__item-list .cart__card');

            // Checks if BOGO applied and there is a change in the number of line items
            if (updatedItems.length != currentItems.length){
              const updatedCartList = $(html).find('.cart__item-list');
              // Re-append cart items
              $('.cart__item-list').replaceWith(updatedCartList);
            }

            $(currentItems).each(function(index, element){
              $(element).attr('data-line-item', (index + 1));
              $(element).find('[data-line-item-key]').attr('data-line-item-key', (index + 1));
            })

            const itemTotal = $(html).find(`[data-line-item="${lineID}"]`).find('.cart__total');
            const quantityInput = $(html).find(`[data-line-item="${lineID}"]`).find('.quantity-input');
            const itemPrice = $(html).find(`[data-line-item="${lineID}"]`).find('.cart__price');

            $(`[data-line-item="${lineID}"]`).find('.cart__total').replaceWith(itemTotal);
            $(`[data-line-item="${lineID}"]`).find('.quantity-input').replaceWith(quantityInput);
            $(`[data-line-item="${lineID}"]`).find('.cart__price').replaceWith(itemPrice);

          }

          const subtotal = $(html).find('.cart__subtotal-container');
          const discounts = $(html).find('.cart__discounts');
          const savings = $(html).find('.cart__total-savings');

          $('.cart__subtotal-container').replaceWith(subtotal);

          if (discounts.length > 0 && $('.cart__discounts').length < 1) {
            $('.cart__subtotal-container').before(discounts);
          } else {
            $('.cart__discounts').replaceWith(discounts);
          }

          if (savings.length > 0 && $('.cart__total-savings').length < 1) {
            $('.cart__subtotal-container').after(savings);
          } else {
            $('.cart__total-savings').replaceWith(savings);
          }

          $('[data-bind="itemCount"]').text(cart.item_count);
          $('.count_cart').text(cart.item_count);
        }
      });

    } else {
      $('.cart__empty-cart-message').removeClass('is-hidden');
      $('.cart__form').addClass('is-hidden');
      $('[data-ajax-cart-trigger]').removeClass('has-cart-count');
      $('[data-bind="itemCount"]').text('0');
    }

  },
  unload: function ($section) {
    // Clear event listeners in theme editor
    $('[data-cart-page-delete]').off();
    $('#cart_form').off();
  }
}

/******/ })()
;