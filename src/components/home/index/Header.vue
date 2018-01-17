<template>
  <header class="header-wrap">
      <div class="header">
        <a href="" class="address">地址</a>
        <div class="search">
            <span>搜索商家、商品名称</span>
        </div>
      </div>
  </header>
</template>

<script>
export default {
    name:'home-header'
};
</script>

<style>
.header-wrap{
    width: 100%;
    height: 0.92rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    color: #fff;
    box-sizing: border-box;
    padding: 0.17rem 0.13rem 0.08rem;
}
.header{
    width: 100%;
}
.address{
    display: block;
    font-size: 0.15rem;
    color: white;
    font-weight: 800;
    margin-bottom: 0.14rem;
}
.search{
    width: 100%;
    height: 0.35rem;
    background: white;
    border-radius: 2px;
    text-align: center;
}
.search span{
    color: #999999;
    font-size: 0.13rem;
    line-height: 0.35rem;
}
</style>
