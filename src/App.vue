<template>
  <div id="app" class="component">
    <hello></hello>
  </div>
</template>

<script>
  import Hello from './components/hello'

  export default {
    name: 'App',
    components: {
      Hello
    }
  }
</script>
