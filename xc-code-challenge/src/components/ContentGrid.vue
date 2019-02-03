<template>
  <div>

  <draggable class="l-grid l-grid--one-third-columns@TabletPortraitMedium" :options="{draggable:'.js-draggable'}" @start="drag=true" @end="drag=false">
    <template v-for="(element, index) in images">
      <img class="js-draggable l-grid__content--header" :src="element.src" :alt="element.alttext" :key="index" />
      <div :key="section[index].name" class="l-grid__content--section">
      {{section[index].name}}
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
    section: [{name:'Introduction to Habitat'},
              {name: 'Modules'},
              {name: 'Getting Started'}]
   }
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.l-grid {
  display: grid;
  grid-gap:1rem;
}



@media only screen and (min-width: 48em) {
  .l-grid--one-third-columns\@TabletPortraitMedium {
    grid-gap:2rem;
    grid-template-columns: repeat(3, minmax(30%, 360px));
  }

  .l-grid__content--header{ grid-area: 1; }
  .l-grid__content--section{ grid-area: 2; }
}

</style>