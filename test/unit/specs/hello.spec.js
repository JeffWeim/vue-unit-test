import Vue from 'vue'
import Hello from 'src/components/Hello'

const compInstance = new Vue(Hello)

describe('Hello.vue', () => {

  beforeEach(function() {
    sinon.spy(compInstance, 'anotherMethod')

    compInstance.increase()
  })

  afterEach(function() {
    compInstance.anotherMethod.restore()
  })

  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Hello)
    })

    expect(vm.$el.querySelector('.hello h1').textContent).to.be.equal('Welcome to Your Vue.js App')
  })

  it('has a ready hook', () => {
    expect(typeof Hello.ready).to.be.equal('function')
  })

  it('increases correcty', () => {
    compInstance.val = 0

    expect(compInstance.val).to.be.equal(0)

    compInstance.increase()

    expect(compInstance.val).to.be.equal(1)
  })

  it('calls anotherMethod()', () => {
    expect(compInstance.anotherMethod).to.have.been.called
  })

})
