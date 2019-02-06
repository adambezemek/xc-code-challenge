<template>
  <section class="hello">

    <draggable v-model="photos">
      <transition-group>
        <div class="" v-for="item in photos" :key="item.name">
          <section class="swapimg">
            <img :src="item.src"/>
          </section>
          <h2>{{ item.name}}</h2>
            <p>okay</p>
        </div>
      </transition-group>
    </draggable>

  </section>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'SwapSection',
  components: {
    draggable,
  },
  data: function () {
    return {
      photos: [
        { name: 'Introduction to Habitat', src: require('../assets/compguy.jpg') },
        { name: 'Modules', src: require('../assets/tabletlady.jpg') },
        { name: 'Getting Started', src: require('../assets/cardlady.jpg') }

      ]

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
