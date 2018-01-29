<template>
<scroll-page>
  <section class="detail-wrap">        
      <ul class="info-box">
        <li class="info-list one-border-bottom">
          <h4 class="info-title">配送信息</h4>
          <div class="info-main">
            <p>约{{sellerInfo.order_lead_time}}分钟到达，距离{{sellerInfo.distance | distance}}</p>
            <p>配送费￥{{sellerInfo.float_delivery_fee}}</p>
          </div>
        </li>
        <li class="info-list one-border-bottom">
          <h4 class="info-title">活动与服务</h4>
          <div class="info-main">
            <ul class="active-box">
                <li class="active" v-for="(item,index) in sellerInfo.activities" :key="index">
                    <span>
                        <i class="active-icon" :style="{background: '#'+item.icon_color}">
                          {{item.icon_name}}
                        </i>
                        {{item.description}}
                    </span>
                </li>
            </ul>
          </div>
        </li>
        <li class="info-list one-border-bottom" v-if="sellerInfo.albums">
          <h4 class="info-title">商家实景</h4>
          <div class="info-main clearfix">
            <div class="img-box clearfix" v-for="(img,index) in sellerInfo.albums" :key="index">
              <img :src="img.cover_image" alt="">
              <div class="img-count"></div>
            </div>
          </div>
        </li>
        <li class="info-list one-border-bottom">
          <h4 class="info-title">商家信息</h4>
          <div class="info-main">
            <p>简介</p>
            <div class="synopsis one-border-bottom">
              <i>品类</i>
              <p>{{sellerInfo.flavors}}</p>
            </div>
            <div class="synopsis  one-border-bottom">
              <i>商家电话</i>
              <p>{{sellerInfo.phone}}</p>
            </div>
            <div class="synopsis one-border-bottom">
              <i>地址</i>
              <p>{{sellerInfo.address}}</p>
            </div>
            <div class="synopsis one-border-bottom">
              <i>营业时间</i>
              <p>{{sellerInfo.opening_hours}}</p>
            </div>
          </div>
        </li>
        <li class="info-list one-border-bottom">
          <h4 class="info-title">营业资质</h4>
        </li>
      </ul>
  </section>
</scroll-page>
</template>

<script>
import ScrollPage from '../../../common/ScrollPage'
export default {
    name:'detail-seller',
    components:{
      [ScrollPage.name]:ScrollPage
    },
    data(){
      return{
        sellerInfo:{}
      }
    },
    mounted () {
      this.$center.$on('SellerInfo',(data)=>{
        // console.log(data);
        this.sellerInfo=data;
      })
    }
};
</script>

<style scoped>
.detail-wrap{
  width: 100%;
}
.info-list{
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 0.1rem;
  padding: 0.04rem 0.16rem 0.17rem;
}
.info-title{
  line-height: 0.43rem;
  font-size: 0.14rem;
  font-weight: 1000;
  color: #000;
}
.info-main{
  line-height: 0.21rem;
  font-size: 0.11rem;
  color: #696969;
}
.active{
    line-height: 0.15rem;
    margin-bottom: 0.13rem;
    font-size: 0.11rem;
}
.active-icon{
    width: 0.29rem;
    height: 0.15rem;
    padding:  0 0.035rem;
    border-radius: 0.01rem;
    margin-right: 0.07rem;
    color: white;
}
.img-box{
  position: relative;
  float: left;
}
.info-main img{
  width: 0.75rem;
  height: 0.75rem;
  background: palegoldenrod;
  margin: 0 0.07rem 0.07rem 0;
  float: left;
}
.img-count{
  position: absolute;
  width: 0.75rem;
  height: 0.17rem;
  bottom: 0.07rem;
  background: rgba(0, 0, 0, 0.5);
  line-height: 0.17rem;
  text-align: center;
  color: #fff;
}
.synopsis{
  display: flex;
  justify-content: space-between;
  line-height: 0.38rem;
  padding-bottom: 0.03rem;
}
.synopsis i{
  font-size: 0.115rem;
  font-weight: 1000;
}
</style>
