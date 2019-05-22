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

  it('Name element should exists on productDetailPageRoute', () => {
    const $route = {
      path: '/',
      name: 'productDetailPageRoute'
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

    expect(wrapper.find('.product .name').exists()).toBe(true)
  })

  it('price button element should not exists on productDetailPageRoute', () => {
    const $route = {
      path: '/',
      name: 'productDetailPageRoute'
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

    expect(wrapper.find('.product .price').exists()).toBe(false)
  })
})
