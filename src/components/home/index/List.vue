<template>
    <div id="seller-list">
        <h3 class="title">推荐商家</h3>
        <ul class="seller-list clearfix">
            <li class="seller one-border-bottom" v-for="(seller,index)  in sellerData" :key="index" @click="goDetail(index)"> 
                <img :src="seller.img" alt="" class="sellerImg">
                <div class="sellerInfo">
                    <div class="sellerInfo-main one-border-bottom">
                        <h4 class="sellerTitle"><span><i class="premium" v-if="seller.premium">品牌</i>{{seller.name}}</span><span class="invoice" v-if="seller.supports.length">票</span></h4>
                        <div class="grade">
                            <div class="evaluate">
                                <div class="star star-top">
                                    <div class="star-bottom-box"  :style="{width:seller.rating*20+'%'}">
                                        <i class="star-bottom"></i>
                                    </div>
                                </div>{{seller.rating}} 月售{{seller.orderNum}}单
                            </div>
                            <div class="hummingbird" v-if="seller.deliveryMode">蜂鸟专送</div>
                        </div>
                        <div class="serve">
                            <p class="serve-price"><em>￥{{seller.minimumOrderAmount}}起送</em><em class="one-border-left">配送费￥{{seller.deliveryFee}}</em></p>
                            <p class="serve-time"><em>{{seller.distance | distance}}</em><em class="one-border-left">{{seller.leadTime}}分钟</em></p>
                        </div>
                        <div class="good-seller">口碑好店</div>
                    </div>
                    <div class="activity clearfix">
                        <div>
                            <dl class="activity-main" v-for="(activities,j) in seller.activities" :key="j" v-if="j<2 || seller.isShow">
                                <dt class="activity-icon" :style="{background: '#'+activities.icon_color}">{{activities.icon_name}}</dt>
                                <dd class="activity-title">{{activities.description}}</dd>
                            </dl>
                        </div>
                        <div class="activity-add" @click.stop="Show(index)" v-if="seller.activities.length>2">{{seller.activities.length}}个活动<i class="iconfont">&#xe600;</i></div>
                    </div>
                </div> 
            </li>
        </ul>
        <div class="load-more one-border-top" ref="loadMore"><img src="../../../../static/images/ajax-loader.gif" class="load-more-gif">正在加载更多</div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import {getSeller} from '../../../service/HomeService.js'
export default {
    name:'home-list',
    data(){
        return{
            sellerData:[],
            limit:12,
            flag:true,
        }
    },
    methods:{
        Show(index){
            this.sellerData[index].isShow=!this.sellerData[index].isShow;
            this.$nextTick(()=>{
                this.$emit('activities-show');
            })
        },
        requireData(){
            //准备数据       
            if(this.lon && this.lat){
                getSeller(this.lat, this.lon, this.offset, this.limit,this.rank_id).then(data=>{
                    this.sellerData=this.sellerData.concat(data)
                    this.flag=true;
                    this.$nextTick(()=>{
                        if(data.length){
                            this.$emit('getMore-end')
                        }else{
                            //没有更多加载
                            this.$refs.loadMore.innerHTML='没有更多了哦~'
                        }
                    })
                })
            }
        },
        //进入详情页面
        goDetail(index){
            this.$router.push({ path: '/home/detail',query: { id: this.sellerData[index].id }})
        }
    },
    computed: {
        ...Vuex.mapState({
            lon:'longitude',
            lat:'latitude',
            rank_id:'rank_id'
        }),
        offset(){
            return this.sellerData.length
        }
    },
    watch:{
        lon(){
            if(this.flag){
                this.sellerData=[];
                this.flag=false;
                this.requireData();
            }      
        },
        lat(){
            if(this.flag){
                this.sellerData=[];
                this.flag=false;
                this.requireData();
            }    
        },
    },
    mounted () { 
        //首次加载
        this.requireData()
        //监听加载更多
        this.$center.$on('get-more',()=>{
            console.log('需要加载更多')
            this.requireData()
        })
    },
};
</script>

<style scoped>
#seller-list{
    width: 100%;
    min-height: 6rem;
    background: white;
}
.seller{
    overflow: hidden;
}
.title{
    width: 100%;
    text-align: center;
    height: 0.35rem;
    line-height: 0.35rem;
    font-size: 0.12rem;
    color: #000;
}
.title::before{
    content: '';
    display: inline-block;
    width: 0.2rem;
    height: 1px;
    margin-right: 0.11rem;
    background: #999999;
    vertical-align: middle;
}
.title::after{
    content: '';
    display: inline-block;
    width: 0.2rem;
    height: 1px;
    margin-left: 0.11rem;
    background: #999999;
    vertical-align: middle;
}
.sellerImg{
    width: 0.6rem;
    height: 0.61rem;
    border: 0.01rem solid #ebebeb;
    border-radius: 0.02rem;
    float: left;
    margin: 0.14rem 0.10rem;
}
.sellerInfo{
    width: 2.68rem;
    float: left;
}
.sellerInfo-main{
    padding-bottom: 0.08rem;
}
.sellerInfo-main::after{
    border-bottom: 1px dotted #c5c5c5;
}
.premium{
    display: inline-block;
    width: 0.25rem;
    height: 0.16rem;
    background: #ffeb17;
    border-radius: 0.01rem;
    font-size: 0.1rem;
    line-height: 0.16rem;
    text-align: center;
    color: #6f3f15;
    vertical-align: middle;
    margin-right: 0.07rem;
}
.sellerTitle{
    height: 0.16rem;
    line-height: 0.16rem;
    margin: 0.18rem 0 0.10rem;
    font-size: 0.14rem;
    color: #000;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
}
.invoice{
    display: block;
    width: 0.12rem;
    height: 0.12rem;
    line-height: 0.12rem;
    text-align: center;
    color: #999999;
    font-size: 0.08rem;
    font-weight: 400;
    border: 1px solid #dddddd;
}
.grade{
    height: 0.12rem;
    line-height: 0.12rem;
    color: #666666;
    font-size: 0.09rem;
    display: flex;
    justify-content: space-between;
}
.evaluate{
    position: relative;
}
.star{
    display: inline-block;
    height: 0.095rem;
    width: 0.52rem;
    margin-right: 0.05rem;
    position: relative;
    background: url(../../../../static/images/star.png) no-repeat 0 0;
    background-size: 100%;
}
.star-bottom-box{
    height: 100%;
    overflow: hidden;
}
.star-bottom-box .star-bottom{
    display: block;
    background: url(../../../../static/images/star.png) no-repeat 0 100%;
    background-size: 100%;
    width: 0.52rem;
    height: 0.095rem;
}
.hummingbird{
    display: inline-block;
    height: 0.16rem;
    line-height: 0.16rem;
    vertical-align: middle;
    background: #009aff;
    border-radius: 0.02rem;
    padding: 0 0.03rem;
    font-size: 0.09rem;
    color: white;
    text-align: center;
}
.serve{
    font-size: 0.09rem;
    height: 0.09rem;
    line-height: 0.09rem;
    margin-top: 0.12rem;
    color: #666666;
    display: flex;
    justify-content: space-between;
}
.serve-price em:nth-child(2),.serve-time em:nth-child(2){
    margin-left: 0.04rem;
    padding-left: 0.04rem;
}
.serve-time{
    color: #999999;
}
.good-seller{
    font-size: 0.09rem;
    height: 0.09rem;
    line-height: 0.09rem;
    margin-top: 0.13rem;
    color: #e8470b;
}
.activity{
    padding: 0.09rem 0 0.14rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.activity-add{
    height: 0.38rem;
    color: #999999;
    font-size: 0.09rem;
}
.activity-add i{
    font-size: 0.09rem;
    display: inline-block;
    margin-left: 0.05rem;
}
.activity-main{
    width: 2.1rem;
    height: 0.19rem;
    line-height: 0.19rem;
}
.activity-icon{
    float: left;
    width: 0.13rem;
    height: 0.13rem;
    margin-top: 0.03rem;
    line-height: 0.13rem;
    font-size: 0.09rem;
    text-align: center;
    color: white;
    vertical-align: middle;
    margin-right: 0.06rem;
    border-radius: 0.02rem;
    background: #c5c5c5;
}
.activity-title{
    float: left;
    width: 1.91rem;
    font-size: 0.1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.load-more{
    height: 0.38rem;
    text-align: center;
    font-size: 0.11rem;
    line-height: 0.38rem;
}
.load-more-gif{
    height: 0.15rem;
    width: 0.15rem;
    margin-right: 0.06rem;
    display: inline-block;
    line-height: 0.38rem;
    vertical-align: middle;
}
</style>