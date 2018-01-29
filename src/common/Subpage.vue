<template>
<div class="sub-page" ref="subPage">
        <slot></slot>
</div>
</template>

<script>
import Iscroll from 'iscroll/build/iscroll-probe'
export default {
    name:'sub-page',
    data(){
        return{
          isGetMore:false,  
        }
    },
    methods:{
        pageRefresh(){
            this.MyScroll.refresh();
        },
        getDataEnd(){
            this.isGetMore=true;
        } 
    },
    mounted () {
        this.MyScroll =new Iscroll(this.$refs.subPage,{
            // scrollbars: true,
            probeType: 3
        });
        this.MyScroll.on('scrollStart', this.pageRefresh);

        this.MyScroll.on('scroll', ()=>{
            let y=this.MyScroll.y;
            let maxScrollY = this.MyScroll.maxScrollY;
            //传输给主页面滚动Y值 
            // this.$emit('page-scroll',y)
            if(y>0){
                 this.MyScroll.scrollTo(0, 0);
            }else if(y<maxScrollY+42 && this.isGetMore){
                //需要加载更多
                console.log('需要加载更多')
                this.isGetMore=false;
                this.$emit('getMoreData');
            }
        });
        this.$center.$on('getMore-bannerListData-end',()=>{
            console.log('可以加载更多了')
            this.isGetMore=true;
        })
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