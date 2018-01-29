import axios from 'axios'
import Api from '../api'

/*
热门搜索
https://h5.ele.me
/restapi/shopping/v3/hot_search_words
?latitude=22.54286
&longitude=114.059563
*/
//请求热门搜索
export function getHotData(lat,lon){
    return new Promise((resolve, reject)=>{
        axios.get(Api.HOTSEARCH_URL,{
            params: {
                'latitude': lat,
                'longitude': lon
            }
        }).then((result)=>{
            resolve(result.data)
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
// export function getNewAddress(keyword,latitude,longitude){
//     return new Promise((resolve, reject)=>{
//         axios.get(Api.NEWADDRESS_URL,{
//             params: {
//                 keyword,
//                 'offset': 0,
//                 'limit': 20,
//                 latitude,
//                 longitude,
//             }
//         }).then((result)=>{
//             // console.log(result)
//             let newData = result.data.map(data=>{
//                 return{
//                     name:data.name,
//                     address:data.address,
//                     latitude:data.latitude,
//                     longitude:data.longitude,
//                 }
//             })
//             resolve(newData)
//         })
//     })
// }

