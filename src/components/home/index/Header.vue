<template>
  <header class="header-wrap">
      <div class="header">
        <div>
            <router-link class="address" to="/home/location">
                <i class="iconfont xia">&#xe609;</i>
                <span class="address-txt">{{address}}</span>
                <i class="iconfont dian">&#xe600;</i>
            </router-link>
        </div>
      </div>
      <home-search class="search"></home-search>
  </header>
</template>

<script>
import Vuex from 'vuex'
import Search from './Search'
export default {
    name:'home-header',
    components:{
        [Search.name]:Search 
    },
    computed: {
        ...Vuex.mapState({
            address:'address'
        })
    },
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
    line-height: 0.18rem;
    color: white;
    font-weight: 800;
    box-sizing: border-box;
    padding-left: 0.13rem;
    padding-top: 0.15rem;
}
.xia{
    font-size: 0.18rem;
}
.address-txt{
    display: inline-block;
    max-width: 1.59rem;
    padding: 0  0.06rem;
    line-height: 0.18rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    padding-bottom: 0.03rem;
}
.dian{
    font-size: 0.11rem;
}
</style>
