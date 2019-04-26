<template>
  <div>
    <card
      v-for="(card, index) in cards"
      :key="index"
      :title="card.title"
      :imageUrl="card.imageUrl"
      :content="card.content"
      :buttonText="card.buttonText"
      :draggingImage="draggedImage !== ''"
      @can-accept-drop="prepareDrop"
      @start-drag="pickUpPhoto"
      @dropped="dropPhoto"
    ></card>
  </div>
</template>

<script>
import Card from './card'

export default {
  components: {
    Card
  },
  data() {
    return {
      draggedImage: '',
      imageToReplace: '',
      cards: []
    }
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    pickUpPhoto(photo) {
      this.draggedImage = photo
    },
    prepareDrop(photo) {
      this.imageToReplace = photo
    },
    dropPhoto() {
      const targetCards = this.cards.slice(0)
      for (let key in targetCards) {
        const card = this.cards[key]
        if (card.imageUrl === this.draggedImage)
          card.imageUrl = this.imageToReplace
        else if (card.imageUrl === this.imageToReplace)
          card.imageUrl = this.draggedImage
      }
      this.cards = targetCards
      this.imageToReplace = ''
      this.draggedImage = ''
    }
  },
  mounted() {
    this.cards = this.data
  }
}
</script>

<style scoped lang="scss">
div {
  display: flex;
  flex-wrap: wrap;
}
</style>
