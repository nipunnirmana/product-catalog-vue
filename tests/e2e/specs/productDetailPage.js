module.exports = {
  '@tags': ['productDetailPage'],
  'Testing Details page products loads propely': browser => {
    browser
      .url(
        `${process.env.VUE_DEV_SERVER_URL}${browser.globals.productDetailPath}`
      )
      .waitForElementVisible('#app', 5000)
      .waitForElementVisible('.product.product-detail-page', 5000)
      .assert.elementPresent('.product-wrapper .img')
      .assert.elementPresent('.product-wrapper .name')
      .assert.elementPresent('.product-wrapper .description')
      .assert.elementPresent('.product-wrapper .price-text')
      .end()
  },
  'Testing Cart Count & Total': browser => {
    browser
      .url(
        `${process.env.VUE_DEV_SERVER_URL}${browser.globals.productDetailPath}`
      )
      .waitForElementVisible('#app', 5000)
      .waitForElementVisible('.product.product-detail-page', 5000)
      .assert.containsText('.cart-count-inner', '0', 'Cart count should be 0')
      .assert.containsText(
        '.cart-price',
        '0.00 LKR',
        'Cart Total should be 0.00 LKR'
      )
      .click('.primaryBtn.add-to-cart')
      .assert.containsText('.cart-count-inner', '1', 'Cart count should be 1')
      .assert.containsText(
        '.cart-price',
        '1,842.40 LKR',
        'Cart Total should be 1,842.40 LKR'
      )
      .click('.primaryBtn.add-to-cart')
      .assert.containsText('.cart-count-inner', '2', 'Cart count should be 2')
      .assert.containsText(
        '.cart-price',
        '3,371.20 LKR',
        'Cart Total should be 3,371.20 LKR.00 LKR'
      )
      .end()
  }
}
