import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@spartez/vue-atlaskit/dist/bundle.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
