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
.subpage {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;
}
</style>