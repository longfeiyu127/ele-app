
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


/*

发现
https://h5.ele.me
/restapi/member/v1/discover
?platform=1
&block_index=0
&latitude=22.54286
&longitude=114.059563
*/
const BOON_URL = '/restapi/member/v1/discover';

/*
限时豪礼
https://h5.ele.me
/restapi/member/gifts/suggest
*/
const SUGGEST_URL = '/restapi/member/gifts/suggest';

/*
为你推荐
https://h5.ele.me
/restapi/shopping/v1/find/recommendation
?latitude=22.54286
&longitude=114.059563
&offset=0
&limit=6
*/
const RECOMMEND_URL = '/restapi/shopping/v1/find/recommendation';


export default {
    BANNER_URL,
    IMAGE_HOST,
    SELLER_URL,
    BOON_URL,
    SUGGEST_URL,
    RECOMMEND_URL,
}

