import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /*
   * Initiate store data with empty values
   */

  state: {
    products: [],
    cart: [],
    summaryCartData: {
      cartItemCount: 0,
      cartSubTotal: 0,
      cartDiscount: 0,
      cartVat: 0,
      cartTotal: 0
    }
  },
  mutations: {
    updateCart (state, payload) {
      /*
       * Updating cart (Incrementing , decrementing removing and adding news products)
       */
      const { add, product } = payload
      const { id, pName, des, price, img } = product
      const cart = state.cart

      const filteredProduct = cart.filter((cart, key) => {
        if (cart.id === id) {
          // Increment Decrement Product QTY
          return add ? state.cart[key].qty++ : state.cart[key].qty--
        }
      })

      if (!filteredProduct.length) {
        // Adding new product
        state.cart = [...cart, { id, pName, des, price, img, qty: 1 }]
      } else if (filteredProduct[0].qty === 0) {
        state.cart = cart.filter(
          (cart, key) => cart.id !== filteredProduct[0].id
        )
      }

      /**
       * Saving cart data into Localstorage to be used on reload
       */

      localStorage.setItem('cartData', JSON.stringify(state.cart))

      this.dispatch('updateCartSummaryData')
    },

    updateCartSummaryData (state) {
      /*
       * Calculating cart data (count,subtotal , discounts , vat & total)
       */

      let cartCount = 0
      let subTotal = 0
      this.state.cart.forEach((val, key) => {
        cartCount += val.qty
        subTotal += val.price * val.qty
      })

      const cartItemCount = cartCount
      const cartSubTotal = subTotal
      const cartDiscount =
        (cartSubTotal * (Math.floor(cartSubTotal / 500) * 2)) / 100
      const cartVat = (cartSubTotal - cartDiscount) * 0.12
      const cartTotal = cartSubTotal - cartDiscount + cartVat

      state.summaryCartData = {
        cartItemCount,
        cartSubTotal,
        cartDiscount,
        cartVat,
        cartTotal
      }
    }
  },
  actions: {
    udpateCart (state, payload) {
      this.commit('updateCart', payload)
    },

    updateCartSummaryData (state) {
      this.commit('updateCartSummaryData')
    }
  }
})
