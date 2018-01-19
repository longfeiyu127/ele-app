import axios from 'axios'
import Api from '../api'
import {handleImage} from '../util/handleImage'
import {handleArray} from '../util/handleArray'
import {handleColor} from '../util/handleColor'

//请求boon的函数
export function getBoonData(platform,block_index,lat,lon){
    return new Promise((resolve, reject)=>{
        axios.get(Api.BOON_URL,{
            params: {
                platform,
                block_index,
                'latitude': lat,
                'longitude': lon,
            }
        }).then((result)=>{
            let newData=result.data[1].map(item=>{
                return {
                    title:item.title,
                    titleColor:item.title_color,
                    subtitle:item.subtitle,
                    img:handleImage(item.main_pic_hash,90) 
                }
            })
            resolve(newData)
            
        })
    })
}

//请求suggest的函数
export function getSuggestData(){
    return new Promise((resolve, reject)=>{
        axios.get(Api.SUGGEST_URL).then((result)=>{
            console.log(result.data)

            let newData=result.data.map((item,index)=>{
                if(index<3){
                    return {
                        title:item.title,
                        price:item.points_required,
                        value:item.original_price,
                        img:handleImage(item.image_hash,130),
                        marker:item.corner_marker,
                        url:item.url
                    }
                }
            })
            resolve(newData)
        })
    })
}

//请求Recommend的函数
export function getRecommendData(latitude,longitude,offset,limit){
    return new Promise((resolve, reject)=>{
        axios.get(Api.RECOMMEND_URL,{
            params: {
                latitude,
                longitude,
                offset,
                limit,
        }}).then((result)=>{
            console.log(result.data.items)
            let newData=result.data.items.map(item=>{
                let originalPrice=null;
                let activity=null;
                if(item.food.discount_activity){
                    activity = item.food.discount_activity
                }else{
                    originalPrice = item.food.original_price
                }
                return {
                    img:handleImage(item.food.image_path,345),  //图片
                    title:item.food.name,  //名称
                    sales:item.food.month_sales,  //销量
                    rate:item.food.satisfy_rate,  //好评
                    price:item.food.price,  //价格
                    activity,  //活动
                    originalPrice,  //原价
                    sellerName:item.food.restaurant_name,  //店铺名称
                    url:item.food.cart_link,  //url地址
                }
            })
            resolve(newData)
        })
    })
}

