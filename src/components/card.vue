<template>
  <section class="card">
    <img
      :src="imageUrl"
      @dragover.prevent
      @dragenter="acceptDrop($event)"
      @dragstart="$emit('start-drag', imageUrl)"
      @drop="$emit('dropped')"
      @dragleave="stopDrop"
      :class="{dragover: canDrop}"
    >
    <h2>{{ title }}</h2>
    <p v-for="(p,index) in content" :key="index">{{ p }}</p>
    <styled-button>{{ buttonText }}</styled-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      canDrop: false
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: Array,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    draggingImage: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    acceptDrop(event) {
      if (this.draggingImage !== this.imageUrl) {
        event.preventDefault()
        this.$emit('can-accept-drop', this.imageUrl)
        this.canDrop = true
      }
    },
    stopDrop() {
      this.canDrop = false
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/_variables.scss';

.card {
  padding: 1rem;

  img {
    width: 100%;

    &.dragover {
      filter: brightness(50%);
    }
  }

  h2 {
    color: $green;
  }

  p {
    color: $green;
  }
}

@media only screen and (min-width: 426px) {
  .card {
    flex: 1;
  }
}

@media only screen and (max-width: 767px) {
  /* phones */
}
</style>
