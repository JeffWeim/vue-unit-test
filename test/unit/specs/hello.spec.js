import Vue from 'vue'
import { mount } from 'avoriaz'
import Hello from '@/components/Hello'

const compInstance = new Vue(Hello)
const wrapper = mount(Hello)
Vue.config.silent = true

describe('Hello.vue', () => {

  beforeEach(() => {
    sinon.spy(compInstance, 'anotherMethod')
    compInstance.increase()

    let mountedHook = compInstance.$options.mounted[0].bind(compInstance)
    mountedHook()

    compInstance.val = 0
  })

  afterEach(() => {
    compInstance.anotherMethod.restore()
  })

  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Hello)
    })

    expect(vm.$el.querySelector('.hello h1').textContent).to.be.equal('Vue Unit Testing')
  })

  it('has a mounted hook that exist', () => {
    expect(typeof compInstance.$options.mounted).to.exist
  })

  it('has a mounted hook that calls anotherMethod()', () => {
    expect(compInstance.anotherMethod).to.have.been.calledWith('wow')
  })

  it('increases correcty', () => {
    expect(compInstance.val).to.be.equal(0)

    compInstance.increase()

    expect(compInstance.val).to.be.equal(1)
  })

  it('calls anotherMethod()', () => {
    expect(compInstance.anotherMethod).to.have.been.called
  })

  it('should have 2 child components', function() {
    expect(wrapper.vm.$children.length).to.equal(2)
  })

  it('should have 2 child components that are named', function() {
    const mock = [
      'Form',
      'Information'
    ]

    wrapper.vm.$children.forEach((e, i) => {
      expect(wrapper.vm.$children[i].$options.name).to.equal(mock[i])
    })
  })
})
