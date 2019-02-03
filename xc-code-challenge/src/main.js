import "@/css/_settings/xc-code-challenge.css";
import "@/css/base/normalize.css";
import "@/css/base/base.css";
import "@/css/theme/xc-code-challenge.css";
import Vue from 'vue'
import App from './App.vue'
import "@/css/utilities/overrides/visibility.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
