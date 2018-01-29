import axios from 'axios'
import Api from '../api'
import {handleImage} from '../util/handleImage'
import {handleBgImage} from '../util/handleImage'
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
            // console.log(response.data.distance)
            let gotData={
                is_premium:response.data.is_premium,  //是否品牌
                name:response.data.name,  //店名
                rating:response.data.rating, //5分
                recent_order_num:response.data.recent_order_num,  //销量
                delivery_mode:response.data.delivery_mode.text,  //蜂鸟专送
                order_lead_time:response.data.order_lead_time,   //提前期
                distance:response.data.distance, //距离
                phone:response.data.phone,      //电话
                image_path:"url("+handleBgImage(handleImage(response.data.image_path,130))+")",    //顶部
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
                albums:response.data.albums?response.data.albums.map(item=>{    //商家实景
                    return {
                        name:item.name,       //照面名字
                        count:item.count,       //照片数量
                        cover_image:handleImage(item.cover_image_hash,130),     //照片路径(封面)
                    }
                }):null,
                supports:{
                  icon_name:response.data.supports.icon_name,
                  icon_color:response.data.supports.icon_color,
                  description:response.data.supports.description
                },
                address:response.data.address,                      //地址
                opening_hours:response.data.opening_hours[0],      //营业时间
                flavors:response.data.flavors?(response.data.flavors.map(item=>item.name)).join(','):null,      //品类
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
            // console.log(response.data)
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
            // console.log(menuData)
            resolve(menuData)
        })
    })
}

//https://h5.ele.me/restapi/ugc/v2/restaurants/1086080/ratings/scores
//EVALUATR_INFO
//请求评价总体信息
export function getEvaluateInfo(id){
    return new Promise((resolve, reject)=>{
        let path=Api.EVALUATE_INFO_URL+'/'+id+'/ratings/scores'
        axios.get(path).then((response)=>{
            let newData={
                compare_rating : (response.data.compare_rating*100).toFixed(1)+'%',  //相比周边
                deliver_time : response.data.deliver_time,      //送达事件
                food_score:response.data.food_score.toFixed(1),            //菜品评价
                order_rating_amount:response.data.order_rating_amount,  //全部评价数量
                overall_score:response.data.overall_score.toFixed(1),      //综合评价
                service_score:response.data.service_score.toFixed(1),      //服务态度
            }
            resolve(newData)
        })
    })
}

//请求评价列表
export function getEvaluateList(id){
    return new Promise((resolve, reject)=>{
        let path=Api.EVALUATE_LIST_URL+'/'+id+'/ratings/tags'
        axios.get(path).then((response)=>{
            resolve(response.data)
        })
    })
}


//请求评价内容

// ?has_content=true
// &tag_name=%E6%9C%89%E5%9B%BE    //有值 为分类评价  没有值为全部评价
// &offset=0
// &limit=8

export function getEvaluateMain(id,tag_name){
    if(tag_name=='全部'){
        tag_name=null
    };
    return new Promise((resolve, reject)=>{
        let path=Api.EVALUATE_AMIN_URL+'/'+id+'/ratings'
        axios.get(path,{
            params: {
                has_content:true,
                tag_name,
                offset:0,
                limit:8
            }
        }).then((response)=>{
            // console.log(response.data)
            let newData=response.data.map(data=>{
                let order_images=null;
                if(data.order_images){
                    order_images=data.order_images.map(item=>{
                        return {
                            img:handleImage(item.image_hash,142)
                        }
                    })
                }
                let food_ratings=data.food_ratings.map(item=>{
                    return {
                        food:item.rate_name
                    }
                })
                let avatar=data.avatar||'https://fuss10.elemecdn.com/c/f5/d0b0f2fc83f3ac3e4a0cfae891256png.png?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/'
                return {
                    //用户头像
                    avatar,
                    //用户名
                    username:data.username,
                    //日期
                    date:data.rated_at,
                    //评分
                    rating:data.rating,
                    //配送时间
                    time:data.time_spent_desc,
                    //评价文字
                    rating_text:data.rating_text,
                    //评价图片
                    order_images,
                    //食物
                    food_ratings,
                }
            })
            // console.log(newData)
            resolve(newData)
        })
    })
}


