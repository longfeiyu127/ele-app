<template>
    <section :id="pageId" class="active one-border-top">
        {{pageId}}
    </section>
</template>

<script>
export default {
    name:'discover-active',
    props:{
        pageId:String
    },
};
</script>

<style>
.active{
    width: 100%;
    height: 2.91rem;
    margin-bottom: 0.11rem;
    background:white;
}
</style>