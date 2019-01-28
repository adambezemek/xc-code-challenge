<template>
  <header class="xc-header">
    <TheSocialbar />
    <TheNavbar />
  </header>
</template>

<script>
import TheNavbar from "./TheNavbar.vue";
import TheSocialbar from "./TheSocialbar.vue";

export default {
  name: "TheHeader",
  components: {
    TheNavbar,
    TheSocialbar
  }
};
</script>

<style scoped lang="scss">
.xc-header {
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  background-color: $header-bg-color;
  padding: 16px 26px;

  @media screen and (min-width: $md) {
    padding-top: 0px;
  }
}
</style>
