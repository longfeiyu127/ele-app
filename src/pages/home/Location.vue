<template>
<div class="location-wrap">
    <sub-page id="location" ref="page">
        <div>
            <div class="kong"></div>
            <div class="location">
                <div class="location-box clearfix">
                    <div class="search-box">
                        <i class="iconfont search-icon">&#xe69d;</i>
                        <input type="search" class="input" placeholder="请输入地址" v-model="keyword">
                    </div>
                    <ul v-show="addressData">
                        <li class="one-border-bottom address-list" 
                        @click="updataAddress(index)"
                        v-if="addressData" v-for="(item,index) in addressData" :key="index">
                            <p class="address-txtt">{{item.name}}</p>
                            <span class="address-main">{{item.address}}</span>
                        </li>
                    </ul>
                </div>
                <div class="current-address-box" v-show="!addressData.length">
                    <span class="dqdz">当前地址</span>
                    <p class="current-address">{{address}}<span class="address-icon"><i class="iconfont">&#xe74c;</i>重新定位</span></p>
                </div>
            </div>
        </div>
    </sub-page>
    <common-header class="location-header" pageId="选择收货地址"></common-header>
</div>
</template>

<script>
import Vuex from 'vuex'
import Header from  '../../common/Header'
import Subpage from '../../common/Subpage'

import {getNewAddress} from '../../service/LocationService'

export default {
    name:'location',
    components:{
        [Header.name]:Header,
        [Subpage.name]:Subpage,
    },
    data(){
        return{
            addressData:[],
            keyword:'',
        }
    },
    computed: {
        ...Vuex.mapState({
        lon:'longitude',
        lat:'latitude',
        address:'address'
        }),
    },
    watch:{
        keyword(){
            clearTimeout(this.timer)
            this.timer=setTimeout(()=>{
                console.log('发送请求')
                if(this.keyword){
                    this.getAddressData()
                }
            },500)
        }
    },
    methods: {
        //点击重新定位

        //输入关键字请求定位
        getAddressData(){
            getNewAddress(this.keyword,this.lat,this.lon).then((data)=>{
                this.addressData=data
            })
        },
        //点击选择  修改地址和坐标
        updataAddress(index){
            // this.$store.
            this.$store.dispatch('modifyLocationAction',{
                lon:this.addressData[index].longitude,
                lat:this.addressData[index].latitude,
                })
            this.$store.dispatch('modifyAddressAction',this.addressData[index].name)
            //跳转到首页
            this.addressData=[]
            this.$router.push('/home')
        }
    },
}
</script>

<style scoped>
.kong{
    height: 0.42rem;
}
.location{
    /* height: 100%; */
    background: #f4f4f4;
}
.location-box{
    padding: 0.1rem 0.14rem 0;
    background: white;
}
.search-box{
    position: relative;
    margin: 0 0 0.1rem;
}
.search-icon{
    position: absolute;
    top:0.08rem;
    left: 0.12rem;
    font-size: 0.15rem;
}
.input{
    display: block;
    height: 0.34rem;
    line-height: 0.34rem;
    border: 0;
    width: 100%;
    box-sizing: border-box;
    background: #f2f2f2;
    padding-left: 0.33rem;
}
.address-list{
    padding:0.09rem 0 0.11rem;
}
.address-txtt{
    line-height: 0.2rem;
    font-weight: 900;
    color: #333333;
    font-size: 0.135rem;
}
.address-main{
    line-height: 0.17rem;
    font-size: 0.1rem;
}
.dqdz{
    display: block;
    line-height: 0.38rem;
    background: #f4f4f4;
    padding-left: 0.15rem;
    font-size: 0.11rem;
    color: #666666;
}
.current-address{
    line-height: 0.42rem;
    background: white;
    font-weight: 900;
    padding-left: 0.15rem;
    color: #333333;
    font-size: 0.14rem;
    position: relative;
}
.address-icon{
    position: absolute;
    right: 0.18rem;
    color: #2395ff;
    font-weight: 400;
}
.address-icon i{
    padding-right: 0.1rem;
}
</style>
