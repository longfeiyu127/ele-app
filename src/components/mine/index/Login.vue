<template>
    <section class="userInfo">
        <div class="Info">
            <img src="" alt="" class="head-portrait">
            <div class="Info-main">
                <i>></i>
                <h2>登录/注册</h2>
                <p>登录后享受更多特权</p>
            </div>
        </div>
        <div class="property one-border-bottom">
            <div class="red-packet one-border-right">红包</div>
            <div class="gold-coin">金币</div>
        </div>
    </section>
</template>

<script>
export default {
    name:'mine-userInfo',
};
</script>

<style scoped>
.userInfo{
    width: 100%;
    height: 1.85rem;
}
.Info{
    width: 100%;
    height: 1.06rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    box-sizing: border-box;
    padding: 0.24rem 0.14rem;
}
.head-portrait{
    display: block;
    width: 0.58rem;
    height: 0.58rem;
    float: left;
}
.Info-main{
    width: 2.52rem;
    margin-left: 0.22rem;
    height: 100%;
    float: right;
    color: white;
}
.Info-main h2{
    font-size: 0.19rem;
    line-height: 0.37rem;
    font-weight: 800;
}
.Info-main p{
    font-size: 0.1rem;
    line-height: 0.14rem;
    font-weight: 800;
}
.Info-main i{
    height: 100%;
    float: right;
    line-height: 100%;
}
.property{
    height: 0.79rem;
    width: 100%;
    background: #fff;
    display: flex;
}
.property div{
    flex: 1;
    text-align: center
}
</style>