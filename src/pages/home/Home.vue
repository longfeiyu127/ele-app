<template>
    <div>
        <page id="home" ref="page" @page-scroll="handleHeader">
            <home-header></home-header>
            <home-banner></home-banner>
            <home-list @activities-show='refresh' @getMore-end='handlegetMoreEnd'></home-list>
        </page>
        <home-search class="search" v-show="showSearch"></home-search>

        <!-- 装载子页面 -->
        <router-view></router-view>
    </div>
</template>

<script>
import Page from '../../common/Page'
import Subpage from '../../common/Subpage'
import Header from '../../components/home/index/Header'
import Banner from '../../components/home/index/Banner'
import List from '../../components/home/index/List'
import Search from '../../components/home/index/Search'

export default {
    components:{
        [Page.name]:Page,
        'sub-page':Subpage,
        [Header.name]:Header,
        [Banner.name]:Banner,
        [List.name]:List,
        [Search.name]:Search,
    },
    data(){
        return{
            showSearch:false,
        }
    },
    methods:{
        refresh(){
            this.$refs.page.pageRefresh()
        },
        handleHeader(y){
            if(y<-42){
                this.showSearch=true;
            }else{
                this.showSearch=false;
            }
        },
        handlegetMoreEnd(){
            //加载完毕
            this.$refs.page.getDataEnd()
        }
    }
}
</script>

<style>

</style>
