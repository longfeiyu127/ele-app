<template>
<sub-page-static>
    <div class="filtrate-wrap" v-if="filtrateData.delivery_mode">
       <div class="box">
            <div class="filtrate-list">
                <h4 class="filtrate-title">配送方式</h4>
                <ul class="filtrate-main">
                    <li class="filtrate" @click="RadioFiltrate('delivery_mode',filtrateData.delivery_mode.id)">
                        <i></i>
                        <span>{{filtrateData.delivery_mode.text}}</span>
                        <div class="selectActive" v-show="delivery_mode">
                            <i class="iconfont">&#xe74c;</i>
                            <span>{{filtrateData.delivery_mode.text}}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="filtrate-list" >
                <h4 class="filtrate-title">优惠活动</h4>
                <ul class="filtrate-main">
                    <li class="filtrate" 
                    @click="RadioFiltrate('activity_types',item.id)"
                    v-for="(item, index) in filtrateData.activity_types" 
                    :key="index">
                        <i :style="{background: '#'+item.icon_color}">{{item.icon_name}}</i>
                        <span>{{item.name}}</span>
                        <div class="selectActive" v-show="activity_types==item.id">
                            <i class="iconfont">&#xe74c;</i>
                            <span>{{item.name}}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="filtrate-list" >
                <h4 class="filtrate-title">人均消费</h4>
                <ul class="filtrate-main">
                    <li class="filtrate" 
                    @click="RadioFiltrate('average_cost_ids',item.id)"
                    v-for="(item, index) in filtrateData.average_costs" :key="index">
                        <span>{{item.description}}</span>
                        <div class="selectActive" v-show="average_cost_ids==item.id">
                            <i class="iconfont">&#xe74c;</i>
                            <span>{{item.description}}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="filtrate-list" >
                <h4 class="filtrate-title">商家属性(可多选)</h4>
                <ul class="filtrate-main">
                    <li class="filtrate" 
                    @click="CheckFiltrate(index,item.id)"
                    v-for="(item, index) in filtrateData.supports" :key="index">
                        <i class="sellerIcon"
                        :style="{color: '#'+item.icon_color,borderColor: '#'+item.icon_color}">{{item.icon_name}}</i>
                        <span>{{item.name}}</span>
                        <div class="selectActive" v-show="support_ids[index]" ref="acive">
                            <i class="iconfont">&#xe74c;</i>
                            <span>{{item.name}}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="btnList">
                <div class="empty" @click="empty">清空</div>
                <div class="confirm" @click="confirm">确定</div>
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
    name:'filtrate-box',
    components:{
         [SubpageStatic.name]: SubpageStatic,
    },
    data(){

        return{
            delivery_mode:null,   //配送方式
            activity_types:null,  //优惠活动
            average_cost_ids:null,    //人均消费
            support_ids:[null,null,null,null,null,null],         //商家属性
        }
    },
    props:{
        filtrateData:Object
    },
    computed: {
  
    },
    watch:{
        // delivery_mode(){
        //     // console.log('监听到了')
        // }
    },
    methods: {
        //关闭窗口
        close(){
            this.$emit('close')
        },
        //单选内容
        //
        RadioFiltrate(type,id){
            //处理数据
            this[type]=this[type]==id?null:id;
        },
        //复选内容
        CheckFiltrate(index,id){
            this.support_ids[index]=this.support_ids[index]?null:id;
            // console.log(this.support_ids[index])
            if(this.support_ids[index]){
                this.$refs.acive[index].style.cssText="display: block"
            }else{
                this.$refs.acive[index].style.cssText="display: none"
            }
        },
        //点击清空
        empty(){
            this.delivery_mode=null;  
            this.activity_types=null;  
            this.average_cost_ids=null;  
            this.support_ids=[null,null,null,null,null,null];  
            this.$refs.acive.map(item=>{
                item.style.cssText="display: none"
            })
        },
        //点击确定
        confirm(){
            let delivery_mode=[this.delivery_mode];
            let activity_types=[this.activity_types];
            let average_cost_ids=[this.average_cost_ids];
            let support_ids=this.support_ids;
            console.log(support_ids);
            this.$emit('confirm',delivery_mode,activity_types,average_cost_ids,support_ids);
            this.close();
        }
    },
    mounted () {
        
    }
    
};
</script>

<style scoped>
.filtrate-wrap{
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 10;
    background: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    padding-top: 1.22rem;
}
.box{
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
}
.filtrate-list{
    background: #fafafa;
}
.filtrate-title{
    line-height: 0.11rem;
    font-size: 0.11rem;
    height: 0.11rem;
    padding: 0.11rem 0.15rem;
}
.filtrate-main{
    display: flex;
    flex-wrap: wrap;
    background: white;
}
.filtrate{
    width: 33.33%;
    box-sizing: border-box;
    padding-left: 0.11rem;
    border: 1px solid #eeeeee;
    height: 0.32rem;
    line-height: 0.32rem;
    color: #333333;
    font-size: 0.11rem;
    display: flex;
    align-items: center;
    position: relative;
}
.filtrate i{
    display: inline-block;
    height: 0.14rem;
    width: 0.14rem;
    margin-right: 0.06rem;
    border-radius: 0.015rem;
    font-size: 0.09rem;
    text-align: center;
    line-height: 0.14rem;
    color: white;
    box-sizing: border-box;
}
.selectActive{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: #edf5ff;
    color: #3190e8;
    box-sizing: border-box;
    padding-left: 0.11rem;
}
.selectActive i{
    color: #3190e8;
    margin-right: 0.03rem;
}
.sellerIcon{
    border: 1px solid #000;
}
.btnList{
    background: #fafafa;
    display: flex;
}
.btnList div{
    width: 50%;
    box-sizing: border-box;
    text-align: center;
    height: 0.42rem;
    line-height: 0.42rem;
    margin-top: 0.1rem;
    font-size: 0.14rem;
    font-weight: 600;
}
.empty{
    color: #dedede;
    background: white;
}
.confirm{
    color: white;
    background: #00d762;
}
</style>