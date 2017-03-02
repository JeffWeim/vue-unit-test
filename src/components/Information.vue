<template>
    <div id="information" class="information">
      <h2> {{ title }} </h2>
      <p  v-for="m in messages"> {{ m.copy }} </p>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Welcome to the information section.',
        messages: [
          {
            copy: 'The is the first message in the messasges array.'
          },
          {
            copy: 'The is the second message in the messasges array.'
          },
          {
            copy: 'The is the third message in the messasges array.'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .information {
    p {
      color: #3b9e71;
    }
  }
</style>