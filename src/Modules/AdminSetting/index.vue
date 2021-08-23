<template>
    <v-container fluid class="adminSetting d-flex">
        <BaseSideMenu />
        <v-container fluid class="content">
            <router-view></router-view>
        </v-container>
    </v-container>
</template>
<script>
export default {
    methods: {}
};
</script>
<style lang="scss" scoped>
.adminSetting {
    background-color: $BACKGROUND_GRAY;

    .list_box {
        width: 80vw;
    }
}

.user_img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: gray;
    margin-right: 30px;
}
.item {
    border: 1px solid gray;
}
</style>
