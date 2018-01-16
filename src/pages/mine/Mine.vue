<template>
<div class="page" id="mine-wrap">
    <common-header pageId="我的"></common-header>
    <page id="mine">
        <mine-userInfo></mine-userInfo>
        <mine-server></mine-server>
        <mine-server></mine-server>
        <mine-server></mine-server>
    </page>
</div>
</template>

<script>
import Page2 from '../../common/Page2'
import Header from  '../../common/Header'
import Login from  '../../components/mine/index/Login'
import Server from  '../../components/mine/index/Server'
export default {
    components:{
        [Page2.name]:Page2,
        [Header.name]:Header,
        [Login.name]:Login,
        [Server.name]:Server,
    } 
}
</script>

<style>

</style>
