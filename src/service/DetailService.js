import axios from 'axios'
import Api from '../api'
import {handleImage} from '../util/handleImage'
import {handleArray} from '../util/handleArray'
import {handleColor} from '../util/handleColor'

//请求商家详情
export function getSellerInfo(id,latitude,longitude,extras){
    return new Promise((resolve, reject)=>{
        let path=Api.SELLER_INFO_URL+'/'+id
        axios.get(path,{
            params: {
                extras,
                terminal:'h5',
                latitude,
                longitude,
            }
        }).then((response)=>{
            console.log(response)
            let gotData={
                is_premium:response.data.is_premium,  //是否品牌
                name:response.data.name,  //店名
                rating:response.data.rating, //5分
                recent_order_num:response.data.recent_order_num,  //销量
                delivery_mode:response.data.delivery_mode.text,  //蜂鸟专送
                order_lead_time:response.data.order_lead_time,   //提前期
                distance:response.data.distance, //距离
                phone:response.data.phone,
                image_path:handleImage(response.data.image_path,90),    //顶部
                image_path_top:handleImage(response.data.image_path,130),
                image_hash:handleImage(response.data.shop_sign.image_hash,90),   //brand 图片
                float_delivery_fee:response.data.float_delivery_fee,  //配送费
                float_minimum_order_amount:response.data.float_minimum_order_amount,  //起送
                activities:response.data.activities?response.data.activities.map((item)=>{
                    return {
                      icon_name:item.icon_name,
                      icon_color:item.icon_color,
                      description:item.description
                    }
                }):null,
                supports:{
                  icon_name:response.data.supports.icon_name,
                  icon_color:response.data.supports.icon_color,
                  description:response.data.supports.description
                },
                address:response.data.address,
                opening_hours:response.data.opening_hours[0]
            };
            resolve(gotData)
        })
    })
}