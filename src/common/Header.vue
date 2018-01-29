<template>
<div>
    <div  :id="pageId" class="page-haeder">
        {{pageId}}
    </div>
    <i class="go-back iconfont" @click="$router.go(-1)">&#xe67c;</i>
</div>
</template>

<script>
export default {
    name:'common-header',
    props:{
        pageId:String
    },
    data(){
        return{

        }
    },
    computed:{
       
    }
};
</script>

<style scoped>
.page-haeder{
    width: 100%;
    height: 0.42rem;
    position: relative;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    color: white;
    line-height: 0.42rem;
    text-align: center;
    font-size: 0.16rem;
    font-weight: 800;
    z-index: 8;
}
.go-back{
    position: absolute;
    display: block;
    color: white;
    font-size: 0.17rem;
    top: 0.12rem;
    left: 0.12rem;
    z-index: 8;
}
</style>