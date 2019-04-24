<template>
  <div class="full-width center-content">
    <h1>Hello, Worrrld!</h1>
    <foo />
  </div>
</template>
<script>
import Foo from './components/Foo.vue'

export default {
  components: {
    Foo
  }
}
</script>
<style scoped lang="sass">
  .full-width
    width: 100%
    background-color: orange

  .center-content
    display: flex
    justify-content: center
    align-items: center
</style>
