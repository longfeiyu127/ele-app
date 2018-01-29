<template>
<sub-page-static>
    <div class="choice-wrap">
        <div class="choice-box">
            <header class="header one-border-bottom">
                <h5>请选择分类</h5>
                <i @click="close">×</i>
            </header>
            <div class="box-main">
                <ul class="main-list">
                    <li
                    :class="{'list-active':index==isShowIndex}"
                    @click="ShowIndex(index)"
                    v-for="(item,index) in categoriesData"
                    :key="index">
                        <span>{{item.name}}</span>
                        <i>{{item.count}}</i>
                    </li>
                </ul>
                <ul class="main-section" v-if="isShowIndex!=null">
                    <li
                    @click="choiceData(index)"
                    :class="{'main-active':index==isShowTarget}"
                    v-for="(item,index) in categoriesData[isShowIndex].sub_categories" :key="index">
                        <div>
                            <img :src="item.img" alt="" class="main-section-img">
                            <span>{{item.name}}</span>
                        </div>
                        <i>{{item.count}}</i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</sub-page-static>
</template>

<script>
import Vuex from 'vuex'
import SubpageStatic from '../../../common/SubpageStatic'

import {getCategories} from '../../../service/BannerListService'

export default {
    name:'choice-box',
    components:{
         [SubpageStatic.name]: SubpageStatic,
    },
    data(){
        return{
            categoriesData:[],
            activeCategories:[],
            isShowIndex:null,
            isShowTarget:null,
        }
    },
    computed: {
        ...Vuex.mapState({
        lon:'longitude',
        lat:'latitude',
        address:'address'
        }),
    },
    methods: {
        //关闭当前页面
        close(){
            this.$emit('closeShow')
        },
        //显示选中卡片
        ShowIndex(index){
            this.isShowIndex=index
        },
        //选中分类
        choiceData(index){
            this.isShowTarget=index;
            this.$emit('updataAll',this.categoriesData,this.isShowIndex,this.isShowTarget);
            this.close();
        }
    },
    mounted () {
        //获得页面数据
        getCategories(this.lat,this.lon).then(data=>{
            console.log(data);
            this.categoriesData=data;
            this.isShowIndex=0;
            this.isShowTarget=0;
        })


        //触发重新请求数据
        // this.$center.$on('getActiveData',(data)=>{
        //     this.atciveData=data
        // })
    }
    
};
</script>

<style scoped lang='scss'>
.choice-wrap{
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5)
}
.choice-box{
    background: white;
}
.header{
    background: #f9f9f9;
    line-height: 0.38rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.16rem;
    box-sizing: border-box;
}
.header h5{
    color: #333333;
    font-size: 0.12rem;
    font-weight: 1000;
}
.header i{
    color: #999999;
    font-size: 0.18rem;
    font-weight: 1000;
}
.box-main{
    height: 3.08rem;
}
.box-main ul{
    height: 100%;
    overflow-y: auto;
}
.main-list{
    width: 1.25rem;
    float: left; 
    background: #fcfcfc;
}
.main-list li{
    display: flex;
    justify-content: space-between;
    padding: 0.14rem 0 0.13rem;
    align-items: center;
}
.main-list .list-active {
    background: white;
}
.main-list .list-active span{
    border-left: 0.04rem solid #2395ff;
}
.main-list li span{
    display: inline-block;
    padding-left: 0.16rem;
    border-left: 0.04rem solid white;
    font-size: 0.12rem;
    color: #666666;
    line-height: 0.2rem;
}
.main-list li i,.main-section li i{
    display: inline-block;
    border: 0.01rem solid #eeeeee;
    border-radius:0.06rem;
    text-align:center;
    width: 0.27rem;
    font-size: 0.08rem;
    color: #999999;
    margin-right:0.11rem;
    height: 0.11rem;
}
.main-section{
    float: left;
    width: 2.35rem;
    box-sizing: border-box;
    padding: 0 0.14rem 0 0.2rem;
}
.main-section li{
    height: 0.35rem;
    padding: 0.05rem 0 0.06rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.main-section .main-active{
    color: #2395ff;
    font-weight: 600;
}
.main-section .main-active i{
    background: #2395ff;
    color: white;
}
.main-section li img{
    width: 0.35rem;
    height: 0.35rem;
    float: left;
    margin-right: 0.13rem;
    border: 0;
}
.main-section li span{
    line-height: 0.35rem;
    font-size: 0.12rem;
}
</style>