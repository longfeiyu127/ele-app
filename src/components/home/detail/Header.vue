<template>
  <header class="detail-header-wrap">    
      <div class="header-img"><img src="" alt="" class="header-banner"></div>    
      <h3 class="title">永和豆浆大王 <i class="iconfont">&#xe600;</i></h3>
      <div class="seller-info"><span>月售960单</span></div>
      <p class="service">客服电话</p>
      <div class="active"><div><span><i class="active-icon">首单</i>新用户下单</span><em>3个活动<i class="iconfont more">&#xe600;</i></em></div></div>
  </header>
</template>

<script>
export default {
    name:'detail-header',
    components:{

    }
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
     background-color: rgba(119,103,137,.43)
}   
.header-banner{
    position: absolute;
    height: 0.62rem;
    width: 0.62rem;
    box-shadow: 0 0 0.4vw 0 rgba(0,0,0,.2);
    background: pink;
    bottom: -0.19rem;
    left: 50%;
    margin-left: -0.31rem;
}
.title{
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
</style>
