<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from   './components/Header.vue'
import Hero from   './components/Hero.vue'
import Main from     './components/Main.vue'
import Download from './components/Download.vue'
import Footer from   './components/Footer.vue'    

export default {
  name: 'app',
  components: {
    Header,
    Hero,
    Main,
    Download,
    Footer
  }
}
</script>

<style lang="scss">
//externally referenced     
#app {
 
}

</style>
