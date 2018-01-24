<template>
<div class="list-wrap">
    <!-- <detail-header></detail-header> -->
    <sub-page-detail pageId="detail">
        <div class="list">
            <detail-header @showAllActive='showAllActive'></detail-header>
            <detail-nav @cut='tabselect'></detail-nav>
            <!-- <router-view></router-view> -->
            <div class="select-box one-border-top">
                <detail-menu class="one-border-top" v-show="isShow==0"></detail-menu>
                <detail-evaluate class="one-border-top" v-show="isShow==1"></detail-evaluate>
                <detail-seller class="one-border-top" v-show="isShow==2"></detail-seller>
            </div>
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
import Evaluate from '../../components/home/detail/Evaluate'
import SellerInfo from '../../components/home/detail/SellerInfo'

import Acctive from '../../components/home/detail/Active'
export default {
    components: {
        [SubPageDetail.name]: SubPageDetail,
        [Header.name]: Header,
        [Nav.name]: Nav,
        [List.name]: List,
        [Menu.name]: Menu,
        [Evaluate.name]: Evaluate,
        [SellerInfo.name]: SellerInfo,
        [Acctive.name]: Acctive,
    },
    data(){
        return{
            showActive:false,
            isShow:0,
        }
    },
    methods: {
        closeShowActive(){
            this.showActive=false;
        },
        showAllActive(){
           this.showActive=true;
        },
        //切换
        tabselect(index){
            console.log(index);
            this.isShow=index;
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
.list{
    height: 8.72rem;
    position: relative;
}
.select-box{
    position: absolute;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding-top: 2.7rem;
    top: 0;
}
</style>
