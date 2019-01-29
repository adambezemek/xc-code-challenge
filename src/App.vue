<template>
  <div id="app">
    <TheHeader />
    <TheHero />
    <AppMain />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheHero from "./components/TheHero.vue";
import AppMain from "./components/AppMain.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "app",
  components: {
    TheHeader,
    TheHero,
    AppMain,
    TheFooter
  }
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
}

a {
  text-decoration: none;
}

ul,
ol {
  padding-left: 0;
  list-style-type: none;
}

#app {
  font-family: serif;
}
</style>
