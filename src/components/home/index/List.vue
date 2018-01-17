<template>
    <div id="seller-list">
        <h3 class="title">推荐商家</h3>
        <ul class="seller-list clearfix">
            <li class="seller one-border-bottom">
                <img src="" alt="" class="sellerImg">
                <div class="sellerInfo">
                    <div class="sellerInfo-main one-border-bottom">
                        <h4 class="sellerTitle">店名</h4>
                        <div class="grade">评分</div>
                        <div class="serve">配送</div>
                        <div class="good-seller">口碑好店</div>
                    </div>
                    <div class="activity clearfix">
                        <div class="activity-add">更多</div>
                        <dl class="activity-main">
                            <dt class="activity-icon">图</dt>
                            <dd class="activity-title">活动</dd>
                        </dl>
                        <dl class="activity-main">
                            <dt class="activity-icon">图</dt>
                            <dd class="activity-title">活动</dd>
                        </dl>
                    </div>
                </div> 
            </li>
            <li class="seller one-border-bottom">
                <img src="" alt="" class="sellerImg">
                <div class="sellerInfo">
                    <div class="sellerInfo-main one-border-bottom">
                        <h4 class="sellerTitle">店名</h4>
                        <div class="grade">评分</div>
                        <div class="serve">配送</div>
                        <div class="good-seller">口碑好店</div>
                    </div>
                    <div class="activity clearfix">
                        <div class="activity-add">更多</div>
                        <dl class="activity-main">
                            <dt class="activity-icon">图</dt>
                            <dd class="activity-title">活动</dd>
                        </dl>
                        <dl class="activity-main">
                            <dt class="activity-icon">图</dt>
                            <dd class="activity-title">活动</dd>
                        </dl>
                    </div>
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
.seller{
    overflow: hidden;
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
    border-radius: 0.02rem;
    float: left;
    margin: 0.14rem 0.10rem;
}
.sellerInfo{
    width: 2.68rem;
    float: left;
}
.sellerInfo-main{
    padding-bottom: 0.08rem;
}
.sellerInfo-main::after{
    border-bottom: 1px dotted #c5c5c5;
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
.serve{
    font-size: 0.09rem;
    height: 0.09rem;
    line-height: 0.09rem;
    margin-top: 0.13rem;
    color: #666666;
}
.good-seller{
    font-size: 0.09rem;
    height: 0.09rem;
    line-height: 0.09rem;
    margin-top: 0.13rem;
    color: #e8470b;
}
.activity{
    padding: 0.09rem 0 0.14rem;
    width: 100%;
}
.activity-add{
    float: right;
}
.activity-main{
    width: 2.23rem;
    height: 0.19rem;
    line-height: 0.19rem;
    float: left;
}
.activity-icon{
    float: left;
    width: 0.13rem;
    height: 100%;
    margin-right: 0.06rem;
}
.activity-title{
    float: left;
}
</style>