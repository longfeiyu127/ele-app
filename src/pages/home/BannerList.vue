<template>
<div class="page" id="order-wrap">
    <common-header :pageId="target_name"></common-header>
    <bannerList-nav 
    @navList='handleNavList'
    ref="navList">
    </bannerList-nav>
    <sub-page id="order" 
            @getMoreData='handleGetMoreData'
            ref="subpage">
        <div>
            <div class="kong"></div>
            <bannerList-list ref="mainList"
            @navListEnd='handleNavListend'></bannerList-list>
        </div>
    </sub-page>
</div>
</template>

<script>
import Subpage from '../../common/Subpage'
import Header from  '../../common/Header'
import Nav from '../../components/home/BannerList/Nav'
import List from '../../components/home/BannerList/List'

export default {
    components:{
        [Header.name]:Header,
        [Subpage.name]:Subpage,
        [Nav.name]:Nav,
        [List.name]:List,
    },
    data(){
        return{
            target_name:null,
            entry_id:null,
        }
    },
    methods: {
        handleNavList(data){
            this.$refs.mainList.modifySellerData(data)
        },
        handleNavListend(){
            this.$refs.subpage.getDataEnd()
        },
        //获得更多数据
        handleGetMoreData(){
            console.log('监听到了')
            // console.log(this.$refs.navList)
            this.$refs.navList.getMoerDataMainHandle()
        }
    },
    mounted () {
        //获取传值
        this.target_name=this.$route.query.target_name;
        this.entry_id=this.$route.query.entry_id;
    },
}
</script>

<style>
.kong{
    height: 1.21rem;
}
</style>
