<template>
    <div class="search" @click="goSearch">
        <span><i class="iconfont">&#xe69d;</i>搜索商家、商品名称</span>
    </div>
</template>

<script>

export default {
    name:'home-search',
    methods: {
        goSearch(){
            this.$router.push('/home/search')
        }
    }
};
</script>

<style>
.search{
    height: 0.34rem;
    padding: 0.07rem 0.13rem 0.08rem;
    text-align: center;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    position: relative;
    z-index: 5;
}
.search span{
    display: block;
    background: white;
    border-radius: 2px;
    color: #999999;
    font-size: 0.13rem;
    line-height: 0.35rem;
}
.search span .iconfont{
    font-size: 0.15rem;
    margin-right: 0.07rem;
}
</style>
