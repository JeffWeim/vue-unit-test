<template>
  <form>
    <div class="form-group" v-bind:class="{ 'form-group--error': $v.name.$error }">
      <label class="form__label">Name</label>
      <input class="form__input" v-model.trim="name" @input="$v.name.$touch()">
    </div>
    <span class="form-group__error" v-if="!$v.name.required">Field is required</span>
    <span class="form-group__error" v-if="!$v.name.minLength">Name must be longer than 3 letters.</span>

    <div class="form-group" v-bind:class="{ 'form-group--error': $v.age.$error }">
      <label class="form__label">Age</label>
      <input class="form__input" v-model.trim="age" @blur="$v.age.$touch()">
    </div>
    <span class="form-group__error" v-if="!$v.age.between">Must be between 20 and 30</span>

    <p>API message: {{ api }} </p>

    <button type="submit" @click.prevent="helloCall">Submit</button>
  </form>
</template>

<script>
  import { required, minLength, between } from 'vuelidate/lib/validators'
  import axios from 'axios'

  export default {
    name: 'Form',
    data() {
      return {
        name: '',
        age: 0,
        api: '',
        error: {},
        msg: 'Welcome!'
      }
    },
    methods: {
      helloCall: function() {
        axios.get('http://demo3616266.mockable.io/vue-unit-test').then((response) => {
          this.api = response.data.msg
        }, (response) => {
          this.error = response.data
        })
      }
    },
    validations: {
      name: {
        required,
        minLength: minLength(4)
      },
      age: {
        required,
        between: between(20, 30)
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/base'
</style>