<template>
    <header class="detail-header-wrap">    
        <div class="header-img"><img :src="sellerInfo.image_path" alt="" class="header-banner"></div>    
        <h3 class="seller-title">{{sellerInfo.name}}<i class="iconfont">&#xe600;</i></h3>
        <div class="seller-info">
            <span>{{sellerInfo.rating}}</span>
            <span>月售{{sellerInfo.recent_order_num}}单</span>
            <span>{{sellerInfo.delivery_mode}}</span>
            <span>约{{sellerInfo.order_lead_time}}分钟</span>
            <span>距离{{sellerInfo.distance | distance}}</span>
        </div>
        <p class="service">{{sellerInfo.phone}}</p>
        <div class="active clearfix">
            <div v-if="sellerInfo.activities">
                <span><i class="active-icon" :style="{background: '#'+sellerInfo.activities[0].icon_color}">{{sellerInfo.activities[0].icon_name}}</i>{{sellerInfo.activities[0].description}}</span>
                <em>{{sellerInfo.activities.length}}个活动<i class="iconfont more">&#xe600;</i></em>
            </div>
        </div>
        <div class="red-packet"><span class="red-packet-active"><em>共<i>10</i>元专享红包</em><i>领取</i></span></div>
    </header>
</template>

<script>
import Vuex from 'vuex'
import {getSellerInfo} from '../../../service/DetailService'
export default {
    name:'detail-header',
    data(){
        return{
            sellerInfo:[],
            extras:[
                'activities',
                'albums',
                'license',
                'identification',
                'qualification'
            ],
        }
    },
    computed: {
        ...Vuex.mapState({
            lon:'longitude',
            lat:'latitude'
        }),
    },
    methods: {
    },
    mounted () {
        //请求商家数据
        getSellerInfo(this.$route.query.id,this.lat,this.lon,this.extras).then((data)=>{
            console.log(data)
            this.sellerInfo=data
        })
    },
};
</script>

<style scoped>
.detail-header-wrap{
    width: 100%;
}
.header-img{
    height: 0.65rem;
    position: relative;
}
.header-img:after{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(119,103,137,0.43)
} 
.header-banner{
    position: absolute;
    height: 0.62rem;
    width: 0.62rem;
    box-shadow: 0 0 0.4vw 0 rgba(0,0,0,0.2);
    background: pink;
    bottom: -0.19rem;
    left: 50%;
    margin-left: -0.31rem;
}
.seller-title{
    line-height: 0.19rem;
    font-size: 0.19rem;
    margin: 0.3rem 0 0.1rem;
    text-align: center;
    font-weight: 800;
}
.seller-info{
    font-size: 0.1rem;
    line-height: 0.1rem;
    text-align: center;
}
.seller-info span{
    padding: 0 0.02rem;
}
.service{
    text-align: center;
    line-height: 0.1rem;
    font-size: 0.1rem;
    margin: 0.09rem 0 0.12rem;
    color: #999999;

}
.active>div{
    width: 3.12rem;
    height: 0.22rem;
    box-sizing: border-box;
    padding: 0 0.08rem;
    line-height: 0.22rem;
    border: 1px solid #eeeeee;
    margin: 0 auto;
    font-size: 0.1rem;
    color: #666666;
    margin-bottom: 0.08rem;
    display: flex;
    justify-content: space-between;
}
.active>div .more{
    font-size: 0.05rem;
    padding-left: 0.06rem;
}
.active-icon{
    width: 0.16rem;
    height: 0.12rem;
    padding:  0 0.05rem;
    border-radius: 0.01rem;
    margin-right: 0.07rem;
    color: white;
    background: pink;
}
.red-packet{
    text-align: center;
}
.red-packet-active{
    display: inline-block;
    width: 1.30rem;
    height: 0.25rem;
    line-height: 0.25rem;
    background: url('../../../../static/images/active-bg.png') no-repeat;
    background-size: cover;
    margin-bottom: 0.07rem;
    color: #5c1603;
    font-weight: 600;
}
.red-packet-active em{
    display: inline-block;
    width: 0.95rem;
    text-align: center;
}
.red-packet-active em i{
    color: #ff5339;
    width: auto;
}
.red-packet-active i{
    display: inline-block;
    width: 0.35rem;
}
</style>
