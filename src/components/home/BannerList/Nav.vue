<template>
<div class="wrap">
    <div class="bannerList-nav-wrap"> 
            <div class="box">
                <ul class="bannerList-nav-box">   
                    <li class="target clearfix" v-for="(tabItem, index) in dataList" :key="index">
                        <p class="targetA" 
                        :class="{'targetAction':isShowIndex==index}" 
                        @click.stop="tabsSelect(index)">{{tabItem.name}}</p>
                    </li>
                </ul> 
            </div> 
            <div class="choice-list one-border-left" >
                <i class="iconfont"  @click.stop="showChoiceBox">&#xe600;</i>
            </div>
    </div>
    <ul class="filtrate-wrap one-border-bottom">
            <li @click="()=>{ShowFiltrateMin=!ShowFiltrateMin}">
                <span :class="{activeSpan:order_bySelect}">{{order_bySelect?order_bySelect.name:'综合排序'}}</span>
                <i class="iconfont">&#xe600;</i>
            </li>
            <li :class="{activeSpan:order_bySelect==near}" @click="selectNear"><span>距离最近</span></li>
            <li :class="{activeSpan:super_vip==1}" @click="selectRedPacket"><i class="iconfont">&#xe600;</i><span>会员红包</span></li>
            <li @click="()=>{ShowFiltrateBox=!ShowFiltrateBox}">
                <span :class="{activeSpan:activity_types[0]||support_ids[0]||delivery_mode[0]||average_cost_ids[0]}">筛选</span>
                <i class="iconfont">&#xe600;</i>
            </li>
    </ul>
    <ul class="filtrate-min one-border-bottom" v-if="ShowFiltrateMin">
        <li  
        @click="selectSort(index)"
        v-for="(item,index) in filtrateMinData" 
        :key="index">{{item.name}}</li>
    </ul>
    <!-- 弹出选择框 -->
    <choice-box v-show="isShow" 
    @updataAll='handleUpdataAll'
    @closeShow='closeChoiceBox'></choice-box>
    <!-- 弹出大筛选框 -->
    <filtrate-box v-show="ShowFiltrateBox" 
    :filtrateData='filtrateData' 
    @confirm='selectFiltrate'
    @close='()=>{ShowFiltrateBox=!ShowFiltrateBox}'></filtrate-box>
</div>

</template>

<script>
import Vuex from 'vuex'
import ChoiceBox from './ChoiceBox'
import FiltrateBox from './FiltrateBox'
import {getDataList} from '../../../service/BannerListService'
import {getDataMain} from '../../../service/BannerListService'
import {getFiltrateDatat} from '../../../service/BannerListService'
export default {
    name:'bannerList-nav',
    components:{
        [ChoiceBox.name]:ChoiceBox,
        [FiltrateBox.name]:FiltrateBox,
    },
    data(){
        return{
            near:{name:'距离最近',order_by:5},
            dataList:[],
            isShow:0,   //选中的index   
            limit:8,
            mainList:[],
            isShowIndex:-1,
            isShow:false,
            ShowFiltrateMin:false,
            ShowFiltrateBox:false,
            filtrateData:{},
            filtrateMinData:[
                {name:'综合排序',order_by:0},
                {name:'销量最高',order_by:6},   //5 距离最近
                {name:'起送最低',order_by:1},
                { name:'配送最快',order_by:2},
            ],
            order_bySelect:null,
            activity_types:[null],
            support_ids:[null],
            delivery_mode:[null],
            average_cost_ids:[null],
            super_vip:null,
        }
    },
    computed: {
        ...Vuex.mapState({
        lon:'longitude',
        lat:'latitude',
        address:'address'
        }),
        offset(){
            return this.mainList.length
        },
    },
    methods: {
        //选择类型  重新请求数据
        tabsSelect(index){
            this.$emit('navList',[]);
            this.isShowIndex=index;
            this.getDataMainHandle(index);
        },
        //获取列表数据
        getDataListHandle(){
            return new Promise((resolve,reject)=>{
                getDataList(this.lat,this.lon,this.$route.query.entry_id).then(data=>{
                    this.dataList=data;
                    // console.log(this.dataList)
                    resolve(data);
                })
            })
        },
        //获取详细数据
        getDataMainHandle(index){
            // console.log(index)
            getDataMain(this.lat,this.lon,this.dataList[index].name,this.offset,this.limit,this.dataList[index].restaurant_category_ids)
            .then(data=>{
                this.mainList=data;
                //将数据传给父元素
                this.$emit('navList',data)
            })
        },
        //获取更多数据
        getMoerDataMainHandle(){
            console.log('触发了加载更多')
            getDataMain(this.lat,
                        this.lon,
                        this.dataList[this.isShowIndex].name,
                        this.offset,
                        this.limit,
                        this.dataList[this.isShowIndex].restaurant_category_ids,
                        this.order_bySelect?this.order_bySelect.order_by:null,
                        this.activity_types,
                        this.support_ids,
                        this.delivery_mode,
                        this.average_cost_ids,
                        this.super_vip,)
            .then(data=>{
                //将数据传给父元素
                this.mainList=this.mainList.concat(data);
                this.$emit('navList',this.mainList);
            })
        },
        //获取筛选的数据数据
        getSelectDataMainHandle(){
            console.log('触发了筛选加载')
            getDataMain(this.lat,
                        this.lon,
                        this.dataList[this.isShowIndex].name,
                        this.offset,
                        this.limit,
                        this.dataList[this.isShowIndex].restaurant_category_ids,
                        this.order_bySelect?this.order_bySelect.order_by:null,
                        this.activity_types,
                        this.support_ids,
                        this.delivery_mode,
                        this.average_cost_ids,
                        this.super_vip,)
            .then(data=>{
                //将数据传给父元素
                this.mainList=data;
                this.$emit('navList',this.mainList);
            })
        },
        //展示全部选择框
        showChoiceBox(){
            this.isShow=true;
        },
        closeChoiceBox(){
            this.isShow=false;
        },
        //选择分类后  页面重新加载数据
        handleUpdataAll(data,i,j){
            //重新渲染列表数据
            let newData=data[i].sub_categories.map(item=>{
                return {
                    name:item.name,
                    restaurant_category_ids:data[i].ids
                }
            })
            this.dataList=newData;
            this.isShowIndex=j;
            //清空数据
            this.$emit('navList',[]);
            //重新加载页面数据
            this.getDataMainHandle(j);
        },
        //选择排序的方式
        selectSort(index){
            this.order_bySelect = this.order_bySelect == this.filtrateMinData[index] ? null :this.filtrateMinData[index];
            //关闭选择框
             this.ShowFiltrateMin=false;
            //请求筛选数据
            this.getSelectDataMainHandle();
        },
        //选择距离最近
        selectNear(){
            this.order_bySelect=this.order_bySelect==this.near?null:this.near;
            // console.log(this.order_bySelect);
            this.getSelectDataMainHandle();
        },
        //选择会员红包
        selectRedPacket(){
            this.super_vip=this.super_vip==1?null:1;
            this.getSelectDataMainHandle();
        },
        //选择筛选数据
        selectFiltrate(delivery_mode,activity_types,average_cost_ids,support_ids){
            //获得数据
            this.activity_types=activity_types;
            this.support_ids=support_ids;
            this.delivery_mode=delivery_mode;
            this.average_cost_ids=average_cost_ids;
            //请求数据
            this.getSelectDataMainHandle();
        },
    },

    mounted () {
        //获取列表数据
        this.getDataListHandle().then(data=>{
            //获取详细数据
            this.getDataMainHandle(0);
            this.isShowIndex=0;
        })


        //请求筛选数据
        getFiltrateDatat(this.lat,this.lon).then(data=>{
            console.log(data);
            this.filtrateData=data;
        })

    }
};
</script>

<style scoped>
.wrap{
    position: relative;
    z-index: 10;
}
.bannerList-nav-wrap{
    background-image: linear-gradient(90deg,#0af,#0085ff);
    height: 0.41rem;
}
.box{
    width: 3.16rem;
    height: 100%;
    overflow-x: auto;
    float: left;
}
.bannerList-nav-box{
    display: inline-block;
    height: 100%;
    white-space: nowrap;
}
.bannerList-nav-wrap li{
    display: inline-block;
    padding: 0 0.07rem;
    line-height: 0.41rem;
}
.target .targetA{
    padding-top: 0.03rem;
    line-height: 0.3rem;
    font-size: 0.12rem;
    font-weight: 200;
    display: block;
    color: white;
    border-bottom:  0.02rem solid rgba(0, 0, 0, 0);
}
.target .targetAction{
    font-weight: 600;
    border-bottom:  0.02rem solid white;
}
.choice-list{
    float: right;
    color: white;
    line-height: 0.41rem;
    width: 0.43rem;
    text-align: center;
}
.choice-list::before{
    border-color: #0085ff;
}
.filtrate-wrap{
    display: flex;
    justify-content: space-around;
    background: white;
    line-height: 0.38rem;
    font-size: 0.12rem;
    color: #666666;
}
.filtrate-wrap .activeSpan{
    font-weight: 600;
}
.filtrate-wrap i{
    font-size: 0.08rem;
    padding: 0 0.02rem;
}

.filtrate-min{
    background: white;
    padding: 0.05rem 0 0.14rem;
}
.filtrate-min li{
    line-height: 0.38rem;
    font-size: 0.12rem;
    color: #333333;
    padding-left: 0.2rem;
}
</style>
