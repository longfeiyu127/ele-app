<template>
    <div class="active-body">
        <ul class="active-box">
            <li class="active-main" v-for="(item,index) in activeData" v-if="index<3" :key="index">
                <img :src="item.img" alt="" class="active-body-img">
                <h5 class="active-body-title">{{item.title}}</h5>
                <div>
                    <em class="price">{{item.price}}金币</em>
                    <span class="value">￥{{item.value}}</span>
                </div>
                <div class="label" v-if="item.marker">{{item.marker}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'discover-active-body',
    data(){
        return {

        }
    },
    props:{
        pageId:String,
        activeData:Array,
    },

};
</script>

<style scope>
.active-box{
    padding: 0.11rem 0.14rem 0.19rem;
    display: flex;
    justify-content: space-between;
}
.active-main{
    position: relative;
}
.active-body-img{
    width: 1.06rem;
    height: 1.06rem;
}
.active-body-title{
    font-size: 0.12rem;
    line-height: 0.35rem;
    color: #666;
    font-weight: 400;
}
.price{
    line-height: 0.12rem;
    font-size: 0.12rem;
    color: #ff5339;
}
.value{
    font-size: 0.1rem;
    text-decoration: line-through;
    color: #aaaaaa;
}
.label{
    position: absolute;
    width: 0.49rem;
    height: 0.17rem;
    background: #413d3c;
    font-size: 0.1rem;
    line-height: 0.17rem;
    text-align: center;
    color: white;
    top: 0;
    left: 0;
}
</style>