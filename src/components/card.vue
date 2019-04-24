<template>
  <section class="card">
    <img :src="imageUrl">
    <h2>{{ title }}</h2>
    <p v-for="(p,index) in content" :key="index">{{ p }}</p>
    <styled-button>{{ buttonText }}</styled-button>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: Array,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/_variables.scss';

.card {
  padding: 1rem;

  img {
    width: 100%;
  }

  h2 {
    color: $green;
  }

  p {
    color: $green;
  }
}

@media only screen and (min-width: 426px) {
  .card {
    flex: 1;
  }
}

@media only screen and (max-width: 767px) {
  /* phones */
}
</style>
