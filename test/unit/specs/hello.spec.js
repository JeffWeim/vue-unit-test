import Vue from 'vue'
import Hello from 'src/components/Hello'

const compInstance = new Vue(Hello)

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
  });

  it('increases correcty', () => {
    expect(compInstance.val).to.be.equal(0)

    compInstance.increase()

    expect(compInstance.val).to.be.equal(1)
  })

  it('calls anotherMethod()', () => {
    expect(compInstance.anotherMethod).to.have.been.called
  })

})
