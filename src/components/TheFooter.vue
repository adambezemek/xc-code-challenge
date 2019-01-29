<template>
  <footer class="xc-footer">
    <TheFooterPromo />
    <TheFooterNav />
  </footer>
</template>

<script>
import TheFooterPromo from "./TheFooterPromo.vue";
import TheFooterNav from "./TheFooterNav.vue";

export default {
  name: "TheFooter",
  components: {
    TheFooterPromo,
    TheFooterNav
  }
};
</script>

<style scoped lang="scss">
.xc-footer {
  background-color: #3b505b;
}
</style>
