import Vue from 'vue'
import Router from 'vue-router'
import ProductListingPage from '@/views/ProductListingPage'
import ProductDetailPage from '@/views/ProductDetailPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'productListingPageRoute',
      component: ProductListingPage
    },
    {
      path: '/product/id',
      name: 'productDetailPageRoute',
      component: ProductDetailPage
    }
  ]
})
