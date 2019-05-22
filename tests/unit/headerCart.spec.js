import HeaderCart from '@/components/HeaderCart'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueCurrencyFilter from 'vue-currency-filter'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueCurrencyFilter, {
  symbol: 'LKR',
  thousandsSeparator: ',',
  fractionCount: 2,
  fractionSeparator: '.',
  symbolPosition: 'back',
  symbolSpacing: true
})

describe('Header Cart - Testing Data', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store()
  })

  const wrapper = shallowMount(HeaderCart, {
    store,
    localVue,
    mocks: {
      $store: {
        state: {
          products: [],
          cart: [],
          summaryCartData: {
            cartItemCount: 99,
            cartTotal: 3456
          }
        }
      }
    }
  })

  it('Cart Total Price Should be 3,456.00 LKR', () => {
    expect(wrapper.find('.cart-price').text()).toBe('3,456.00 LKR')
  })
  it('Cart Count 99', () => {
    expect(wrapper.find('.cart-count-inner').text()).toBe('99')
  })
})
