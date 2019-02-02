<template>
  <div>
      <draggable v-model="images" :options="{draggable:'.js-draggable'}" @start="drag=true" @end="drag=false">
        <template v-for="(element, index) in images">
          <img class="js-draggable" :src="element.src" :alt="element.alttext" :key="index" />
          <div :key="section[index].name">
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
            [{alttext:'A male typing away at his keyboard.',src:'http://placehold.it/100/000000/ffffff'},
            {alttext:'A female enjoying music while she holds her tablet.',src:'http://placehold.it/100/C93742/ffffff'},
            {alttext:'A female employee being handed a credit card. ',src:'http://placehold.it/100/6894D1/ffffff'}],
    section: [{name:'Introduction to Habitat'},
              {name: 'Modules'},
              {name: 'Getting Started'}]
   }
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
