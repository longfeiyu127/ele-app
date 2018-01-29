<template>
    <div class="banner">
        <div class="banner-list-wrap">
            <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrapper">
                <!-- slides -->
                <swiper-slide class="banner-list swiper-slide" v-for="(bannerList, i) in bannerData" :key="i">
                    <div 
                    @click="go(bannerItem.name,bannerItem.entry_id)"
                    v-for="(bannerItem, j) in bannerList" 
                    :key="j">
                        <img :src="bannerItem.img" alt="" class="banner-img">
                        <span class="banner-title">{{bannerItem.name}}</span>
                    </div>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination" v-show="bannerData.length>1"></div>
            </swiper>
        </div>
        <div class="banner-newUser">
            <img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/" alt="">
        </div>
    </div>
</template>

<script>

import Vuex from 'vuex'

import {getBanner} from '../../../service/HomeService.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name:'home-banner',
    components: {
        swiper,
        swiperSlide
    },
    data(){
        return{
            bannerData:[],
            swiperOption: {
                setWrapperSize :true,
                pagination :{
                    el:'.swiper-pagination',
                } ,
                autoHeight: true,
            },
            tmp:['main_template','favourable_template','svip_template']
        }
    },
    computed: {
        ...Vuex.mapState({
            lon:'longitude',
            lat:'latitude'
        }),
    },
    watch:{
        lon:'getBannerData',
        lat:'getBannerData'
    },
    methods: {
        getBannerData(){
            //发送banner数据请求
            if(this.lon&&this.lat){
                getBanner(this.lat,this.lon,this.tmp).then(data=>{
                    this.bannerData=data;
                })  
            }  
        },
        //点击跳转
        go(target_name,entry_id){
            this.$router.push({ path: '/home/bannerlist',query: { target_name,entry_id}})
        }
    },
    mounted () {
        this. getBannerData()       
    },
};
</script>

<style scoped>
.banner{
    width: 100%;
    height: 2.67rem;
    background: white;
    margin-bottom: 0.07rem;
}
.banner-list-wrap{
    width: 100%;
    height: 1.7rem;
    overflow: hidden;
    position: relative;
}
.banner-list{
    width: 50%;
    height: 1.42rem;
    display: flex;
    flex-wrap: wrap;
    background: white;
    float: left;
    padding-bottom: 0.28rem;
}
.banner-list div{
    width: 25%;
    text-align: center;
    height: 0.71rem;
}
.banner-img{
    width: 0.46rem;
    height: 0.46rem;
    margin: 0.1rem auto 0;
}
.banner-title{
    font-size: 0.11rem;
    line-height: 0.13rem;
    color: #666666;
}
.banner-newUser{
    width: 3.4rem;
    height: 0.83rem;
    margin: 0 auto;
}
.banner-newUser img{
    width: 100%;
    height: 100%;
}
.swiper-pagination-bullet{
    background: #cccccc;
}
.swiper-pagination-bullet-active{
    background: #666666;
}
</style>