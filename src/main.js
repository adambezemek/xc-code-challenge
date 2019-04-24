import Vue from 'vue'
import App from './App.vue'
import StyledButton from './components/globals/styled-button'

Vue.component('styled-button', StyledButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
