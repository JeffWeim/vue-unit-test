import Vue from 'vue'
import { mount } from 'avoriaz'
import  * as utility from '../utility'
import Information from '@/components/Information'

const wrapper = mount(Information)

describe('Information.vue', () => {
  it('renders a div with class information', () => {
    expect(wrapper.is('div')).to.equal(true)
    expect(wrapper.hasClass('information')).to.equal(true)
  })

  it('renders and <h2> with the copy "Welcome to the information section." ', () => {
    const element = wrapper.find('.information h2')[0].element.innerText
    expect(element.trim()).to.equal('Welcome to the information section.')
  })

  it('renders a div with class .information having 3 sentences', () => {
    let mock = [
      'The is the first message in the messasges array.',
      'The is the second message in the messasges array.',
      'The is the third message in the messasges array.'
    ]

    const paragraphs = wrapper.find('.information p')

    paragraphs.forEach((el, i) => {
      expect(paragraphs[i].element.textContent.trim()).to.equal(mock[i])
    })
  })
})