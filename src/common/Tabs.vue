<template>
    <nav class="tabs one-border-top">
        <router-link class="tab" v-for="(tabItem, index) in dataList" :key="index" :to="tabItem.path">
            <i class="iconfont icon">&#xe722;</i>
            <span class="icon-txt">{{tabItem.title}}</span>
        </router-link>
    </nav>
</template>

<script>
export default {
    name:'tabs',
    data(){
        return{
            dataList:[
                {title:"首页",path:"/home",incon:'&#xe722;'},
                {title:"发现",path:"/discover",incon:'&#xe746;'},
                {title:"订单",path:"/order",incon:'&#xe605;'},
                {title:"我的",path:"/mine",incon:'&#xe653;'}
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
  background: white;
}
.tab{
  flex: 1;
  text-align: center;
  color: #818181;
}
.icon{
    display: block;
    font-size: 0.32rem;
    line-height: 0.18rem;
    margin: 0.1rem 0 0;
}
.icon-txt{
    font-size: 0.09rem;
}
.router-link-active{
    color: #0c8edd;
}
</style>