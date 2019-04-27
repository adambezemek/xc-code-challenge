import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe, faUser, faSearch, faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGlobe, faUser, faSearch, faBars, faCaretDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable-next-line no-new */
new Vue({
  el: '#App',
  render: h => h(App)
})
