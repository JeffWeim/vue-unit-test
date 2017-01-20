import Vue from 'vue'
import ContactForm from 'src/components/ContactForm'
import axios from 'axios'

const appInstance = new Vue(ContactForm)

describe('ContactForm.vue', () => {
  let promiseCall

  before(function () {
    promiseCall = sinon.stub(axios, 'get').returnsPromise()
  })

  after(function () {
    axios.get.restore()
  })

  it('should set correct default data', function () {
    let defaultData = ContactForm.data()

    expect(typeof ContactForm.data).to.be.equal('function')

    expect(defaultData.msg).to.be.equal('Welcome!')
  })

  it('should contain proper methods', function (done) {
    expect(typeof appInstance.helloCall).to.be.equal('function')

    done()
  })

  // https://github.com/substantial/sinon-stub-promise
  it('helloCall should set proper data from AJAX response [success]', function (done) {
    promiseCall.resolves({
      data: {
        msg: 'Hello from the API enpoint!'
      }
    })

    appInstance.helloCall()

    expect(appInstance.api).to.be.equal('Hello from the API enpoint!')

    done()
  })

})