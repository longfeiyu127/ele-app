<template>
  <section class="detail-header-wrap clearfix">        
      <ul class="menu-list">
            <li class="list" v-for="(item,index)  in  menuData" :key="index">
                <img class="title-icon" v-if="item.title_icon" :src="item.title_icon" alt="">{{item.title}}
            </li>
      </ul>
      <div class="menu-main" ref="Iscroll">
          <dl class="main-list" v-for="(item,i)  in  menuData" :key="i">
              <dt class="menu-title one-border-bottom">{{item.title}}</dt>
              <dd class="menu-sction clearfix" v-for="(food,j) in item.food" :key="j">
                  <img :src="food.img" alt="" class="menu-banner">
                  <div class="menu-info">
                        <h4 class="dishes-name">{{food.name}}</h4>
                        <span class="explain" v-if="food.description">{{food.description}}</span>
                        <span class="sales">
                            <em>月售{{food.month_sales}}份</em>
                            <em>好评{{food.satisfy_rate}}%</em></span>
                        <div class="buy">
                          <em class="price"><i>￥</i>{{food.price}}</em>
                          <div class="count"><i class="decrease"  v-show="food.count">-</i><span class="bur-count" v-show="food.count">{{food.count}}</span><i class="add">+</i></div>
                        </div>
                  </div>
              </dd>
          </dl>
      </div>
  </section>
</template>

<script>
import {getMenu} from '../../../service/DetailService'
import Iscroll from 'iscroll/build/iscroll-probe'
export default {
    name:'detail-menu',
    components:{

    },
    data(){
        return{
            menuData:[]
        }
    },
    methods: {
        // pageRefresh(){
        //     this.MyScroll.refresh();
        // },  
    },
    mounted () {
        //求情商品列表
        getMenu(this.$route.query.id).then(data=>{
            //console.log(data)
            this.menuData=data
        })

        //页面滑动
        // console.log(this.$refs.Iscroll)
        // this.MyScroll =new Iscroll(this.$refs.Iscroll,{
        //     // scrollbars: true,
        //     probeType: 3
        // });
        // this.pageRefresh()
        // //this.MyScroll.on('scrollStart', this.pageRefresh);
    }
};
</script>

<style scoped>
.menu-list{
    width: 0.74rem;
    float: left;
}
.list{
    line-height: 0.13rem;
    box-sizing: border-box;
    padding: 0.17rem 0.08rem;
    background: #f8f8f8;
    font-size: 0.115rem;
    color: #666666;
    border-bottom: 0.01rem solid #e8e8e8;
}
.menu-main{
    width: 2.76rem;
    float: right;
}
.title-icon{
    display: inline-block;
    width: 0.13rem;
    height: 0.13rem;
    border-radius: 0.01rem;
    margin-right: 0.06rem;
    vertical-align: middle;
}
.menu-title{
    height: 0.27rem;
    line-height: 0.27rem;
    font-size: 0.11rem;
    font-weight: 1000;
    color: #6d6d6d;
}
.menu-sction{
    margin: 0.1rem 0 0.24rem;
}
.menu-banner{
    height: 0.72rem;
    width: 0.72rem;
    float: left;
    margin-right: 0.11rem;
    background: pink;
}
.menu-info{
    float: left;
}
.dishes-name{
    line-height: 0.13rem;
    font-size: 0.13rem;
    font-weight: 800;
    width: 1.7rem;
    /* overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; */
}
.explain{
    display:block;
    line-height: 0.10rem;
    margin-top: 0.07rem;
    font-size: 0.08rem;
    color: #999999;
    width: 1.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.sales{
    display: block;
    font-size: 0.09rem;
    margin-top: 0.07rem;
    color: #666666;
}
.sales em:nth-child(2){
    padding-left: 0.08rem;
}
.buy{
    width: 1.8rem;
    display: flex;
    justify-content: space-between;
    margin-top:0.11rem; 
}
.price{
    font-size: 0.14rem;
    color: #ff6600;
    font-weight: 1000;
}
.price i{
    font-size: 0.08rem;
    padding-right: 0.02rem;
}
.count{

}
.count i{
    display: inline-block;
    text-align: center;
    height: 0.18rem;
    width: 0.18rem;
    line-height: 0.17rem;
    border-radius: 50%;
    border:  0.01rem solid #2395ff;
    font-size: 0.15rem;
    font-weight: 800;
}
.count span{
    display: inline-block;
    width: 0.27rem;
    text-align: center;
    font-size: 0.13rem;
}
.decrease{
    color: #2395ff;
}
.add{
    background: #2395ff;
    color: white;
}
</style>
