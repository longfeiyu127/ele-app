<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabs></tabs> 
  </div>
</template>

<script>
import Vuex from 'vuex'
import Tabs from './common/Tabs.vue'

import {getAddress} from './service/LocationService'
export default {
  components:{
    [Tabs.name]:Tabs
  },
  computed: {
    ...Vuex.mapState({
      lon:'longitude',
      lat:'latitude',
      address:'address'
    }),
  },
  created(){
    //触发定位
    this.$store.dispatch('getLocationActive')
    .then(()=>{
      if(this.lon&&this.lat){
        getAddress(this.lat,this.lon).then(data=>{
          this.$store.dispatch('modifyAddressAction',data.name)
        })
      }
    })
  },
}
</script>

<style scoped>
#app{
  height: 100%;
  width: 100%;
  background: #f5f5f5;
}
</style>
