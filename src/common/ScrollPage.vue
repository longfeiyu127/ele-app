<template>
    <div class="scrollPage"  ref="scrollPage">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Iscroll from 'iscroll/build/iscroll-probe'
export default {
    name:'scroll-page',
    methods:{
        pageRefresh(){
            this.MyScroll.refresh();
        },  
    },
    mounted () {
        console.log('创建成功')
        this.MyScroll =new Iscroll(this.$refs.scrollPage,{
            scrollbars: true,
            probeType: 3,
        });
        this.pageRefresh();
        this.MyScroll.on('scrollStart',()=>{
            console.log('触发')
             this.pageRefresh()
        })
        this.MyScroll.on('scroll',()=>{
            console.log(this.MyScroll.y)
        })
    }
};
</script>

<style scoped lang='scss'>
.scrollPage{
    position: relative;
}
</style>