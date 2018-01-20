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
                      <span>月售15分</span>
                      <div>
                          <em class="price"><i>￥</i>7</em>
                          <div><i>-</i><span>1</span><i class="add">+</i></div>
                      </div>
                  </div>
              </dd>
          </dl>
      </div>
  </section>
</template>

<script>
export default {
    name:'detail-menu',
    components:{

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
</style>
