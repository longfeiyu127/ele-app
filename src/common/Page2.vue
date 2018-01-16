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
    mounted () {
        this.MyScroll =new Iscroll(this.$refs.page,{
            // scrollbars: true,
            // tap: true
        })
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