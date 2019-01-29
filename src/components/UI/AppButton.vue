<template>
  <button :class="['xc-button', btnType, btnStyle]"><slot /></button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    btnType: {
      type: String,
      default: "xc-button__pill"
    },
    btnStyle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped lang="scss">
.xc-button {
  border: none;
  display: inline-block;
  cursor: pointer;
  font-family: serif;
  font-weight: 700;

  &.xc-button__pill {
    border: 2px solid $footer-color;
    background-color: transparent;
    font-size: 0.8rem;
    padding: 0 15px;
    line-height: 32px;
    height: auto;
    border-radius: 18px;

    &.xc-button__pill--purple {
      color: $main-color;
    }

    &.xc-button__pill--gray {
      color: $footer-color;
    }
  }

  &.xc-button__download {
    background-color: $download-btn-bg-color;
    color: $footer-color;
    border-radius: $big-radius;
    font-size: 1.2rem;

    padding: 12px 12px;
  }
}
</style>
