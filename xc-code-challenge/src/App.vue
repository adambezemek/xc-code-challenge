<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ContentGrid />
  </div>
</template>

<script>
import ContentGrid from './components/ContentGrid.vue'

export default {
  name: 'app',
  components: {
    ContentGrid
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
