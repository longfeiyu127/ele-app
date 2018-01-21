<template>
<sub-page-static>
    <div class="active-wrap">
        <div class="closeA" @click="close"></div>
        <div class="main">
            <p class="title">优惠活动</p>
            <div class="active-list">
                <ul>
                    <li class="active" v-for="(item,index) in active" :key="index">
                        <span>
                            <i class="active-icon" :style="{background: '#'+item.icon_color}">{{item.icon_name}}</i>
                            {{item.description}}
                        </span>
                    </li>
                </ul>
            </div>
            <span class="close" @click="close">×</span>
        </div>
    </div>
</sub-page-static>
</template>

<script>
import SubpageStatic from '../../../common/SubpageStatic'
export default {
    name:'active-all',
    components:{
         [SubpageStatic.name]: SubpageStatic,
    },
    props:{
        active:Array,
    },
    methods: {
        close(){
            this.$emit('closeShow')
        }
    },
    mounted () {
    
    }
    
};
</script>

<style scoped lang='scss'>
.active-wrap{
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5)
}
.closeA{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 2.55rem;
}
.main{
    position: fixed;
    bottom: 0;
    height: 2.55rem;
    width: 100%;
    box-sizing: border-box;
    padding: 0.21rem 0.25rem 0.19rem;
    background: white;
}
.title{
    line-height: 0.15rem;
    text-align: center;
    font-size: 0.15rem;
    margin-bottom: 0.15rem;
    font-weight: 800;
}
.active-list{
    height: 1.86rem;
    overflow: hidden;
}
.active{
    line-height: 0.15rem;
    margin-bottom: 0.13rem;
    font-size: 0.11rem;
}
.active-icon{
    width: 0.29rem;
    height: 0.15rem;
    padding:  0 0.035rem;
    border-radius: 0.01rem;
    margin-right: 0.07rem;
    color: white;
}
.close{
    position: absolute;
    font-size: 0.30rem;
    top: 0.02rem;
    right: 0.13rem;
}
</style>