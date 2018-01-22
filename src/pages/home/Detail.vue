<template>
<div class="list-wrap">
    <!-- <detail-header></detail-header> -->
    <sub-page-detail pageId="detail">
        <div class="list">
            <detail-header @showAllActive='showAllActive'></detail-header>
            <detail-nav></detail-nav>
            <!-- <router-view></router-view> -->
            <detail-menu class="one-border-top"></detail-menu>
        </div>
    </sub-page-detail>
    <active-all v-show="showActive" @closeShow='closeShowActive'></active-all>
</div>
</template>

<script>
import SubPageDetail from '../../common/SubpageDetail'
import Header from '../../components/home/detail/Header'
import Nav from '../../components/home/detail/Nav'
import List from '../../components/home/detail/List'
import Menu from '../../components/home/detail/Menu'
import Acctive from '../../components/home/detail/Active'
export default {
    components: {
        [SubPageDetail.name]: SubPageDetail,
        [Header.name]: Header,
        [Nav.name]: Nav,
        [List.name]: List,
        [Menu.name]: Menu,
        [Acctive.name]: Acctive,
    },
    data(){
        return{
            showActive:false,
        }
    },
    methods: {
        closeShowActive(){
            this.showActive=false;
        },
        showAllActive(){
           this.showActive=true;
        }
    },

}
</script>

<style scoped>
.list-wrap{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
}

</style>
