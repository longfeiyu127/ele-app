<template>
<div class="search-wrap">
    <div class="search-header">
        <div class="search-box">
            <i class="iconfont goback" @click="goback">&#xe67c;</i>
            <div class="inp-box">
                <input class="inp" type="text" placeholder="输入商家、商品名称">
                <i class="iconfont fdj">&#xe69d;</i>
            </div>
            <p>搜索</p>
        </div>
    </div>
    <sub-page id="location" ref="page">
        <div>
            <div class="kong"></div>
        </div>
        <search-history></search-history>
    </sub-page>
</div>
</template>

<script>
import Vuex from 'vuex'
import Subpage from '../../common/Subpage'
import SearchHistory from '../../components/home/search/History'
// import {getNewAddress} from '../../service/LocationService'

export default {
    name:'search',
    components:{
        [Subpage.name]:Subpage,
        [SearchHistory.name]: SearchHistory,
    },
    data(){
        return{
            addressData:[],
            keyword:'',
        }
    },
    computed: {
        ...Vuex.mapState({
        lon:'longitude',
        lat:'latitude',
        address:'address'
        }),
    },
    watch:{
    
    },
    methods: {
        goback(){
            this.$router.go(-1)
        }
    },
}
</script>

<style scoped>
.search-header{
    position: relative;
    z-index: 10;
}
.kong{
    height: 0.49rem;
}
.search-box{
    height: 0.49rem;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
}
.goback{
    display: block;
    width: 0.44rem;
    font-size: 0.16rem;
    font-weight: 700;
    color: #999999;
    text-align: center;
}
.inp-box{
    position: relative;
    width: 2.65rem;
    height: 0.27rem;
}
.inp{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    line-height: 0.27rem;
    border: 0;
    background: #f8f8f8;
    padding-left: 0.27rem;
}
.fdj{
position: absolute;
top: 0.05rem;
left: 0.08rem;
}
.search-box p{
    width: 0.51rem;
    text-align: center;
    font-size: 0.14rem;
    font-weight: 700;
    color: #333333;
}

</style>
