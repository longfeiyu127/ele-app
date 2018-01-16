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
    }
};
</script>

<style scoped>
.page-haeder{
    height: 100%;
    height: 0.54rem;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
</style>