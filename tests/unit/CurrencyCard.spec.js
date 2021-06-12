import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import CurrencyCard from '@/components/CurrencyCard.vue'

describe('CurrencyCard.vue', () => {
  it('renders props.ticker & props.info when passed', () => {
    const ticker = { price: 1, percent: 10, chg: 100, vol: 1000 }
    const info = { base: '', name: '', quote: '', symbol: '' }
    const wrapper = shallowMount(CurrencyCard, {
      propsData: { ticker, info }
    })
    expect(wrapper.props().ticker).to.equal(ticker)
    expect(wrapper.props().info).to.equal(info)
  })
})
