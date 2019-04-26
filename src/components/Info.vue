<template>
  <section
    id="Info"
    class="section"
  >
    <div
      v-for="(image, ind) in imageAndInfo"
      :key="'dynamic-image-' + ind"
      class="column info-tile"
    >
      <div
        class="column"
        @drop="handleDrop"
        @dragover="handleDragover($event, ind)"
      >
        <img
          :src="image.img"
          :alt="image.alt"
          draggable="true"
          :data-ele-location="ind"
          @dragstart="handleDragStart($event, ind)"
        >
      </div>
      <div
        class="column info-container"
      >
        <div class="header">
          {{ image.header }}
        </div>
        <p
          v-for="(par, pInd) in image.description.split('.').filter(str => str.length)"
          :key="'dynamic-image-paragraph-' + par.header + pInd"
        >
          {{ par }}.
        </p>
        <button class="btn">
          <a :href="image.link">
            Read more
          </a>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      /**
       *  List of image locations, and image alts.
       *  This list is used for rendering images.
       */
      dynamicImages: [
        {
          img: '/../../static/img/man-on-computer.png',
          alt: 'A man working on a computer'
        },
        {
          img: '/../../static/img/lady-on-stairs.png',
          alt: 'A lady sitting on some stairs'
        },
        {
          img: '/../../static/img/lady-taking-card.png',
          alt: 'A lady accepting a credit card'
        }
      ],
      /**
       *  List of tile info.
       *  This list always maintains the same order.
       *  It is merged into 'dynamicImages' by computed property 'imageAndInfo'
       */
      info: [
        {
          header: 'Introduction to Habitat',
          description: 'Sitecore Habitat is a range of sites demonstrating the capabilities of the Sitecore Experience Platform. The solution is built on the Sitecore Helix guidelines, which focuses on increasing productivity and quality in Sitecore projects.',
          link: '#'
        },
        {
          header: 'Modules',
          description: 'The Habitat example implementation has a range of modules which covers the basics of a Sitecore website.',
          link: '#'
        },
        {
          header: 'Getting Started',
          description: 'Sitecore Helix a defined methodology with conventions and practices - Habitat is an example implementation available for your understanding.',
          link: '#'
        }
      ],
      currentDraggedIndex: 0
    }
  },
  computed: {
    /**
     * Combines images with info while maintaining correct order for info
     * @return {(({link, header, description} & {img, alt}))[]}
     */
    imageAndInfo () {
      return this.dynamicImages.map((image, index) => {
        return Object.assign((this.info[index] || {}), image)
      })
    }
  },
  methods: {
    /**
     * updates currently dragged index
     * @param evt
     * @param dragInd
     */
    handleDragStart (evt, dragInd) {
      this.currentDraggedIndex = dragInd
    },
    /**
     * handles dragover event, prevents default drag over behaviour
     * @param evt
     */
    handleDragover (evt) {
      evt.preventDefault()
    },
    /**
     * Creates a copy of both the dragged image and the dropped on image
     * then swaps the two images. Computed property 'imageAndInfo' maintains
     * correct order of associated info.
     * @param evt
     */
    handleDrop (evt) {
      const overEle = evt.toElement.attributes['data-ele-location'].value
      const copiedOver = Object.assign({}, this.dynamicImages[overEle])
      const copiedDragged = Object.assign({}, this.dynamicImages[this.currentDraggedIndex])
      this.dynamicImages.splice(this.currentDraggedIndex, 1, copiedOver)
      this.dynamicImages.splice(overEle, 1, copiedDragged)
    }
  }
}
</script>

<style scoped lang="sass">
@import '../styles/common.sass'
#Info
  background-color: $white
  color: $light-blue
  justify-content: space-around
  padding: 5rem 10rem
  .info-tile
    margin: 1rem
    justify-content: space-between
    width: 22rem
    img
      width: 100%
      height: auto
    img:hover
      cursor: grab
  .column
    justify-content: space-between
    flex: 1
  .info-container
    justify-content: flex-start
    margin-top: 2rem
    .btn
      border-color: $light-blue
      a
        color: $light-blue
</style>
