import Vue from 'vue'
import Hello from 'src/components/Hello'

const compInstance = new Vue(Hello)

describe('Hello.vue', () => {

  beforeEach(() => {
    sinon.spy(compInstance, 'anotherMethod')
    compInstance.increase()

    sinon.spy(console, 'log')

    compInstance.$options.mounted[0]()
  })

  afterEach(() => {
    compInstance.anotherMethod.restore()
    console.log.restore()
  })

  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Hello)
    })

    expect(vm.$el.querySelector('.hello h1').textContent).to.be.equal('Vue Unit Testing')
  })

  it('has a ready hook', () => {
    expect(typeof Hello.mounted).to.be.equal('function')
  })

  it('has a ready hook that console.log\s a message', () => {
    expect(console.log).to.have.been.calledWith('ready!')
  });

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
