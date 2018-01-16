<template>
<div class="page" id="discover-wrap">
    <common-header pageId="发现"></common-header>
    <page id="discover">
        <discover-boon></discover-boon>
        <discover-active pageId="限时好礼"></discover-active>
        <discover-active pageId="每日精选"></discover-active>
    </page>
</div>
</template>

<script>
import Page2 from '../../common/Page2'
import Header from  '../../common/Header'
import Boon from '../../components/discover/index/Boon'
import Active from '../../components/discover/index/Active'
export default {
    components:{
        [Page2.name]:Page2,
        [Header.name]:Header,
        [Boon.name]:Boon,
        [Active.name]:Active,
    }
}
</script>

<style>

</style>
