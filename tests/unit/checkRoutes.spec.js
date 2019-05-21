import ProductListingPage from '@/views/ProductListingPage'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Route Test home page', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store()
  })

  it('Page route name should be productListingPageRoute', () => {
    const $route = {
      path: '/',
      name: 'productListingPageRoute',
      component: ProductListingPage
    }
    const wrapper = shallowMount(ProductListingPage, {
      store,
      localVue,
      mocks: {
        $route
      }
    })
    expect(wrapper.vm.$route.name).toBe('productListingPageRoute')
  })
})
