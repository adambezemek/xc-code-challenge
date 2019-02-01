import "@/css/_settings/xc-code-challenge.css";
import "@/css/base/normalize.css";
import "@/css/base/base.css";
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
