import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../pages/home/Home.vue'
import Detail from '../pages/home/Detail.vue'
import Location from '../pages/home/Location.vue'
import BannerList from '../pages/home/BannerList.vue'
import Search from '../pages/home/Search.vue'

import Discover from '../pages/discover/Discover.vue'
import Order from '../pages/order/Order.vue'
import Mine from '../pages/mine/Mine.vue'

export default new Router({
  routes: [{
      path: '/home',
      alias: '/',
      component: Home,
      children: [
        {
          path:'detail',
          component: Detail,
        },
        {
          path:'location',
          component: Location,
        },
        {
          path:'bannerlist',
          component: BannerList,
        },
        {
          path:'search',
          component: Search,
        },
      ]
    },
    {
      path: '/discover',
      component: Discover
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '**',
      redirect: '/home'
    }
  ]
})
