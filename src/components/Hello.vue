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
        msg: 'Vue Unit Testing',
        val: 0
      }
    },
    methods: {
      increase() {
        this.val += 1

        this.anotherMethod()
      },
      anotherMethod() {}
    },
    mounted() {
      console.log('ready!')
    }
  }
</script>

<style scoped>
  .hello {
    color: #42b983;
  }
</style>
