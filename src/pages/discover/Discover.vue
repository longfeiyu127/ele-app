<template>
<div class="page" id="discover-wrap">
    <common-header pageId="发现" class="header"></common-header>
    <page id="discover">
        <div class="empty"></div>
        <discover-boon></discover-boon>
        <discover-active pageId="为你推荐">
            <discover-active-recommend :activeData='RecommendData'></discover-active-recommend>
        </discover-active>
        <discover-active pageId="限时好礼">
            <discover-active-body :activeData='SuggestData'></discover-active-body>
        </discover-active>
        <discover-active pageId="每日精选"></discover-active>
    </page>
</div>
</template>

<script>

import Vuex from 'vuex'

import Page from '../../common/Page'
import Header from  '../../common/Header'
import Boon from '../../components/discover/index/Boon'
import Active from '../../components/discover/index/Active'
import ActiveBody from '../../components/discover/index/ActiveBody'
import ActiveRecommend from '../../components/discover/index/ActiveRecommend'

import {getSuggestData} from '../../service/DiscoverService'
import {getRecommendData} from '../../service/DiscoverService'

export default {
    components:{
        [Page.name]:Page,
        [Header.name]:Header,
        [Boon.name]:Boon,
        [Active.name]:Active,
        [ActiveBody.name]:ActiveBody,
        [ActiveRecommend.name]:ActiveRecommend,
    },
    data(){
        return{
            SuggestData:[],
            RecommendData:[],
        }
    },
    computed: {
        ...Vuex.mapState({
            lon:'longitude',
            lat:'latitude'
        }),
    },
    methods:{
        getRecommend(){
            //请求为你推荐数据
            if(this.lat && this.lon){
                getRecommendData(this.lat,this.lon,0,6).then(data=>{
                    this.RecommendData=data
                })
            }      
        }
    },
    watch:{
        lon:'getRecommend',
        lat:'getRecommend',
    },
    mounted () {
       //请求限时豪礼数据
        getSuggestData().then(data=>{
            this.SuggestData=data
        })   
        //请求为你推荐
        this.getRecommend();
    },
}
</script>

<style>
.empty{
    height: 0.42rem;
}
</style>
