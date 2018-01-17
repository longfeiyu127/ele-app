<template>
    <div id="seller-list">
        <h3 class="title">推荐商家</h3>
        <ul class="seller-list">
            <li class="seller">
                <img src="" alt="" class="sellerImg">
                <div class="sellerInfo">
                    <h4 class="sellerTitle">店名</h4>
                    <div class="grade">评分</div>
                    <div class="serve">配送</div>
                    <div class="good-seller">口碑好店</div>
                    <div class="activity">活动列表</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'home-list'
};
</script>

<style scoped>
#seller-list{
    width: 100%;
    min-height: 6rem;
    background: white;
}
.title{
    width: 100%;
    text-align: center;
    height: 0.35rem;
    line-height: 0.35rem;
    font-size: 0.12rem;
    color: #000;
}
.title::before{
    content: '';
    display: inline-block;
    width: 0.2rem;
    height: 1px;
    margin-right: 0.11rem;
    background: #999999;
    vertical-align: middle;
}
.title::after{
    content: '';
    display: inline-block;
    width: 0.2rem;
    height: 1px;
    margin-left: 0.11rem;
    background: #999999;
    vertical-align: middle;
}
.sellerImg{
    width: 0.6rem;
    height: 0.61rem;
    border: 0.01rem solid #ebebeb;
    float: left;
    margin: 0.14rem 0.19rem;
}
.sellerInfo{
    float: left;
}
.sellerTitle{
    height: 0.16rem;
    line-height: 0.16rem;
    margin: 0.18rem 0 0.11rem;
    font-size: 0.14rem;
    color: #000;
    font-weight: 700;
}
.grade{
    height: 0.1rem;
    line-height: 0.1rem;
    color: #666666;
    font-size: 0.09rem;
}
</style>