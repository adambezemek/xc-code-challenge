import Vue from 'vue'
import App from './App.vue'
import Vuetify, {
  VApp,
  VLayout,
  VFlex,
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VApp,
    VLayout,
    VFlex,
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
