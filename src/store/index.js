import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    latitude:null,
    longitude:null,
    rank_id:'984553df2830414c9058eaff4b63bbaa',
    address:null,
}

const mutations={
    //修改纬度方法
    modifyLongitude(state,param){
        console.log(state,'触发修改纬度事件');
        state.longitude = param;
    },
    //修改经度方法
    modifyLatitude(state,param){
        console.log(state,'触发修改经度事件');
        state.latitude = param;
    },
    //修改地址方法
    modifyAddress(state,param){
        console.log(state,'触发修改地址事件');
        state.address = param;
    }
}

const actions = {
    //定位事件
    getLocationActive(context){
        return new Promise((resolve, reject)=>{
            console.log('触发定位')
            //获取定位
            setTimeout(()=>{
                // let lon=121.473701;
                // let lat=31.23037;
                let lon=113.844168;
                let lat=22.631847;

                //113.844168,22.631847
                context.commit('modifyLongitude',lon)
                context.commit('modifyLatitude',lat)
                console.log('定位成功')
                resolve()
            })
        })
    },
    //修改地址事件
    modifyAddressAction(context,action){
        console.log('触发了修改地址')
        //修改地址
        context.commit('modifyAddress',action)
    },

    //修改经纬度事件
    modifyLocationAction(context,action){
        console.log('触发了修改经纬度111111')
        // //修改纬度
        context.commit('modifyLongitude',action.lon)
        //修改经度
        context.commit('modifyLatitude',action.lat)
    }
}

const store = new Vuex.Store({

    //全局状态
    state:state,

    //全局计算状态

    //修改全局状态方法
    mutations:mutations,

    //处理逻辑 触发修改全局状态方法 //可做异步操作
    actions:actions,

    //划分模块

});

export default store;