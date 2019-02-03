<template>
  <div>

  <draggable class="c-content-grid" :options="{draggable:'.js-draggable'}" @start="drag=true" @end="drag=false">
    <template v-for="(element, index) in images">
      <img class="js-draggable c-content-grid__header" :src="element.src" :alt="element.alttext" :key="index" />
      <div :key="section[index].name" class="c-content-grid__section">
        <h2 v-text="section[index].name"></h2>
        <div v-html="section[index].content">
        </div>
        <a :href="section[index].url">Read More</a>
      </div>
    </template>
  </draggable>

  </div>
</template>


<script>
import draggable from 'vuedraggable'

export default {
  name: 'ContentGrid',
  components: {
    draggable
  },
 data() {
   return {
    currentlyDragging: null,
    loggedEvent: '',
    images:
            [{alttext:'A male typing away at his keyboard.',src:'/images/Male-Typing-At-Keyboard.jpg'},
            {alttext:'A female enjoying music while she holds her tablet.',src:'/images/Female-Listening-To-Music.jpg'},
            {alttext:'A female employee being handed a credit card. ',src:'/images/Female-Employee-With-Credit-Card.jpg'}],
    section: [{name:'Introduction to Habitat', content: '<p>Sitecore Habitat is a range of sites demonstrating the capabilities of the Sitecore Experience Platform.</p><p>The solutions is built on the Sitecore Helix guidelines, which focuses on increasing productivity and quality in Sitecore projects.</p>', url: 'https://example.com'},
              {name: 'Modules', content: '<p>The habitat example implementation has a range of modules which covers the basics of a Sitecore website.</p>', url: 'https://example.com'},
              {name: 'Getting Started', content: '<p>Sitecore Helix a defined methodology with conventions and practises - Habitat is an example implementation available for your understanding.</p>', url: 'https://example.com'}]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.c-content-grid
{
  display: grid;
  grid-gap:1rem;
}

@media only screen and (min-width: 48em) {
  .c-content-grid
  {
    grid-gap:2rem;
    grid-template-columns: repeat(3, minmax(30%, 360px));
  }

  .c-content-grid__header
  {
    grid-area: 1;
  }
  .c-content-grid__section
  {
    grid-area: 2;
  }
}

</style>