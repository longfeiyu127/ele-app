import axios from 'axios'
import Api from '../api'
import {handleImage} from '../util/handleImage'
import {handleArray} from '../util/handleArray'
import {handleColor} from '../util/handleColor'

//请求banner的函数
export function getBanner(lat,lon,tmp){
    return new Promise((resolve, reject)=>{
        axios.get(Api.BANNER_URL,{
            params: {
                'latitude': lat,
                'longitude': lon,
                'templates': tmp
            }
        }).then((result)=>{
            let newData=result.data[0].entries.map(item=>{
                return {
                    name:item.name,
                    img:handleImage(item.image_hash,90) 
                }
            })
            let resultData =  handleArray(newData,8)
            resolve(resultData)
        })
    })
}

//请求商家列表
export function getSeller(latitude,longitude,offset,limit,rank_id){
    return new Promise((resolve,reject)=>{
        axios.get(Api.SELLER_URL,{
            params:{
                latitude,
                longitude,
                offset,
                limit,
                extras:['activities','tags'],
                extra_filters:'home',
                rank_id,
                terminal:'h5',
            }
        }).then(result=>{
            // console.log(result.data.items)
            let newData=result.data.items.map(item=>{
                let activities=item.restaurant.activities.map(val=>{      //活动  
                    return {
                        description:val.description,
                        icon_name:val.icon_name,
                        icon_color:val.icon_color,
                        tips:val.tips,
                    }
                })
                return {
                    img:handleImage(item.restaurant.image_path,130),    //店铺图片
                    name:item.restaurant.name, //店铺名称
                    premium:item.restaurant.is_premium,    //是否品牌店
                    supports:item.restaurant.supports,//发票
                    rating:item.restaurant.rating,//评分
                    orderNum:item.restaurant.recent_order_num,  //销量
                    deliveryMode:item.restaurant.delivery_mode, //是否蜂鸟配送
                    minimumOrderAmount:parseInt(item.restaurant.float_minimum_order_amount), //起送价格
                    deliveryFee:item.restaurant.float_delivery_fee.toFixed(2),  //配送费
                    distance:item.restaurant.distance, //距离
                    leadTime:item.restaurant.order_lead_time,    //配送时间
                    activities,         //活动
                    address:item.restaurant.address,    //地址
                    isShow:false,
                    id:item.restaurant.id
                }
            })
            resolve(newData)
        })
    })
}

//请求商家详情
export function getSellerInfo(latitude,longitude,extras){
    return new Promise((resolve, reject)=>{
        axios.get(Api.SELLER_INFO_URL,{
            params: {
                extras,
                terminal:'h5',
                latitude,
                longitude,
            }
        }).then((result)=>{
            // console.log(result)
            // let newData=result.data[0].entries.map(item=>{
            //     return {
            //         name:item.name,
            //         img:handleImage(item.image_hash,90) 
            //     }
            // })
            //resolve(resultData)
        })
    })
}