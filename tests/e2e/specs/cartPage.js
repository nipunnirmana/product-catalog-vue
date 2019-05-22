module.exports = {
  '@tags': ['cartPage'],
  'Checking if cart page is empty on initial load': browser => {
    browser
      .url(`${process.env.VUE_DEV_SERVER_URL}${browser.globals.cartPagePath}`)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.empty-cart-message')
      .assert.containsText(
        '.empty-cart-message',
        'Empty Cart , Please add Item(s) before Continuing',
        'Message should be Empty Cart , Please add Item(s) before Continuing'
      )
      .end()
  },
  'Incrementing Decrementing cart item QTY': browser => {
    browser
      .url(
        `${process.env.VUE_DEV_SERVER_URL}${browser.globals.productDetailPath}`
      )
      .waitForElementVisible('#app', 5000)
      .waitForElementVisible('.product.product-detail-page', 5000)
      .click('.primaryBtn.add-to-cart')
      .click('.page-header-cart')
      .waitForElementVisible('.cart-wrapper', 5000)
      .assert.containsText('.cart-count-inner', '1', 'Cart count should be 1')
      .assert.containsText(
        '.qty-btns-wrapper .qty',
        '1',
        'Product QTY should be 1'
      )
      .click('.qty-plus-btn-wrapper')
      .assert.containsText(
        '.qty-btns-wrapper .qty',
        '2',
        'Product QTY should be 2 after clicking plus button'
      )
      .click('.qty-minus-btn-wrapper')
      .assert.containsText(
        '.qty-btns-wrapper .qty',
        '1',
        'Product QTY should be 1 after clicking plus button'
      )
      .end()
  },
  'Checking if cart items presists after the reload (localstorage)': browser => {
    browser
      .url(
        `${process.env.VUE_DEV_SERVER_URL}${browser.globals.productDetailPath}`
      )
      .waitForElementVisible('#app', 5000)
      .waitForElementVisible('.product.product-detail-page', 5000)
      .click('.primaryBtn.add-to-cart')
      .click('.page-header-cart')
      .waitForElementVisible('.cart-wrapper', 5000)
      .click('.qty-plus-btn-wrapper')
      .click('.qty-plus-btn-wrapper')
      .assert.containsText(
        '.qty-btns-wrapper .qty',
        '3',
        'Product QTY should be 3 after clicking plus button twice'
      )
      .refresh()
      .assert.containsText(
        '.qty-btns-wrapper .qty',
        '3',
        'Product QTY should be 3 after the page refresh'
      )
      .end()
  },
  'Removing cart items': browser => {
    browser
      .url(
        `${process.env.VUE_DEV_SERVER_URL}${browser.globals.productDetailPath}`
      )
      .waitForElementVisible('#app', 5000)
      .waitForElementVisible('.product.product-detail-page', 5000)
      .click('.primaryBtn.add-to-cart')
      .click('.page-header-cart')
      .waitForElementVisible('.cart-wrapper', 5000)
      .click('.qty-plus-btn-wrapper')
      .assert.containsText(
        '.qty-btns-wrapper .qty',
        '2',
        'Product QTY should be 2 after clicking plus button'
      )
      .click('.qty-minus-btn-wrapper')
      .assert.containsText(
        '.qty-btns-wrapper .qty',
        '1',
        'Product QTY should be 1 after clicking minus button'
      )
      .click('.qty-minus-btn-wrapper')
      .assert.elementPresent('.empty-cart-message')
      .assert.containsText(
        '.empty-cart-message',
        'Empty Cart , Please add Item(s) before Continuing',
        'Message should be Empty Cart , after removing item'
      )
      .end()
  }
}
