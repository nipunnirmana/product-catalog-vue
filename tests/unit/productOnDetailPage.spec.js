import Product from '@/components/Product'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueCurrencyFilter from 'vue-currency-filter'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueCurrencyFilter)

describe('Loading Product Comphonent with Route name as productDetailPageRoute ', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store()
  })

  it('Product Description should contain Delicious vegan and easily ', () => {
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
        product: {
          id: 1,
          pName: 'Asian Quinoa Power Salad',
          des:
            'Delicious vegan and easily gluten free Thai quinoa salad with a perfect crunch. Perfect for meal prep lunches, picnics or parties. This salad is a crowd-pleaser!.',
          price: 1750,
          img: 'asian-quinoa-power-salad.jpg'
        }
      }
    })

    expect(wrapper.find('.product .description').text()).toMatch(
      'Delicious vegan and easily '
    )
  })
})
