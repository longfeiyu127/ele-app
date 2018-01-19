<template>
<div class="sub-page">
    <slot></slot>
</div>
</template>

<script>
export default {
    name:'sub-page'
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