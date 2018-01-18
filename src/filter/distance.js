import Vue from 'vue'

Vue.filter('distance', function(val, flag){
    //过滤器方法接收到的参数，第一个是需要过滤的值，之后的参数就是调用过滤器方法的参数
    if(val>1000){
        return (val/1000).toFixed(2)+'km'
    }
    return val+'m'
})