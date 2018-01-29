
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

/*
定位地址address
https://h5.ele.me
/restapi/bgs/poi/reverse_geo_coding
?latitude=22.54286
&longitude=114.059563
*/
const ADDRESS_URL = '/restapi/bgs/poi/reverse_geo_coding';

/**
请求附近位置
https://h5.ele.me
/restapi/bgs/poi/search_poi_nearby
?keyword=%E5%90%8E%E7%91%9E
&offset=0
&limit=20
&latitude=22.630428
&longitude=113.836366
 */
const NEWADDRESS_URL = '/restapi/bgs/poi/search_poi_nearby';


/**
评价总体信息
https://h5.ele.me
/restapi/ugc/v2/restaurants/1086080/ratings/scores
*/
const EVALUATE_INFO_URL = '/restapi/ugc/v2/restaurants';

/**
 * 评价总列表
评价总列表
https://h5.ele.me
/restapi/ugc/v2/restaurants/1086080/ratings/tags
 */
//evaluate
const EVALUATE_LIST_URL = '/restapi/ugc/v2/restaurants';

 /**
 分类评价
https://h5.ele.me
/restapi/ugc/v3/restaurants/1086080/ratings
?has_content=true
&tag_name=%E6%9C%89%E5%9B%BE    //有值 为分类评价  没有值为全部评价
&offset=0
&limit=8
*/
const EVALUATE_AMIN_URL = '/restapi/ugc/v3/restaurants';

/*
banner图详情 列表
https://h5.ele.me
/restapi/shopping/v2/foods_page/sift_factors
?entry_id=20004689          
&longitude=114.059563
&latitude=22.54286
&terminal=h5
*/
const BANNERLIST_URL = '/restapi/shopping/v2/foods_page/sift_factors';

/*
https://h5.ele.me
/restapi/shopping/v3/restaurants
?latitude=22.54286
&longitude=114.059563
&keyword=
&offset=0
&limit=8
&extras[]=activities
&extras[]=tags
&terminal=h5
&brand_ids[]=
&restaurant_category_ids[]=209
&restaurant_category_ids[]=212
&restaurant_category_ids[]=213
*/
const BANNER_DATA_URL='/restapi/shopping/v3/restaurants'

/*
全部分类
https://h5.ele.me
/restapi/shopping/v2/restaurant/category
?latitude=22.54286
&longitude=114.059563
categories
*/
const CATRGORIES_URL='/restapi/shopping/v2/restaurant/category'


/*
筛选数据
https://h5.ele.me
/restapi/shopping/v1/restaurants/filter-bar/attributes
?latitude=22.54286
&longitude=114.059563
&terminal=h5
//filtrateData
*/
const FILTRATEDATA_URL='/restapi/shopping/v1/restaurants/filter-bar/attributes'

/*
热门搜索
https://h5.ele.me
/restapi/shopping/v3/hot_search_words
?latitude=22.54286
&longitude=114.059563
*/
const HOTSEARCH_URL='/restapi/shopping/v3/hot_search_words'

export default {
    BANNER_URL,
    IMAGE_HOST,
    SELLER_URL,
    BOON_URL,
    SUGGEST_URL,
    RECOMMEND_URL,
    SELLER_INFO_URL,
    SELLER_MENU_URL,
    ADDRESS_URL,
    NEWADDRESS_URL,
    EVALUATE_INFO_URL,
    EVALUATE_LIST_URL,
    EVALUATE_AMIN_URL,
    BANNERLIST_URL,
    BANNER_DATA_URL,
    CATRGORIES_URL,
    FILTRATEDATA_URL,
    HOTSEARCH_URL,
}






