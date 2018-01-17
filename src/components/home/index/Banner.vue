<template>
    <div class="banner">
        <div class="banner-list-wrap">
            <div class="banner-list">
                <a href="">
                    <img src="" alt="" class="banner-img">
                    <span class="banner-title">美食</span>
                </a>
                <a href="">
                    <img src="" alt="" class="banner-img">
                    <span class="banner-title">美食</span>
                </a>
                <a href="">
                    <img src="" alt="" class="banner-img">
                    <span class="banner-title">美食</span>
                </a>
                <a href="">
                    <img src="" alt="" class="banner-img">
                    <span class="banner-title">美食</span>
                </a>
                <a href="">
                    <img src="" alt="" class="banner-img">
                    <span class="banner-title">美食</span>
                </a>
            </div>
        </div>
        <div class="banner-newUser">
            <img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'home-banner'
};
</script>

<style scoped>
.banner{
    width: 100%;
    height: 2.67rem;
    background: white;
    margin-bottom: 0.07rem;
}
.banner-list-wrap{
    width: 100%;
    height: 1.7rem;
    overflow: hidden;
}
.banner-list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.banner-list a{
    width: 25%;
    text-align: center;
    height: 0.71rem;
}
.banner-img{
    width: 0.46rem;
    height: 0.46rem;
    margin: 0.1rem auto 0;
}
.banner-title{
    font-size: 0.11rem;
    line-height: 0.13rem;
    color: #666666;
}
.banner-newUser{
    width: 3.4rem;
    height: 0.83rem;
    margin: 0 auto;
}
.banner-newUser img{
    width: 100%;
    height: 100%;
}
</style>