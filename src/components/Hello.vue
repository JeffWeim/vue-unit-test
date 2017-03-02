<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <contact-form></contact-form>

    <information></information>

  </div>
</template>

<script>
  import ContactForm from './ContactForm'
  import Information from './Information'

  export default {
    name: 'Hello',
    components: {
      ContactForm,
      Information
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
      anotherMethod(word) {}
    },
    mounted() {
      this.anotherMethod('wow')
    }
  }
</script>

<style lang="scss">
  @import '../styles/hello';
</style>
