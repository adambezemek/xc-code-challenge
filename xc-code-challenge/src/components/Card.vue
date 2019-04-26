<template>
  <v-flex class="card">
    <img class="image" :alt="cardData.alt" src="https://picsum.photos/275/300" />
    <h2>{{cardData.title}}</h2>
    {{cardData.text}}
    <div class="btn">
      <button>Read More</button>
    </div>
  </v-flex>
</template>

<script>
export default {
  props: {
    cardData: {
      required: true,
      type: Object,
    }
  }
}
</script>

<style lang="stylus" scoped>
.card
  padding: 20px
  color: #7aa0bc

.btn
  padding-top: 15px

button
  font-weight: bold
  font-size: .9em
  text-decoration: none
  border: 2px solid #7aa0bc
  border-radius: 25px
  padding: 7px
  display: inline-block
  color: #7aa0bc

.image
  width: 100%

</style>
