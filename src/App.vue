<template>
  <div id="app">
    <navbar></navbar>
    <carousel></carousel>
    <main-content></main-content>
    <site-footer></site-footer>
  </div>
</template>

<script>
import Carousel from './components/carousel'
import MainContent from './components/content'
import SiteFooter from './components/footer'
import Navbar from './components/navbar'

export default {
  name: 'app',
  components: {
    Carousel,
    MainContent,
    SiteFooter,
    Navbar
  }
}
</script>

<style>
@import './assets/reset.css';
@import './assets/main.scss';

#app {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
