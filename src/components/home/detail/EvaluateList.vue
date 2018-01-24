<template>      
    <ul class="evaluate-main-wrap "> 
        <li class="evaluate-main-list one-border-top clearfix" 
        v-for="(item,index) in evaluateMain" 
        :key="index">  
            <img :src="item.avatar" alt="" class="head-portrait">
            <div class="head-portrait-right"> 
                <h4><em>{{item.username}}</em><span>{{item.date}}</span></h4>
                <div>
                    <div class="evaluate-star">
                        <div class="star star-top">
                            <div class="star-bottom-box" :style="{width:item.rating*20+'%'}"> 
                                <i class="star-bottom"></i>
                            </div>
                        </div>
                    </div>
                    <span class="order-time">{{item.time}}</span>
                </div>
                <p class="order-evaluate" v-if="item.rating_text">{{item.rating_text}}</p>
                <div class="order-img clearfix">
                    <img :src="img.img" class="evaluate-img" v-for="(img,j) in item.order_images" :key="j">
                </div>
                <div class="order-main-list clearfix">
                    <div class="order-main" v-for="(food,i) in item.food_ratings" :key="i">{{food.food}}</div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import {getEvaluateMain} from '../../../service/DetailService'
export default {
    name:'detail-evaluate-list',
    components:{

    },
    data(){
        return{
            evaluateMain:[],
        }
    },
    props:{
        Show:String,
    },
    mounted () {
        console.log(this.Show)
        getEvaluateMain(this.$route.query.id,this.Show).then(data=>{
            this.evaluateMain=data
        })
    }
};
</script>

<style scoped>
.evaluate-main-wrap{
    margin: 0 0.15rem;
}
.evaluate-main-list{
    padding: 0.12rem 0 0.14rem;;
}
.head-portrait{
    display: block;
    float: left;
    height: 0.28rem;
    width: 0.28rem;
    background: pink;
    margin: 0.02rem 0.16rem 0 0;
    border-radius: 50%;
}
.head-portrait-right{
    float: left;
    width: 2.80rem;
}
.head-portrait-right h4{
    line-height: 0.15rem;
}
.head-portrait-right h4 em{
    font-size: 0.11rem;
    color: black;
    font-weight: 400;
}
.head-portrait-right h4 span{
    padding-left: 0.08rem;
    font-size: 0.09rem;
    color: #bbbbbb;
}
.evaluate-star{
    display: inline-block;
    width: 0.51rem;
    margin-right: 0.02rem;
    line-height: 0.15rem;
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
.order-time{
    font-size: 0.09rem;
    color: #999999;
}
.order-evaluate{
    margin: 0.07rem 0;
    line-height: 0.15rem;
    font-size: 0.12rem;
    color: #333333;
}
.order-img{
    padding: 0.04rem;
}
.evaluate-img{
    float: left;
    height: 0.68rem;
    width: 0.68rem;
    background: pink;
    margin-right: 0.08rem;
}
.order-main-list{
    margin-top: 0.03rem;
}
.order-main{
    float: left;
    margin:  0.05rem 0.02rem;
    border: 0.01rem solid #eeeeee;
    padding: 0 0.1rem;
    line-height: 0.2rem;
    color: #6d7885;
    font-size: 0.1rem;
}
</style>
