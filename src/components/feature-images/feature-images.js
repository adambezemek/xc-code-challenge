
import Vue from "vue";
import { mapActions, mapState } from "vuex";

var FeatureImages = {
  name: "FeatureImages",

  computed: {
    ...mapState({
      featureImages(state) {
        return state.featureImages.all;
      }
    })
  },

  data() {
    return {};
  },

  methods: {
    ...mapActions({
      collectFeatureImages: 'featureImages/collect'
    }),

    init() {
      this.collectFeatureImages();
    }
  },

  mounted() {
    this.init();

    console.info('FeatureImages mounted', this);
  }
};

export default Vue.extend(FeatureImages);

/**
 * General methods
 */

/**
 * Private utilities and methods
 */
