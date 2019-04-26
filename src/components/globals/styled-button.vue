<template>
  <button type="button" :class="colorClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    white: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    colorClass() {
      return this.white ? 'white' : 'blue'
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/_variables.scss';

button {
  border: 2px solid;
  border-radius: 50px;
  padding: 0.25rem 0.5rem;
  font-weight: bold;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;

  &.white {
    color: white;
    border-color: white;
  }

  &.blue {
    color: $dark-blue;
    border-color: dark-blue;
  }
}
</style>
