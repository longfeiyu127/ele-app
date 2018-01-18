<template>
    <page id="home" ref="page">
        <home-header></home-header>
        <home-banner></home-banner>
        <home-list @activities-show='refresh'></home-list>
    </page>
</template>

<script>
import Page from '../../common/Page'
import Subpage from '../../common/Subpage'
import Header from '../../components/home/index/Header'
import Banner from '../../components/home/index/Banner'
import List from '../../components/home/index/List'
export default {
    components:{
        [Page.name]:Page,
        'sub-page':Subpage,
        [Header.name]:Header,
        [Banner.name]:Banner,
        [List.name]:List,
    },
    methods:{
        refresh(){
            this.$refs.page.pageRefresh()
        }
    }
}
</script>

<style>

</style>
