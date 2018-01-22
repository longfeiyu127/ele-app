<template>
<div class="sub-page" ref="subPage">
        <slot></slot>
</div>
</template>

<script>
import Iscroll from 'iscroll/build/iscroll-probe'
export default {
    name:'sub-page',
    methods:{
        pageRefresh(){
            this.MyScroll.refresh();
        },
    },
    mounted () {
        this.MyScroll =new Iscroll(this.$refs.subPage,{
            // scrollbars: true,
            probeType: 3
        });
        this.MyScroll.on('scrollStart', this.pageRefresh);
    }
};
</script>

<style scoped lang='scss'>
.sub-page {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 6;
    background: white;
}
.subPage{
    height: 100%;
    width: 100%;
}
</style>