import Product from '@/components/Product'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueCurrencyFilter from 'vue-currency-filter'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueCurrencyFilter)

describe('Loading Product Component with Route name as CartPageRoute ', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store()
  })

  it('Product name should be Peaches & Greens Salad', () => {
    const $route = {
      path: '/',
      name: 'CartPageRoute'
    }
    const wrapper = shallowMount(Product, {
      store,
      localVue,
      mocks: {
        $route
      },
      propsData: {
        product: {
          id: 2,
          pName: 'Peaches & Greens Salad',
          des:
            'Salads don’t have to be all about the veggies. In this one, fresh, juicy peaches and sweet strawberries play starring roles, supported by crunchy cucumbers and almonds, protein-rich chickpeas, and creamy avocado.',
          price: 1350,
          img: 'Peaches-and-Greens-Salad.jpg'
        }
      }
    })

    expect(wrapper.find('.product .name').text()).toBe('Peaches & Greens Salad')
  })
})
