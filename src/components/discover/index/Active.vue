<template>
    <section :id="pageId" class="active one-border-top">
        <h3 class="title"><span></span> <i class="iconfont">&#xe74c;</i>{{pageId}} <span></span></h3>  
        <p class="subtitle">金币换豪礼</p>
        <slot></slot>
        <p class="getMore">查看更多<i class="iconfont">&#xe75e;</i></p>
    </section>
</template>

<script>
export default {
    name:'discover-active',
    props:{
        pageId:String
    },
};
</script>

<style>
.active{
    width: 100%;
    margin-bottom: 0.11rem;
    background:white;
}
.title{
    height: 0.18rem;
    line-height: 0.18rem;
    font-size: 0.18rem;
    font-weight: 800;
    text-align: center;
    padding-top: 0.2rem;
}
.title i{
    padding-right: 0.07rem;
    padding-left: 0.02rem;
    color: #f94843;
}
.title span{
    display: inline-block;
    width: 0.05rem;
    height: 0.05rem;
    background: #000;
    vertical-align: middle;
    border-radius: 50%;
    margin:  0 0.01rem 0.02rem;
}
.title::before{
    content: '';
    display: inline-block;
    width: 0.11rem;
    height: 0.015rem;
    background: #333333;
    vertical-align: middle;
    margin-bottom: 0.015rem;
}
.title::after{
    content: '';
    display: inline-block;
    width: 0.11rem;
    height: 0.015rem;
    background: #333333;
    vertical-align: middle;
    margin-bottom: 0.015rem;
}
.subtitle{
    font-size: 0.1rem;
    line-height: 0.1rem;
    margin: 0.04rem 0 0.11rem;
    color: #999999;
    text-align: center;
}

.getMore{
    font-size: 0.11rem;
    text-align: center;
    color: #999999;
    line-height: 0.11rem;
    padding: 0.17rem 0 0.2rem;
}
.getMore i{
    font-size: 0.08rem;
    padding-left: 0.08rem;
}
</style>