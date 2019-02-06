<template>
  <section class="hello">
    <div>
      <img :src="photos[0].src"/>
      <h2>Introduction to Habitat</h2>
      <p>Sitecore Habitat is a range of sites Sitecore Habitat is a range of sites Sitecore Habitat is a range of sites</p>
      <p>Sitecore Habitat is a range of sites Sitecore Habitat is a range of sites</p>
    </div>
    <div>
      <img :src="photos[1].src"/>
      <h2>Modules</h2>
      <p>Sitecore Habitat is a range of sites Sitecore Habitat is a range of sites</p>
    </div>
    <div>
      <img :src="photos[2].src"/>
      <h2>Getting Started</h2>
      <p>Sitecore Habitat is a range of sites Sitecore Habitat is a range of sites</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SwapSection',
  data: function () {
    return {
      photos: [
        { name: 'photo1', src: require('../assets/compguy.jpg') },
        { name: 'photo2', src: require('../assets/tabletlady.jpg') },
        { name: 'photo3', src: require('../assets/cardlady.jpg') }

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
