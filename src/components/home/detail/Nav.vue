<template>
  <ul class="detail-nav-wrap">      
      <li class="target clearfix" v-for="(tabItem, index) in dataList" :key="index">
            <router-link class="target" :to="tabItem.path">
            {{tabItem.title}}
            </router-link>  
      </li>
  </ul>
</template>

<script>
export default {
    name:'detail-nav',
    components:{

    },
    data(){
        return{
            dataList:[
                {title:"点餐",path:"/home"},
                {title:"评价",path:"/discover"},
                {title:"商家",path:"/order"},
            ]
        }
    }
};
</script>

<style scoped>

.detail-nav-wrap{
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.02rem;
}
.target a{
    line-height: 0.36rem;
    font-size: 0.12rem;
    font-weight: 600;
    display: block;
    height: 100%;
    border-bottom:  0.02rem solid #2395ff;
}
</style>
