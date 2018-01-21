<template>
<div class="sub-page">
    <div class="subPage" ref="subPage">
        <slot></slot>
    </div>
</div>
</template>

<script>
import Iscroll from 'iscroll/build/iscroll-probe'
export default {
    name:'sub-page',
    methods:{
        pageRefresh(){
            console.log(1)
            this.MyScroll.refresh();
        },  
    },
    mounted () {
        this.MyScroll =new Iscroll(this.$refs.subPage,{
            // scrollbars: true,
            probeType: 3
        });
        this.pageRefresh()
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
}
.subPage{
    height: 100%;
    width: 100%;
}
</style>