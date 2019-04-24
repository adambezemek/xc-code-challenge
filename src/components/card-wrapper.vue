<template>
  <div>
    <card
      v-for="(card, index) in data"
      :key="index"
      :title="card.title"
      :imageUrl="card.imageUrl"
      :content="card.content"
      :buttonText="card.buttonText"
    ></card>
  </div>
</template>

<script>
import Card from './card'

export default {
  components: {
    Card
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
div {
  display: flex;
}
</style>
