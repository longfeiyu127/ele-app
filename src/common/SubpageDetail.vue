<template>
<div class="sub-page" ref="subPage">
    <div>
        <slot></slot>
    </div>
</div>
</template>

<script>
import Iscroll from 'iscroll/build/iscroll-probe'
export default {
    name:'sub-page-detail',
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
        this.pageRefresh()
        this.MyScroll.on('scroll', ()=>{
            let y=this.MyScroll.y
            //传输给主页面滚动Y值 
            // this.$emit('page-scroll',y)
            if(y>0){
                 this.MyScroll.scrollTo(0, 0);
            }else if(y<-265){
                //需要加载更多
                this.MyScroll.scrollTo(0, -265);
            }
        });
    }
};
</script>

<style scoped>
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
</style>