import { shallowMount } from '@vue/test-utils'
import QtyButtons from '@/components/QtyButtons'

describe('Testing Qty Button - Test with data', () => {
  it('Qty Value should be 5', () => {
    const wrapper = shallowMount(QtyButtons, {
      propsData: { product: { qty: 5 } }
    })
    expect(wrapper.find('.qty').text()).toBe('5')
  })
})
