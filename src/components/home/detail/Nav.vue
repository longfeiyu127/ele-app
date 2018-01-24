<template>
  <ul class="detail-nav-wrap">      
      <li class="target clearfix" v-for="(tabItem, index) in dataList" :key="index">
            <p class="targetA" :class="{'targetAction':isShow==index}" @click="tabsSelect(index)">{{tabItem.title}}</p>
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
            ],
            isShow:0,   //0点餐,1评价,2商家   
        }
    },
    methods: {
        tabsSelect(index){
            this.isShow=index;
            this.$emit('cut',index)
        }
    }
};
</script>

<style scoped>
.detail-nav-wrap{
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.02rem;
}
.target .targetA{
    line-height: 0.36rem;
    font-size: 0.12rem;
    font-weight: 200;
    display: block;
    height: 100%;
    border-bottom:  0.02rem solid white;
}
.target .targetAction{
    font-weight: 600;
    border-bottom:  0.02rem solid #2395ff;
}
</style>
