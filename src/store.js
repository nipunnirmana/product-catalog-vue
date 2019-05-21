import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        pName: 'Asian Quinoa Power Salad',
        des:
          'Delicious vegan and easily gluten free Thai quinoa salad with a perfect crunch. Perfect for meal prep lunches, picnics or parties. This salad is a crowd-pleaser!.',
        price: 1750,
        img: 'asian-quinoa-power-salad.jpg'
      },
      {
        id: 2,
        pName: 'Peaches & Greens Salad',
        des:
          'Salads don’t have to be all about the veggies. In this one, fresh, juicy peaches and sweet strawberries play starring roles, supported by crunchy cucumbers and almonds, protein-rich chickpeas, and creamy avocado.',
        price: 1350,
        img: 'Peaches-and-Greens-Salad.jpg'
      },
      {
        id: 3,
        pName: 'Southwest Quinoa Salad',
        des:
          'The perfect Southwest Quinoa Salad for any occasion – meal prep, lunch, dinner, cookout sides, you name it. Tossed in a cilantro chili lime dressing for a delicious flavor boost.',
        price: 1275,
        img: 'southwest-quinoa-salad.jpg'
      }
    ],
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
      const { add, product } = payload
      const { id, pName, des, price, img } = product
      const cart = state.cart

      const filteredProduct = cart.filter((cart, key) => {
        if (cart.id === id) {
          return add ? state.cart[key].qty++ : state.cart[key].qty--
        }
      })

      if (!filteredProduct.length) {
        state.cart = [...cart, { id, pName, des, price, img, qty: 1 }]
      } else if (filteredProduct[0].qty === 0) {
        state.cart = cart.filter(
          (cart, key) => cart.id !== filteredProduct[0].id
        )
      }

      localStorage.setItem('cartData', JSON.stringify(state.cart))

      this.dispatch('updateCartSummaryData')
    },

    updateCartSummaryData (state) {
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
