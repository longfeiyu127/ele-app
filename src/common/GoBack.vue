<template>

<div @click="goBack">
 <slot>

 </slot>
</div>
</template>

<script>

export default {
    name:'go-back',
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    }
};
</script>

<style scoped>

</style>