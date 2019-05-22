module.exports = {
  '@tags': ['cartSummary'],
  'Incrementing Decrementing cart item QTY': browser => {
    browser
      .url(
        `${process.env.VUE_DEV_SERVER_URL}${
          browser.globals.productTwoDetailPath
        }`
      )
      .waitForElementVisible('#app', 5000)
      .waitForElementVisible('.product.product-detail-page', 5000)
      .click('.primaryBtn.add-to-cart')
      .click('.page-header-cart')
      .waitForElementVisible('.cart-wrapper', 5000)
      .assert.containsText(
        '.cart-summary-value.sub-total',
        '1,350.00 LKR',
        'Cart Summary Subtotal should be 1,350.00 LKR'
      )
      .assert.containsText(
        '.cart-summary-value.discount',
        '54.00 LKR',
        'Cart Summary Subtotal should be 54.00 LKR'
      )
      .assert.containsText(
        '.cart-summary-value.vat',
        '155.52 LKR',
        'Cart Summary Subtotal should be 155.52 LKR'
      )
      .assert.containsText(
        '.cart-summary-value.total',
        '1,451.52 LKR',
        'Cart Summary Subtotal should be 1,451.52 LKR'
      )
      .click('.qty-plus-btn-wrapper')
      .assert.containsText(
        '.cart-summary-value.sub-total',
        '2,700.00 LKR',
        'Cart Summary Subtotal should be 2,700.00 LKR after Incrementing QTY by 1'
      )
      .assert.containsText(
        '.cart-summary-value.discount',
        '270.00 LKR',
        'Cart Summary Subtotal should be 270.00 LKR after Incrementing QTY by 1'
      )
      .assert.containsText(
        '.cart-summary-value.vat',
        '291.60 LKR',
        'Cart Summary Subtotal should be 291.60 LKR after Incrementing QTY by 1'
      )
      .assert.containsText(
        '.cart-summary-value.total',
        '2,721.60 LKR',
        'Cart Summary Subtotal should be 2,721.60 LKR after Incrementing QTY by 1'
      )
      .click('.qty-minus-btn-wrapper')
      .assert.containsText(
        '.cart-summary-value.sub-total',
        '1,350.00 LKR',
        'Cart Summary Subtotal should be 1,350.00 LKR after Decrementing QTY by 1'
      )
      .assert.containsText(
        '.cart-summary-value.discount',
        '54.00 LKR',
        'Cart Summary Subtotal should be 54.00 LKR after Decrementing QTY by 1'
      )
      .assert.containsText(
        '.cart-summary-value.vat',
        '155.52 LKR',
        'Cart Summary Subtotal should be 155.52 LKR after Decrementing QTY by 1'
      )
      .assert.containsText(
        '.cart-summary-value.total',
        '1,451.52 LKR',
        'Cart Summary Subtotal should be 1,451.52 LKR after Decrementing QTY by 1'
      )
      .end()
  }
}
