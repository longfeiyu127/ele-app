<template>
<sub-page pageId="detail">
    <detail-header></detail-header>
    <detail-nav></detail-nav>
    <detail-list></detail-list>
</sub-page>
</template>

<script>
import SubPage from '../../common/Subpage'
import Header from '../../components/home/detail/Header'
import Nav from '../../components/home/detail/Nav'
import List from '../../components/home/detail/List'
export default {
    components: {
        [SubPage.name]: SubPage,
        [Header.name]: Header,
        [Nav.name]: Nav,
        [List.name]: List,
    }
}
</script>

<style>

</style>
