import Vue from 'vue'
import Router from 'vue-router'
import ProductListingPage from '@/views/ProductListingPage'
import ProductDetailPage from '@/views/ProductDetailPage'
import CartPage from '@/views/CartPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'productListingPageRoute',
      component: ProductListingPage
    },
    {
      path: '/product/:id',
      name: 'productDetailPageRoute',
      component: ProductDetailPage
    },
    {
      path: '/cart',
      name: 'CartPageRoute',
      component: CartPage
    }
  ]
})
