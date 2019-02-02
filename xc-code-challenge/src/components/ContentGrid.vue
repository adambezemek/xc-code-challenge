<template>
  <div>
    <div class="image" v-for="(image, index) in images" v-on:drag="handleDrag" v-on:drop="handleImageDrop">
      <img src="" v-bind:src="image.src" v-bind:id="index" v-bind:title="image.name" align="left">
    </div>
  </div>
</template>

<script>
import 'vue-drag-and-drop';

export default {
  name: 'ContentGrid',

 data() {
   return {
    currentlyDragging: null,
    loggedEvent: '',
    images: [{name:'Image 1',src:'http://placehold.it/100/000000/ffffff'},
                {name:'Image 2',src:'http://placehold.it/100/C93742/ffffff'},
                {name:'Image 3',src:'http://placehold.it/100/6894D1/ffffff'}],
   }
 },
  methods: {
    handleDragStart: function (e) {
      console.log('handleDragStart', e);
      this.loggedEvent = 'handleDragStart';
    },
    handleDragOver: function (e) {
      console.log('handleDragOver', e);
      this.loggedEvent = 'handleDragOver';
    },
    handleDragEnter: function (e) {
      console.log('handleDragEnter', e);
      this.loggedEvent = 'handleDragEnter';
    },
    handleDragLeave: function (e) {
      console.log('handleDragLeave', e);
      this.loggedEvent = 'handleDragLeave';
    },
    handleDragEnd: function (e) {
      console.log('handleDragEnd', e);
      this.loggedEvent = 'handleDragEnd';
    },
    handleDrop: function (e) {
      console.log('handleDrop', this.currentlyDragging, e.target);
      this.currentlyDragging = null;
      this.loggedEvent = 'handleDrop';
    },
    handleImageDrop: function (e) {
      console.log('handleImageDrop', this.currentlyDragging, e.target);
      this.currentlyDragging = null;
      this.loggedEvent = 'handleImageDrop';
    },
    handleDrag: function (e) {
      console.log('handleDrag', e);
      this.loggedEvent = 'handleDrag';
      if (!this.currentlyDragging) {
        this.currentlyDragging = e.srcElement;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 /* Prevent the text contents of draggable elements from being selectable. */
    [draggable] {
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }
    .dragging {
      opacity: 0.8;
      color: #6894D1;
    }
    .drag-over {
      outline: 1px solid red;
    }
    .drag-enter {
      color: #C93742;
    }
</style>
