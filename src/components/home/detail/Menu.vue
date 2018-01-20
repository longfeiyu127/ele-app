<template>
  <section class="detail-header-wrap">        
      <ul class="menu-list">
          <li class="list one-border-bottom">早餐</li>
          <li class="list one-border-bottom">早餐</li>
          <li class="list one-border-bottom">早餐</li>
          <li class="list one-border-bottom">早餐</li>
          <li class="list one-border-bottom">早餐</li>
    
      </ul>
      <div class="menu-main">
          <dl class="main-list">
              <dt class="menu-title one-border-bottom">标题</dt>
              <dd class="menu-sction clearfix">
                  <img src="" alt="" class="menu-banner">
                  <div class="menu-info">
                      <h4 class="dishes-name">现磨豆浆</h4>
                      <span class="explain">手作肉松饭团</span>
                      <span class="sales"><em>月售15分</em> <em>好评</em></span>
                      <div class="buy">
                          <em class="price"><i>￥</i>7</em>
                          <div class="count"><i class="decrease">-</i><span>1</span><i class="add">+</i></div>
                      </div>
                  </div>
              </dd>
              <dt class="menu-title one-border-bottom">标题</dt>
              <dd class="menu-sction clearfix">
                  <img src="" alt="" class="menu-banner">
                  <div class="menu-info">
                      <h4 class="dishes-name">现磨豆浆</h4>
                      <span class="explain">手作肉松饭团</span>
                      <span class="sales"><em>月售15分</em> <em>好评</em></span>
                      <div class="buy">
                          <em class="price"><i>￥</i>7</em>
                          <div class="count"><i class="decrease">-</i><span>1</span><i class="add">+</i></div>
                      </div>
                  </div>
              </dd>
              <dd class="menu-sction clearfix">
                  <img src="" alt="" class="menu-banner">
                  <div class="menu-info">
                      <h4 class="dishes-name">现磨豆浆</h4>
                      <span class="explain">手作肉松饭团</span>
                      <span class="sales"><em>月售15分</em> <em>好评</em></span>
                      <div class="buy">
                          <em class="price"><i>￥</i>7</em>
                          <div class="count"><i class="decrease">-</i><span>1</span><i class="add">+</i></div>
                      </div>
                  </div>
              </dd>
          </dl>
      </div>
  </section>
</template>

<script>
import {getMenu} from '../../../service/DetailService'
export default {
    name:'detail-menu',
    components:{

    },
    mounted () {
        //求情商品列表
        getMenu(this.$route.query.id)
    }
};
</script>

<style scoped>
.menu-list{
     width: 0.74rem;
    float: left;
}
.list{
    height: 0.47rem;
    text-align: center;
    line-height: 0.47rem;
    background: #f8f8f8;
    font-size: 0.11rem;
    color: #666666;
}
.menu-main{
    width: 2.76rem;
    float: right;
}
.menu-title{
    height: 0.27rem;
    line-height: 0.27rem;
    font-size: 0.11rem;
    font-weight: 900;
    color: #6d6d6d;
}
.menu-sction{
    margin: 0.1rem 0 0.24rem;
}
.menu-banner{
    height: 0.72rem;
    width: 0.72rem;
    float: left;
    margin-right: 0.11rem;
    background: pink;
}
.menu-info{
    float: left;
}
.dishes-name{
    line-height: 0.13rem;
    font-size: 0.13rem;
    font-weight: 800;
}
.explain{
    display:block;
    line-height: 0.08rem;
    margin: 0.08rem 0 0.09rem;
    font-size: 0.08rem;
    color: #999999;
}
.sales{
    font-size: 0.09rem;
    color: #666666;
}
.sales em:nth-child(2){
    padding-left: 0.08rem;
}
.buy{
    width: 1.8rem;
    display: flex;
    justify-content: space-between;
    margin-top:0.11rem; 
}
.price{
    font-size: 0.14rem;
    color: #ff6600;
    font-weight: 1000;
}
.price i{
    font-size: 0.08rem;
    padding-right: 0.02rem;
}
.count{

}
.count i{
    display: inline-block;
    text-align: center;
    height: 0.18rem;
    width: 0.18rem;
    line-height: 0.18rem;
    border-radius: 50%;
    border:  0.01rem solid #2395ff;
    font-size: 0.15rem;
    font-weight: 800;
}
.count span{
    display: inline-block;
    width: 0.27rem;
    text-align: center;
    font-size: 0.13rem;
}
.decrease{
    color: #2395ff;
}
.add{
    background: #2395ff;
    color: white;
}
</style>
