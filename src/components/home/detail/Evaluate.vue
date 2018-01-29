<template>
<scroll-page>
  <section class="detail-header-wrap">        
      <div class="evaluate-header clearfix">
            <div class="header-left one-border-right">
                <p class="mark">{{evaluateInfo.overall_score}}</p>
                <span class="mark-txt">综合评价</span>
                <em class="mark-contrast">高于周边商家{{evaluateInfo.compare_rating}}</em>
            </div>
            <div class="header-right">
                <div class="header-right-list">
                    <p class="evaluate-txt">服务态度</p>
                    <div class="evaluate-star">
                        <div class="star star-top">
                            <div class="star-bottom-box" :style="{width:evaluateInfo.service_score*20+'%'}"> 
                                <i class="star-bottom"></i>
                            </div>
                        </div>
                    </div>
                    <em class="evaluate-mark">{{evaluateInfo.service_score}}</em>
                </div>
                <div class="header-right-list">
                    <p class="evaluate-txt">菜品评价</p>
                    <div class="evaluate-star">
                        <div class="star star-top">
                            <div class="star-bottom-box" :style="{width:evaluateInfo.food_score*20+'%'}"> 
                                <i class="star-bottom"></i>
                            </div>
                        </div>
                    </div>
                    <em class="evaluate-mark">{{evaluateInfo.food_score}}</em>
                </div>
                <div class="header-right-list">
                    <p class="evaluate-txt">送达时间</p>
                    <div class="time">{{evaluateInfo.deliver_time}}分钟</div>
                </div>
            </div>
      </div>
      <ul class="evaluate-type-list">
          <li class="evaluate-type" 
          v-for="(item,index) in evaluateList" 
          v-if="evaluateList.length" 
          @click="cutShow(item.name)"
          :class="{'bad-evaluate-type':item.name=='不满意','active-evaluate-type':item.name==isShow}"
          :key="index">{{item.name+'('+item.count+')'}}</li>
      </ul>
      <div>
          <detail-evaluate-list :Show='item.name' 
          v-for="(item,index) in evaluateList" 
          :key="index" v-show="item.name==isShow">
          </detail-evaluate-list>
      </div>
  </section>
</scroll-page>
</template>

<script>
import EvaluateList from './EvaluateList'
import ScrollPage from '../../../common/ScrollPage'
import {getEvaluateInfo} from '../../../service/DetailService'
import {getEvaluateList} from '../../../service/DetailService'
export default {
    name:'detail-evaluate',
    components:{
        [EvaluateList.name]:EvaluateList,
        [ScrollPage.name]:ScrollPage
    },
    data(){
        return{
            evaluateInfo:{},
            evaluateList:[],
            isShow:'全部',
        }
    },
    methods: {
      cutShow(name){
          this.isShow=name;
      }  
    },
    mounted () {
        //求情评价总听信息
        getEvaluateInfo(this.$route.query.id).then(data=>{
            // console.log(data)
            this.evaluateInfo=data
        })
        //请求评价总列表
        getEvaluateList(this.$route.query.id).then(data=>{
            // console.log(data)
            this.evaluateList=data
        })
    },

};
</script>

<style scoped>
.evaluate-header{
    padding: 0.19rem 0 0.18rem;
}
.header-left{
    float: left;
    width: 1.16rem;
    text-align: center;
}
.header-left .mark{
    line-height: 0.22rem;
    font-size: 0.17rem;
    font-weight: 1000;
    color: #ff6000;
}
.mark-txt{
    display: block;
    line-height: 0.18rem;
    font-size: 0.11rem;
    color: #6d6d6d;
}
.mark-contrast{
    line-height: 0.11rem;
    font-size: 0.08rem;
    color: #999999;
}
.header-right{
    float: left;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 0.54rem;
    padding-left: 0.23rem;
}
.header-right-list{
    display: flex;
    justify-content: flex-start;
    line-height: 0.12rem;
}
.evaluate-txt{
    font-size: 0.11rem;
    padding-right: 0.12rem;
}
.evaluate-star{
    width: 0.51rem;
    margin-right: 0.18rem;   
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
.evaluate-mark{
    color: #ff6600;
}

.evaluate-type-list{
    margin: 0.14rem 0.15rem 0.05rem;
    display: flex;
    flex-wrap: wrap;
}
.evaluate-type{
    line-height: 0.26rem;
    background: #ebf5ff;
    margin: 0 0.03rem 0.08rem;
    border-radius: 0.02rem;
    padding: 0 0.09rem;
    width: auto;
    font-size: 0.11rem;
    color: #6d7885;
}
.bad-evaluate-type{
    background: #f5f5f5;
    color: #aaaaaa;
}
.active-evaluate-type{
    background: #0097ff;
    color: white;
}
</style>
