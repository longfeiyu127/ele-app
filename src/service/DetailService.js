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

//请求菜单数据
export function getMenu(id){
    return new Promise((resolve, reject)=>{
        axios.get(Api.SELLER_MENU_URL,{
            params: {
                restaurant_id:id
            }
        }).then((response)=>{
            console.log(response.data)
            let menuData=response.data.map(item=>{
                //console.log(item.foods)
                let food=item.foods.map(food=>{
                    //原价
                    //console.log(food.specfoods)
                    let original_price=food.specfoods[0].original_price?food.specfoods[0].original_price:food.specfoods[0].price
                    //价格
                    let activity_price=null;
                    //判断有没有活动
                    let activity=null
                    if(food.activity){
                        activity={
                            activity_price:food.activity.fixed_price,//活动价
                            activity_text:food.activity.applicable_quantity_text,    //活动说明
                            activity_text_color:food.activity.applicable_quantity_text_color,    //活动说明颜色
                            activity_num:food.activity.applicable_quantity,
                        };
                        //console.log(food.activity)
                        activity_price=food.activity.fixed_price;
                    }
                    //判断有没有规格
                    let specifications=null
                    if(food.specifications){
                        specifications=food.specifications

                    }
                    //判断价格
                    let price=activity_price?activity_price:original_price;
                    return{
                        img:handleImage(food.image_path,130),   //图片
                        name:food.name,                   //名称
                        description:food.description,     //说明
                        month_sales:food.month_sales,     //销量
                        satisfy_rate:food.satisfy_rate,   //评价
                        activity,                          //活动
                        price,//价格
                        specifications,           //规格  给规格加上名字 id 和价格
                        attributes:food.attributes,   //新品种
                        count:0,                    //数量
                    }
                })
                return{
                    title:item.name,    //标题
                    title_icon:handleImage(item.icon_url,90),
                    food,    //食物
                }
            })
            console.log(menuData)
            resolve(menuData)
        })
    })
}