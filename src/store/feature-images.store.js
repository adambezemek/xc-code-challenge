
import Feature from '../classes/feature.class'
import Image from '../classes/image.class'

var actions = _buildActions()
var mutations = _buildMutations()
var state = {
  features: [],
  images: []
}

export default {
  actions: actions,
  mutations: mutations,
  namespaced: true,
  state: state
}

/**
 * Define Actions
 */
function _buildActions () {
  return {
    assignFeatures ({ commit }, results) {
      return commit('assignFeatures', results)
    },

    assignImages ({ commit }, results) {
      return commit('assignImages', results)
    },

    collect ({ dispatch }) {
      return _MOCK_IMAGES()
        .then(results => dispatch('assignImages', results.data.map(_initImage)))
        .then(_MOCK_FEATURES)
        .then(results => dispatch('assignFeatures', results.data.map(_initFeature)))
        .catch(_onError)

      function _onError (results) {
        console.warn('FeatureImages Store collection failed:', results.error)
      }
    },

    /**
     * The Image associated with a given Feature can change by drag-sort
     * from a different part of the component.
     * We need to reassociate the Images to their correct Feature
     * for correct mobile display as well as saving the configuration.
     */
    resetFeatureImages ({ dispatch, state }) {
      var features = state.features.map(_resetImage)

      dispatch('assignFeatures', features)

      function _resetImage (feature, index) {
        feature.image = state.images[index]

        return feature
      }
    }
  }
}

/**
 * Define Mutations
 */
function _buildMutations () {
  return {
    assignFeatures (state, features) {
      state.features = features
    },

    assignImages (state, images) {
      state.images = images
    }
  }
}

function _initFeature (result) {
  return new Feature(result)
}

function _initImage (result) {
  return new Image(result)
}

/**
 * Mock API calls
 */

function _MOCK_FEATURES () {
  return new Promise(function onSuccess (resolve) {
    var results = {
      data: [{
        cta: {
          target: '_blank',
          text: 'Read more',
          url: 'https://www.google.com/search?q=introduction+to+habitat'
        },
        id: '1',
        image: {},
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
        image: {},
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
        image: {},
        text: `
                <p>Sitecore Helix is a defined methodology with conventions and practices - Habitat is an example implementation available for your understanding.</p>
              `,
        title: 'Getting Started'
      }]
    }

    return resolve(results)
  })
}

function _MOCK_IMAGES () {
  return new Promise(function onSuccess (resolve) {
    var results = {
      data: [{
        alt: 'Developer in the zone',
        filename: 'developer',
        id: '1'
      }, {
        alt: 'Consumer enjoying an audiobook',
        filename: 'consumer',
        id: '2'
      }, {
        alt: 'Restaurateur accepting payment',
        filename: 'restaurateur',
        id: '3'
      }]
    }

    return resolve(results)
  })
}
