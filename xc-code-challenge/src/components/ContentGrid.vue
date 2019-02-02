<template>
  <div>

      <draggable v-model="images"  @start="drag=true" @end="drag=false">
        <div v-for="(image, index) in images" :key="image+index">
          <img v-bind:src="image.src" >
        </div>
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
    images: [{name:'Image 1',src:'http://placehold.it/100/000000/ffffff'},
                {name:'Image 2',src:'http://placehold.it/100/C93742/ffffff'},
                {name:'Image 3',src:'http://placehold.it/100/6894D1/ffffff'}],
   }
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
