<template>
  <section class="challenge">
    <draggable v-model="photos">
      <transition-group>
        <div class="three" v-for="item in photos" :key="item.name">
          <img class="yawn" :src="item.src"/>
          <h2>{{ item.name }}</h2>
          <p>{{ item.moreinfo }}</p>
          <button>read more</button>
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
        { 
          name: 'Introduction to Habitat',
          moreinfo: 'Sitecore Habitat is a range of sites demontrasting the capabilities of the Sitecore Experience Platform. The solution is built on the Sitecore Helix guidelines, which focuses on increasing productivity and quality in Sitecore projects.', 
          src: require('../assets/compguy.jpg') 
        },
        { 
          name: 'Modules', 
          moreinfo: 'The Habitat example implementation has a range of modules which covers the basics of a Sitecore website.', 
          src: require('../assets/tabletlady.jpg') 
        },
        { 
          name: 'Getting Started', 
          moreinfo: 'Sitecore Helix a defined methodology with conventions and practises - Habitat ... ', 
          src: require('../assets/cardlady.jpg') 
        }

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
