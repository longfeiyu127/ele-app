
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

/*
店铺信息
https://h5.ele.me
/restapi/shopping/restaurant
/150107564  //id
?extras[]=activities
&extras[]=albums
&extras[]=license
&extras[]=identification
&extras[]=qualification
&terminal=h5
&latitude=31.23037
&longitude=121.473701
*/
const SELLER_INFO_URL = '/restapi/shopping/restaurant';

/*
店铺菜单
https://h5.ele.me
/restapi/shopping/v2/menu
?restaurant_id=150107564
*/
///restapi/shopping/v2/menu?restaurant_id=150107564
const SELLER_MENU_URL = '/restapi/shopping/v2/menu';

export default {
    BANNER_URL,
    IMAGE_HOST,
    SELLER_URL,
    BOON_URL,
    SUGGEST_URL,
    RECOMMEND_URL,
    SELLER_INFO_URL,
    SELLER_MENU_URL,
}

