<template>
<div class="sub-page-static">
    <slot></slot>
</div>
</template>

<script>
export default {
    name:'sub-page-static',
    methods:{
   
    },
    mounted () {

    }
};
</script>

<style scoped lang='scss'>
.sub-page-static {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 6;
}
</style>