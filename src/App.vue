<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabs></tabs> 
  </div>
</template>

<script>
import Tabs from './common/Tabs.vue'
export default {
  components:{
    [Tabs.name]:Tabs
  }
}
</script>

<style scoped>
#app{
  height: 100%;
  width: 100%;
  background: #f5f5f5;
}
</style>
