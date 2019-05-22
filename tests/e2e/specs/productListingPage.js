module.exports = {
  '@tags': ['productListingPage'],
  'Testing 3 Products Loading into product listing page': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.products-listing-page')
      .assert.elementCount('.product-wrapper', 3)
      .end()
  },
  'Clicking on first Product to open the detail page': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.products-listing-page')
      .click('.product-wrapper:nth-of-type(1)')
      .waitForElementVisible('.product.product-detail-page', 5000)
      .end()
  }
}
