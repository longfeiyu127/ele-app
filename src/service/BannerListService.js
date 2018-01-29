import axios from 'axios'
import Api from '../api'
import {handleImage} from '../util/handleImage'

//请求地址的函数
export function getDataList(lat,lon,entry_id,){
    return new Promise((resolve, reject)=>{
        axios.get(Api.BANNERLIST_URL,{
            params: {
                entry_id,         
                longitude:lon,
                latitude:lat,
                terminal:'h5',
            }
        }).then((result)=>{
            // console.log(result)
            resolve(result.data)
        })
    })
}

//https://h5.ele.me/restapi/shopping/v2/foods_page/sift_factors?entry_id=20008833&longitude=113.844168&latitude=22.631847&terminal=h5

//请求列表数据
export function getDataMain(
    lat,
    lon,
    kw,
    offset,
    limit,
    order_by,
    restaurant_category_ids,
    activity_types,
    support_ids,
    delivery_mode,
    average_cost_ids,
    super_vip,){  
    let keyword=kw=='全部'?null:kw;
    return new Promise((resolve, reject)=>{
        axios.get(Api.BANNER_DATA_URL,{
            params: {
                latitude:lat,
                longitude:lon,
                keyword,
                offset,
                limit,
                extras:['activities','tags'],
                terminal:'h5',
                brand_ids:null,
                restaurant_category_ids,
            }
        }).then((result)=>{
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
            // console.log(newData)
            resolve(newData)
        })
    })
}


//请求全部分类数据
export function getCategories(lat,lon){
    return new Promise((resolve, reject)=>{
        axios.get(Api.CATRGORIES_URL,{
            params: {       
                longitude:lon,
                latitude:lat,
            }
        }).then((result)=>{
            console.log(result.data)
            let newData=result.data.slice(1).map(data=>{
                return {
                    count:data.count,       //数量
                    name:data.name,       //名称
                    ids:data.ids,       //编号
                    sub_categories:data.sub_categories.map(item=>{  //内容
                        return {
                            count:item.count,       //数量
                            name:item.name,       //名称
                            img:handleImage(item.image_url,90), // 图片
                        }
                    }),     
                }
            })
            resolve(newData)
        })
    })
}

//请求筛选数据
export function getFiltrateDatat(lat,lon){
    return new Promise((resolve, reject)=>{
        axios.get(Api.FILTRATEDATA_URL,{
            params: {      
                longitude:lon,
                latitude:lat,
                terminal:'h5',
            }
        }).then((result)=>{
            // console.log(result.data)
            resolve(result.data)
        })
    })
}


