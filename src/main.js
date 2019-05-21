import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCurrencyFilter from 'vue-currency-filter'

Vue.config.productionTip = false

// vue-currency-filter used for price formatting

Vue.use(VueCurrencyFilter, {
  symbol: 'LKR',
  thousandsSeparator: ',',
  fractionCount: 2,
  fractionSeparator: '.',
  symbolPosition: 'back',
  symbolSpacing: true
})

new Vue({
  router,
  store,
  VueCurrencyFilter,
  render: h => h(App)
}).$mount('#app')
