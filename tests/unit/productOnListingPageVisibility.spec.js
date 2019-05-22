import Product from '@/components/Product'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueCurrencyFilter from 'vue-currency-filter'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueCurrencyFilter)

const productData = {
  id: 1,
  pName: 'Asian Quinoa Power Salad',
  des:
    'Delicious vegan and easily gluten free Thai quinoa salad with a perfect crunch. Perfect for meal prep lunches, picnics or parties. This salad is a crowd-pleaser!.',
  price: 1750,
  img: 'asian-quinoa-power-salad.jpg'
}

describe('Loading Product Component with Route name as productListingPageRoute ', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store()
  })

  it('Description element should not exists on productListingPageRoute', () => {
    const $route = {
      path: '/',
      name: 'productListingPageRoute'
    }
    const wrapper = shallowMount(Product, {
      store,
      localVue,
      mocks: {
        $route
      },
      propsData: {
        product: productData
      }
    })

    expect(wrapper.find('.product .description').exists()).toBe(false)
  })

  it('price text element should not exists on productListingPageRoute', () => {
    const $route = {
      path: '/',
      name: 'productListingPageRoute'
    }
    const wrapper = shallowMount(Product, {
      store,
      localVue,
      mocks: {
        $route
      },
      propsData: {
        product: productData
      }
    })

    expect(wrapper.find('.product .price-text').exists()).toBe(false)
  })
})
