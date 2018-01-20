
import Vue from 'vue'
import App from './App'             //根组件
import router from './router'       //路由
import store from './store'         //全局数据
import center from './util/center'  //观察者


import './filter/distance'
Vue.prototype.$center = center;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

