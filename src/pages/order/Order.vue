<template>
<div class="page" id="order-wrap">
    <common-header pageId="订单"></common-header>
    <page id="order">
    </page>
</div>
</template>

<script>
import Header from  '../../common/Header'
import Page2 from '../../common/Page2'
export default {
    components:{
        [Header.name]:Header,
        [Page2.name]:Page2,
    }
}
</script>

<style>

</style>
