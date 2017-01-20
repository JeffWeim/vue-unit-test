<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <contact-form></contact-form>

  </div>
</template>

<script>
  import ContactForm from './ContactForm'

  export default {
    name: 'Hello',
    components: {
      ContactForm
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        val: 0
      }
    },
    methods: {
      increase() {
        this.val += 1

        // console.log('we\'re in increase!');

        this.anotherMethod()
      },
      anotherMethod() {
        // console.log('we\'re in another method!');
      }
    },
    ready() {
      console.log('ready!')
    }
  }
</script>

<style scoped>
  .hello {
    color: #42b983;
  }
</style>
