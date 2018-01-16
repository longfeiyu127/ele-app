<template>
    <section class="userInfo">
        <div class="Info">用户信息</div>
        <div class="property one-border-bottom">用户资产</div>
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
}
.property{
    height: 0.79rem;
    width: 100%;
    background: #fff;
}
</style>