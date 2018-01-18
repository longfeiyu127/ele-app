
import Vue from 'vue'
import App from './App'
import router from './router'
import center from './util/center'


import './filter/distance'
Vue.prototype.$center = center;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

