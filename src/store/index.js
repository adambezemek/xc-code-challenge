import Vue from "vue";
import Vuex from "vuex";

var actions = _buildActions();
var modules = {};
var mutations = _buildMutations();
var state = {};

Vue.use(Vuex);

export default new Vuex.Store({
  actions: actions,
  modules: modules,
  mutations: mutations,
  state: state
});

/**
 * General methods
 */

/**
 * Private & utility methods
 */

function _buildActions() {
  return {};
}

function _buildMutations() {
  return {};
}
