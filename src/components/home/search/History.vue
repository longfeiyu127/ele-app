<template>
    <div>
        <!-- <div class="list-box">
            <h5 class="title">历史搜索</h5>
            <ul class="list-main">
                <li>面包</li>
                <li>吃饭饭</li>
                <li>饭</li>
                <li>饭</li>
                <li>吃饭啦</li>
            </ul>
        </div> -->
        <div class="list-box">
            <h5 class="title">热门搜索</h5>
            <ul class="list-main">
                <li v-if="item.search_word" v-for="(item,index) in hotData" :key="index">{{item.search_word}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import {getHotData} from '../../../service/SearchService'
export default {
    name:'search-history',
    data(){
        return{
            keyword:'',
            historyData:[],
            hotData:[],
        }
    },
    computed: {
        ...Vuex.mapState({
        lon:'longitude',
        lat:'latitude',
        address:'address'
        }),
    },
    methods: {
        //请求热门数据
    },
    mounted () {
        getHotData(this.lat,this.lon).then(data=>{
            console.log(data);
            this.hotData=data;
        })
    }
};
</script>

<style scoped>
.list-box{
    box-sizing: border-box;
    padding: 0 0.32rem;
}
.title{
    line-height: 0.3rem;
    font-size: 0.14rem;
    font-weight: 800;
    color: #666666;
    margin-bottom: 0.08rem;
}
.list-main{
    display: flex;
    flex-wrap: wrap;
}
.list-main li{
    height: 0.32rem;
    line-height: 0.32rem;
    padding: 0 0.16rem;
    background: #f7f7f7;
    margin:  0.06rem 0.23rem 0.06rem 0;
}
</style>
