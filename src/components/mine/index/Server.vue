<template>
    <section class="server-wrap one-border-top one-border-bottom">
        <a href="" class="server">
            <aside class="icon"></aside>
            <div class="caption  one-border-bottom"></div>
        </a>
        <a href="" class="server">
            <aside class="icon"></aside>
            <div class="caption"></div>
        </a>
    </section>
</template>

<script>
export default {
    name:'mine-server',
};
</script>

<style scoped>
.server-wrap{
    margin-top: 0.09rem;
}
.server{
    display: block;
    height: 0.43rem;
    background: white;
}
.icon{
    width: 0.41rem;
    height: 100%;
    float: left;
}
.caption{
    height: 100%;
    width: 3.19rem;
    float: left;
}
</style>