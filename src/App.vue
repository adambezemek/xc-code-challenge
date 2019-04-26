<template>
  <div
    id="Main"
  >
    <Navbar />
    <Carousel />
    <Info />
    <Download />
    <Footer />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Carousel from './components/Carousel.vue'
import Info from './components/Info.vue'
import Download from './components/Download.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Navbar,
    Carousel,
    Info,
    Download,
    Footer
  }
}
</script>
<style lang="sass">
@import '../node_modules/normalize-scss'
@include normalize()
@import './styles/common'
@import './styles/variables'

#Main
  width: 100%
  max-width: $break-large
  margin: 0 auto
</style>
