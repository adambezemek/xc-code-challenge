import Vue from 'vue'

import Router from './router'
import Store from './store'

var apps = document.querySelectorAll('.xc')

apps.forEach(function initApp (appNode) {
  return new Vue({
    el: appNode,

    router: Router,
    store: Store
  });
});
