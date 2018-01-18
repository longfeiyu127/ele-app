<template>
<div class="page" ref="page">
    <div class="wrapper"> 
        <slot></slot>
    </div> 
</div>
</template>

<script>
import Iscroll from 'iscroll/build/iscroll-probe'
export default {
    name:'page',
    props:{
        pageId:String
    },
    data(){
        return{
          isGetMore:true,  
        }
    },
    methods:{
        pageRefresh(){
            this.MyScroll.refresh();
        }
    },
    mounted () {
        this.MyScroll =new Iscroll(this.$refs.page,{
            // scrollbars: true,
            probeType: 3
        });
        this.MyScroll.on('scrollStart', this.pageRefresh);


        this.MyScroll.on('scroll', ()=>{
            let y=this.MyScroll.y
            let maxScrollY = this.MyScroll.maxScrollY;
            //传输给主页面滚动Y值 
            this.$emit('page-scroll',y)
            if(y>0){
                 this.MyScroll.scrollTo(0, 0);
            }else if(y<maxScrollY+42 && this.isGetMore){
                //需要加载更多
                this.isGetMore=!this.isGetMore;
                this.$center.$emit('get-more');
            }
        });
    }
};
</script>

<style scoped>
.page {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 49px;
    width: 100%;
    overflow: hidden;
}
</style>