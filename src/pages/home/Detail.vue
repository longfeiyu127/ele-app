<template>
<div class="list-wrap">
    <!-- <detail-header></detail-header> -->
    <sub-page-detail pageId="detail">
        <div class="list">
            <detail-header></detail-header>
            <detail-nav></detail-nav>
            <!-- <router-view></router-view> -->
            <detail-menu class="one-border-top"></detail-menu>
        </div>
    </sub-page-detail>
</div>
</template>

<script>
import SubPageDetail from '../../common/SubpageDetail'
import Header from '../../components/home/detail/Header'
import Nav from '../../components/home/detail/Nav'
import List from '../../components/home/detail/List'
import Menu from '../../components/home/detail/Menu'
export default {
    components: {
        [SubPageDetail.name]: SubPageDetail,
        [Header.name]: Header,
        [Nav.name]: Nav,
        [List.name]: List,
        [Menu.name]: Menu,
    }
}
</script>

<style scoped>
.list-wrap{
    position: absolute;
    height: 100%;
    width: 100%;
}

</style>
