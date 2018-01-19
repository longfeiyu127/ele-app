<template>
    <section class="boon-wrap clearfix">
        <ul class="boon-list one-border-top">
            <li class="boon one-border-bottom" v-for='(boon,index) in boonData' :key="index" :class="{'boon-active': boonData.length%2 && index==0 }">
                <div class="boon-txt">
                    <h4 class="boon-title" :style="{color: boon.titleColor}">{{boon.title}}</h4>
                    <span class="boon-describe">{{boon.subtitle}}</span>
                </div>
                <img :src="boon.img" alt="" class="boon-img" :class="{'boon-img-active': boonData.length%2 && index==0 }" >
            </li>
        </ul>
        <img src="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/" alt="" class="boon-banner one-border-top">
    </section>
</template>

<script>
import {getBoonData} from '../../../service/DiscoverService.js'
export default {
    name:'discover-boon',
    data(){
        return {
            boonData:[]
        }
    },
    mounted () {
        //获取boon数据
        getBoonData(1, 0,22.54286, 114.059563).then(data=>{
            this.boonData= data
        })
    },
};
</script>

<style scoped>

.boon-wrap{
    width: 100%;
    background: #f5f5f5;
}
.boon-list{
    width: 100%;
}
.boon{
    width: 50%;
    height: 0.76rem;
    box-sizing: border-box;
    background: white;
    padding: 0.18rem 0.15rem 0.16rem;
    float: left;
    display: flex;
    justify-content: space-between;
}
.boon-title{
    line-height: 0.22rem;
    font-size: 0.15rem;
    font-weight: 540;
}
.boon-describe{
    line-height: 0.2rem;
    font-size: 0.12rem;
    color: #999999;
}
.boon-img{
    width: 0.42rem;
    height: 0.42rem;
}
.boon-active{
    display: block;
    width: 50%;
    height: 1.52rem;
    box-sizing: border-box;
    background: white;
    padding: 0.18rem 0.15rem 0.16rem;
}
.boon-img-active{
    margin-top: 0.2rem;
    width: 0.72rem;
    height: 0.72rem;
    float: right;
}


.boon-banner{
    height: 0.86rem;
    width: 100%;
    padding: 0.1rem 0;
}
</style>