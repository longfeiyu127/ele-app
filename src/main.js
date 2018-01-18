
import Vue from 'vue'
import App from './App'
import router from './router'

import './filter/distance'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

