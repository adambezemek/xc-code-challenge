<template>
  <div id="app">
    <PageHeader/>
    <PageCarousel msg="Sitecore Powered!"/>
    <SwapSection/>
    <PageCallout/>
    <PageFooter msg="Copyright info can maybe go here at the bottom"/>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageCarousel from './components/PageCarousel.vue'
import SwapSection from './components/SwapSection.vue'
import PageCallout from './components/PageCallout.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'app',
  components: {
    PageHeader,
    PageCarousel,
    SwapSection,
    PageCallout,
    PageFooter
  }
}
</script>

<style lang="scss">
$blue: #354b58;
$green: #23393b;
$ltgray: #777777;
$gray: #2e3134;
$white: #ffffff;

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
img {
  width: 100%;
  height: auto;
}
header {
  background: $blue;
  color: $ltgray;
  position: fixed;
  top: 0;
  height: 5rem;
  width: 100%;
}
section {
  padding: 1rem;

  &.carousel {
    background: $green;
    color: $white;
    min-height: 340px;
  }

  &.callout {
    background: lighten($blue, 5%);
    color: $ltgray;
    min-height: 20rem;
  }
}
footer {
  color: $ltgray;
  background: $blue;
  min-height: 20rem;

  display: flex;
  flex: 1;
  bottom: 0;
}

@supports (display: grid) {
  //
}
</style>
