import axios from 'axios'
import Api from '../api'
import {handleImage} from '../util/handleImage'
import {handleArray} from '../util/handleArray'

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

