<template>
    <nav class="tabs one-border-top">
      <router-link class="tab" v-for="(tabItem, index) in dataList" :key="index" :to="tabItem.path">
      {{tabItem.title}}
      </router-link>
    </nav>
</template>

<script>
export default {
    name:'tabs',
    data(){
        return{
            dataList:[
                {title:"首页",path:"/home"},
                {title:"发现",path:"/discover"},
                {title:"订单",path:"/order"},
                {title:"我的",path:"/mine"}
            ]
        }
    }
};
</script>

<style scoped>
.tabs{
  width: 100%;
  height: 49px;
  display: flex;
  position: absolute;
  bottom: 0;
}
.tab{
  flex: 1;
  text-align: center;
  line-height:49px;
}
.router-link-active{
    color: #0c8edd;
}
</style>