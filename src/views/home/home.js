
import Vue from "vue";

import FeatureImages from '@/components/feature-images/FeatureImages.vue';
import ShadedSection from '@/components/shaded-section/ShadedSection.vue';

var homeView = {
    name: "HomeView",

    components: {
        'feature-images': FeatureImages,
        'shaded-section': ShadedSection
    },

    data: function assignData() {
        return {};
    },

    methods: {},

    mounted: function onMounted() {
        console.info("HomeView mounted", this);
    }
};

export default Vue.extend(homeView);

/**
 * General methods
 */
