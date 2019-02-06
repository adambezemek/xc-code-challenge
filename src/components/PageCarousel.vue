<template>
  <section class="carousel">
    <h1>{{ msg }}</h1>
    
    <p>Something nice can go here </p>
  </section>
</template>

<script>
export default {
  name: 'PageCarousel',
  props: {
    msg: String
  }
}
</script>

