import Vue from 'vue'
import App from './App'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

let vm

vm = new Vue({
  el: '#app',
  render: h => h(App)
})

export default vm