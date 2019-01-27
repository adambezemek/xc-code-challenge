
import Draggable from 'vuedraggable'
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

var FeatureImages = {
  name: 'FeatureImages',

  components: {
    'draggable': Draggable
  },

  computed: {
    ...mapState({
      features (state) {
        return state.featureImages.features
      },

      images (state) {
        return state.featureImages.images
      }
    }),

    /**
     * Computed value used to keep state mutations in the store
     */
    sortedImages: {
      get () {
        return this.images
      },

      set (images) {
        this.assignImages(images)
      }
    }
  },

  data () {
    return {
      dragOptions: {
        draggable: '.xc-feat-imgs__col--image'
      }
    }
  },

  methods: {
    ...mapActions({
      assignImages: 'featureImages/assignImages',
      collectFeatureImages: 'featureImages/collect',
      resetFeatureImages: 'featureImages/resetFeatureImages'
    }),

    init () {
      this.collectFeatureImages().then(this.resetFeatureImages)
    }
  },

  mounted () {
    this.init()
  }
}

export default Vue.extend(FeatureImages)
