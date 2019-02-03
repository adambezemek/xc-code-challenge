<template>
  <div>

  <draggable class="l-grid l-grid--one-third-columns@TabletPortraitMedium" :options="{draggable:'.js-draggable'}" @start="drag=true" @end="drag=false">
    <template v-for="(element, index) in images">
      <img class="js-draggable" :class="'l-grid__content--header-'+(index+1)" :src="element.src" :alt="element.alttext" :key="index" />
      <div :key="section[index].name" :class="'l-grid__content--section-'+(index+1)">
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
  grid-template-areas:
    "header1"
    "content1"
    "header2"
    "content2"
    "header3"
    "content3";
}

.l-grid__content--header-1{ grid-area: header1; }
.l-grid__content--header-2{ grid-area: header2; }
.l-grid__content--header-3{ grid-area: header3; }
.l-grid__content--section-1{ grid-area: content1; }
.l-grid__content--section-2{ grid-area: content2; }
.l-grid__content--section-3{ grid-area: content3; }


@media only screen and (min-width: 48em) {
  .l-grid--one-third-columns\@TabletPortraitMedium {
    grid-gap:2rem;
    grid-template-columns: 360px 360px 360px;
    grid-template-areas:
    "header1 header2 header3"
    "content1 content2 content3";
  }
}

</style>