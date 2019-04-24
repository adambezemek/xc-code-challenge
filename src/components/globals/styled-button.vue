<template>
  <button type="button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@import '../../assets/scss/_variables.scss';

button {
  border: 2px solid $dark-blue;
  color: $dark-blue;
  border-radius: 50px;
  padding: 0.25rem 0.5rem;
  font-weight: bold;
  font-size: 16px;
  background-color: white;
}
</style>
