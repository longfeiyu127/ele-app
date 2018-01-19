<template>
    <ul class="active-recommend">
        <li class="recommend" v-for="(item,index) in activeData" :key="index">
            <img :src="item.img" alt="" class="recommend-img">
            <div class="recommend-info">
                <h6 class="recommend-title">{{item.title}}</h6>
                <div><em class="sales">月售{{item.sales}}份</em><em class="evaluate">好评{{item.rate}}%</em></div>
                <div class="price-info">
                    <i class="r">￥</i>
                    <strong class="price">{{item.price}}</strong>
                    <span class="discounts" v-if="item.activity">{{item.activity}}</span></div>
                <div class="seller-info one-border-top">
                    <i class="iconfont"></i><span class="seller-title">{{item.sellerName}}</span>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name:'discover-active-recommend',
    data(){
        return {

        }
    },
    props:{
        pageId:String,
        activeData:Array,
    },

};
</script>

<style scope>
.active-recommend{
    padding: 0.03rem 0.13rem 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 0.03rem;
}
.recommend{
    border: 1px solid #eeeeee;
    margin-bottom: 0.08rem;
}
.recommend-img{
    display: block;
    width: 1.61rem;
    height: 1.62rem;
    padding-bottom: 0.05rem;
    margin: 0;
}
.recommend-info{
    padding: 0 0.1rem;
    width: 1.40rem;
}
.recommend-title{
    font-size: 0.13rem;
    line-height: 0.13rem;
    font-weight: 600;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.sales,.evaluate{
    line-height: 0.2rem;
    font-size: 0.09rem;
    color: #6d6d6d;
}
.evaluate{
    padding-left: 0.08rem;
}
.r{
    font-size: 0.08rem;
    font-weight: 600;
    color: #ff6000;
}
.price{
    font-size: 0.13rem;
    line-height: 0.13rem;
    font-weight: 800;
    padding: 0 0.05rem 0 0.03rem;
}
.discounts{
    display: inline-block;
    box-sizing: border-box;
    width: 0.49rem;
    height: 0.13rem;
    line-height: 0.12rem;
    font-size: 0.085rem;
    color: #f66d6b;
    text-align: center;
    border: 1px solid #f66d6b;
}
.price-info{
    padding-bottom: 0.05rem;
}
.seller-info{
    font-size: 0.09rem;
    line-height: 0.1rem;
    color: #999999;
    padding: 0.09rem 0 0.13rem;
}
.one-border-top::after{
    border-top: 1px dashed #cccccc;
}
</style>