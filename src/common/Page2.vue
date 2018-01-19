<template>
<div class="page" ref="page">
    <div class="wrapper"> 
        <slot></slot>
    </div> 
</div>
</template>

<script>
import Iscroll from 'iscroll'
export default {
    name:'page',
    props:{
        pageId:String
    },
    data(){
        return{
            MyScroll:{}
        }
    },
    methods:{
        pageRefresh(){
            this.MyScroll.refresh();
        },
    },
    mounted () {
        this.MyScroll =new Iscroll(this.$refs.page,{
            // scrollbars: true,
            // tap: true
        })

         this.MyScroll.on('scrollStart', this.pageRefresh);

    }
};
</script>

<style scoped>
.page {
    position: absolute;
    top: 0.42rem;
    left: 0;
    bottom: 49px;
    width: 100%;
    overflow: hidden;
}
</style>