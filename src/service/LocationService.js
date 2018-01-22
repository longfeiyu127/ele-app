import axios from 'axios'
import Api from '../api'

//请求地址的函数
export function getAddress(lat,lon){
    return new Promise((resolve, reject)=>{
        axios.get(Api.ADDRESS_URL,{
            params: {
                'latitude': lat,
                'longitude': lon
            }
        }).then((result)=>{
            console.log(result)
            let newData={
                name:result.data.name,
                address:result.data.address,
            }
            resolve(newData)
        })
    })
}

/*
请求附近位置
https://h5.ele.me/restapi/bgs/poi/search_poi_nearby
?keyword=%E5%90%8E%E7%91%9E
&offset=0
&limit=20
&latitude=22.630428
&longitude=113.836366
*/
//请求附近位置
export function getNewAddress(keyword,latitude,longitude){
    return new Promise((resolve, reject)=>{
        axios.get(Api.NEWADDRESS_URL,{
            params: {
                keyword,
                'offset': 0,
                'limit': 20,
                latitude,
                longitude,
            }
        }).then((result)=>{
            console.log(result)
            let newData = result.data.map(data=>{
                return{
                    name:data.name,
                    address:data.address,
                    latitude:data.latitude,
                    longitude:data.longitude,
                }
            })
            resolve(newData)
        })
    })
}

