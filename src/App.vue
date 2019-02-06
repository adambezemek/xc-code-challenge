<template>
  <div id="app">
    <PageHeader/>
    <PageCarousel/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg=" I AM A msg as referenced in app.vue"/>
    <PageCallout/>
    <PageFooter msg="Copyright info can maybe go here at the bottom"/>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageCarousel from './components/PageCarousel.vue'
import HelloWorld from './components/HelloWorld.vue'
import PageCallout from './components/PageCallout.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'app',
  components: {
    PageHeader,
    PageCarousel,
    HelloWorld,
    PageCallout,
    PageFooter
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5rem; // see header height
}
header {
  background: #123456;
  color: #fff;
  position: fixed;
  top: 0;
  height: 5rem;
  width: 100%;
}
section {
  padding: 1rem;

  &.carousel {
    background: #deff00;
    min-height: 200px;
  }

  &.callout {
    background: #777777;
    min-height: 20rem;
  }
}
footer {
  color: #fff;
  background: #333333;
  min-height: 20rem;

  display: flex;
  flex: 1;
  bottom: 0;
}
</style>
