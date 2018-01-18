<template>
  <header class="header-wrap">
      <div class="header">
        <div>
            <a href="" class="address">地址</a>
        </div>
      </div>
      <home-search class="search"></home-search>
  </header>
</template>

<script>
import Search from './Search'
export default {
    name:'home-header',
    components:{
        [Search.name]:Search 
    }
};
</script>

<style>
.header-wrap{
    width: 100%;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    color: #fff;
    box-sizing: border-box;
}
.header{
    width: 100%;
}
.address{
    height: 0.42rem;
    display: block;
    font-size: 0.15rem;
    color: white;
    font-weight: 800;
    box-sizing: border-box;
    padding-left: 0.13rem;
    padding-top: 0.18rem;
}
</style>
