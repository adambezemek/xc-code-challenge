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
$ltblue: #79a0ba;
$green: #23393b;
$ltgray: #777777;
$gray: #2e3134;
$white: #ffffff;

@mixin breakp($point) {
  @if $point == desktoplg { // 1120px
    @media (min-width: 70rem) { @content; }
  }
  @else if $point == tabletmd { // 600px
    @media (min-width: 37.5rem)  { @content; }
  }
}

body {
  margin: 0;
}
* {
  box-sizing: border-box;

}
#app {
  font-family: Georgia, Times, "Times New Roman", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $ltblue;
  margin-top: 5rem; // see header height
  padding: 0;
}
img {
  width: 100%;
  height: auto;
  border-style: none;
}
header {
  background: $blue;
  color: $ltgray;
  position: fixed;
  top: 0;
  height: 5rem;
  width: 100%;

  & > .fifty50 {
    display: flex;
    flex-wrap: wrap;

    div {
      flex: 1 0 200px;
      padding: .5rem;

      &.social {
        //
      }
      &.links {
        text-align: right;
      }
    }
  }
}
nav {
  text-align: center;
}
button {
  border-radius: 1rem;
  font-size: 1rem;
  background: transparent;
  border: 1px solid $ltblue;
  color: $ltblue;
  margin-top: 1rem;
  padding: .5rem 2rem;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: capitalize;
}

section {
  // padding: .25rem;

  &.carousel {
    background: $green;
    color: $white;
    min-height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 { 
      font-size: 2rem;
      font-size: calc(35px + 45 * ((100vw - 768px) / 952));
      line-height: calc(41px + 45 * ((100vw - 768px) / 952));
    }

    @include breakp(tabletmd) {
        min-height: 380px;
    }
    @include breakp(desktoplg) {
        min-height: 440px;
    }

  }

  &.challenge {

    & > div {

      span {
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: column;
        @include breakp(tabletmd) {
          padding: 2rem;
          flex-direction: row;
        }
        @include breakp(desktoplg) {
          padding: 3rem;
          flex-direction: row;
        }

          .three{
            padding: .5rem .5rem 1rem;
            // flex: 1;
            flex: 1 0 200px;

             @include breakp(tabletmd) {
              // max-width: 100px;
              // max-width: calc(33.33333% - 10px);
              max-width: 33.33%;
            }
          }
      }
   
      
    }
  }

  &.callout {
    background: lighten($blue, 5%);
    color: $ltgray;
    min-height: 20rem;

    article {
      display: flex;
      flex-wrap: wrap;

      div {
        flex: 1 0 200px;
        padding: .5rem;

      }
    }
  }
}

.dragthis {
  margin-bottom: 1rem;

  h2, p {
    padding-left: .5rem;
  }

  button {
    margin-left: .5rem;
  }
}

footer {
  color: $ltgray;
  background: $blue;
  min-height: 20rem;
  display: flex;
  flex-wrap: wrap;

  flex: 1;
  bottom: 0;

  .footfourstack {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;

    @include breakp(tabletmd) {
          padding: 2rem;
          flex-direction: row;
        }
        @include breakp(desktoplg) {
          padding: 3rem;
          flex-direction: row;
        }
  }

  small {
    text-align: center;
    width: 100%;
    flex: 1;
    display: flex;
    bottom: 0;
  }
}

@supports (display: grid) {
  //
}
</style>
