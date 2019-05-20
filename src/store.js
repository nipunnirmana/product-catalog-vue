import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Asian Quinoa Power Salad',
        des:
          'Salads don’t have to be all about the veggies. In this one, fresh, juicy peaches and sweet strawberries play starring roles, supported by crunchy cucumbers and almonds, protein-rich chickpeas, and creamy avocado.',
        price: 1750,
        img: 'asian-quinoa-power-salad.jpg'
      },
      {
        id: 2,
        name: 'Peaches & Greens Salad',
        des:
          'Salads don’t have to be all about the veggies. In this one, fresh, juicy peaches and sweet strawberries play starring roles, supported by crunchy cucumbers and almonds, protein-rich chickpeas, and creamy avocado.',
        price: 1350,
        img: 'Peaches-and-Greens-Salad.jpg'
      },
      {
        id: 3,
        name: 'Southwest Quinoa Salad',
        des:
          'Salads don’t have to be all about the veggies. In this one, fresh, juicy peaches and sweet strawberries play starring roles, supported by crunchy cucumbers and almonds, protein-rich chickpeas, and creamy avocado.',
        price: 1275,
        img: 'southwest-quinoa-salad.jpg'
      }
    ]
  },
  mutations: {},
  actions: {}
})
