import CartSummary from '@/components/CartSummary'
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

describe('Testing Cart Summary - loading data', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store()
  })

  const wrapper = shallowMount(CartSummary, {
    store,
    localVue,
    mocks: {
      $store: {
        state: {
          products: [],
          cart: [],
          summaryCartData: {
            cartItemCount: 1,
            cartSubTotal: 1350,
            cartDiscount: 54,
            cartVat: 155.52,
            cartTotal: 1451.52
          }
        }
      }
    }
  })

  it('Summary Subtotal should be 1,350.00 LKR', () => {
    expect(wrapper.find('.cart-summary-value.sub-total').text()).toBe(
      '1,350.00 LKR'
    )
  })
  it('Summary Discount should be 54.00 LKR', () => {
    expect(wrapper.find('.cart-summary-value.discount').text()).toBe(
      '54.00 LKR'
    )
  })
  it('Summary VAT should be 155.52 LKR', () => {
    expect(wrapper.find('.cart-summary-value.vat').text()).toBe('155.52 LKR')
  })
  it('Summary Order Total should be 1,451.52 LKR', () => {
    expect(wrapper.find('.cart-summary-value.total').text()).toBe(
      '1,451.52 LKR'
    )
  })
})
