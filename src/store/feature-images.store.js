
import FeatureImage from '../classes/feature-image.class';

var actions = _buildActions();
var mutations = _buildMutations();
var state = {
    active: {},
    all: []
};

export default {
    actions: actions,
    mutations: mutations,
    namespaced: true,
    state: state
};

function _buildActions() {
    return {
        assign({ commit }, results) {
            var featureImages = results.data.map(result => new FeatureImage(result));

            commit('assign', featureImages);
        },

        collect({ dispatch }) {
          var imagesPromise = _MOCK(); // replace with API call

          return imagesPromise.then(results => dispatch('assign', results));
        },

        resetActive({ commit, state }, featureImage) {
            var activeFeatureImage = !state.active.id || state.active.id !== featureImage.id ? featureImage : {};

            commit('updateActive', activeFeatureImage);
        }
    };
}

function _buildMutations() {
    return {
        assign(state, featureImages) {
            state.all = featureImages;
        },

        updateActive(state, featureImage) {
            state.active = featureImage;
        }
    };
}

function _MOCK() {
    return new Promise(function onSuccess(resolve) {
        var results = {
            data: [{
              cta: {
                target: '_blank',
                text: 'Read more',
                url: 'https://www.google.com/search?q=introduction+to+habitat'
              },
              id: '1',
              image: {
                alt: 'Developer in the zone',
                filename: 'developer',
                id: '1'
              },
              text: `
                <p>Sitecore Habitat is a range of sites demonstrating the capabilities of the Sitecore Experience Platform.</p>
                <p>The solution is built on the Sitecore Helix guidelines, which focuses on increasing productivity and quality in Sitecore projects.</p>
              `,
              title: 'Introduction to Habitat'
            }, {
              cta: {
                target: '_blank',
                text: 'Read more',
                url: 'https://www.google.com/search?q=modules'
              },
              id: '2',
              image: {
                alt: 'Consumer enjoying an audiobook',
                filename: 'consumer',
                id: '2'
              },
              text: `
                <p>The Habitat example implementation has a range of modules which covers the basics of a Sitecore website.</p>
              `,
              title: 'Modules'
            }, {
              cta: {
                target: '_blank',
                text: 'Read more',
                url: 'https://www.google.com/search?q=getting+started'
              },
              id: '3',
              image: {
                alt: 'Restaurateur accepting payment',
                filename: 'restaurateur',
                id: '3'
              },
              text: `
                <p>Sitecore Helix is a defined methodology with conventions and practices - Habitat is an example implementation available for your understanding.</p>
              `,
              title: 'Getting Started'
            }]
        };

        return resolve(results);
    });
}
