import { shallowMount } from '@vue/test-utils'
import PrimaryButton from '@/components/elements/PrimaryButton'

describe('Primary Button Testing with Data', () => {
  it('Primary Button Text Should be Add to Cart', () => {
    const wrapper = shallowMount(PrimaryButton, {
      propsData: { btnText: 'Add to Cart' }
    })
    expect(wrapper.find('.btnText').text()).toBe('Add to Cart')
  })
})
