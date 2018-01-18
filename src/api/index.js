
//请求banner地址
const BANNER_URL = '/restapi/shopping/openapi/entries';

/*
首页轮播图接口
参数
latitude:纬度
longitude:经度
templates[]: main_template   favourable_template   svip_template
*/
//请求图片地址
const IMAGE_HOST = 'http://fuss10.elemecdn.com/';


/*
首页商家推荐列表
参数
latitude:纬度
longitude:经度
offset=0
limit=12
extras[]=activities   tags
extra_filters=home
rank_id=984553df2830414c9058eaff4b63bbaa
terminal=h5
*/
const SELLER_URL = '/restapi/shopping/v3/restaurants';




export default {
    BANNER_URL,
    IMAGE_HOST,
    SELLER_URL
}

