<template>
    <div  :id="pageId" class="page-haeder">
        {{pageId}}
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
    z-index: 5;
}
</style>