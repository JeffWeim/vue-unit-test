import Vue from 'vue'
import ContactForm from '@/components/ContactForm'
import axios from 'axios'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

const compInstance = new Vue(ContactForm)

describe('ContactForm.vue', () => {
  let promiseCall

  before(() => {
    promiseCall = sinon.stub(axios, 'get').returnsPromise()
  })

  after(() => {
    axios.get.restore()
  })

  it('should set correct default data', function () {
    let defaultData = ContactForm.data()

    expect(typeof ContactForm.data).to.be.equal('function')

    expect(defaultData.msg).to.be.equal('Welcome!')
  })

  it('should contain proper methods', function (done) {
    expect(typeof compInstance.helloCall).to.be.equal('function')

    done()
  })

  it('helloCall should set proper data from AJAX response [success]', function (done) {
    promiseCall.resolves({
      data: {
        'statusCode': 200,
        msg: 'Hello from the API enpoint!'
      }
    })

    compInstance.helloCall()

    expect(compInstance.api).to.be.equal('Hello from the API enpoint!')

    done()
  })

  it('helloCall should set proper data from AJAX response [fail]', function (done) {
    promiseCall.rejects({
      data: {
        'statusCode': 400,
        'error': 'Bad Request',
        'message': 'invalid query'
      }
    })
    compInstance.helloCall()

    expect(compInstance.error).to.be.not.empty

    done()
  })

})