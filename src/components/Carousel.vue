<template>
  <section
    id="Carousel"
    class="section"
  >
    <div class="column">
      <div class="big-header">
        Sitecore Powered!
      </div>
      <div class="minor-header">
        Fully leveraging the power of Sitecore
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Carousel'
}
</script>

<style scoped lang="sass">
@import '../styles/common'

#Carousel
  background-color: $green
  font-family: $font-arial
  justify-content: space-around
  .column
    padding: 0 5%
</style>
