<template>
    <!-- <div class="main"> -->
    <v-container fluid class="main pa-0 d-flex flex-column align-center justify-center">
        <v-container fluid class="main_body" :class="$vuetify.breakpoint.xs ? 'pa-0' : 'pa-4'">
            <h1>그룹 명</h1>
            <GroupInfo />
            <div class="group_box">
                <GroupBody />
                <GroupBody />
                <GroupBody />
                <GroupBody />
                <GroupBody />
            </div>
        </v-container>
        <BaseModal>
            <div slot="header">header</div>
            <div slot="content"></div>
            <div slot="footer"></div>
        </BaseModal>
        <v-btn class="scroll_to_top mx-2" fab @click="$vuetify.goTo(0, 'easeInOutQuad')"><v-icon color="primary">mdi-arrow-up-thick</v-icon></v-btn>
    </v-container>
    <!-- </div> -->
</template>
<script>
import GroupBody from './components/GroupBody';
import GroupInfo from './components/GroupInfo';
export default {
    components: {
        GroupBody,
        GroupInfo
    }
};
</script>
<style lang="scss" scoped>
.main {
    background-color: $BACKGROUND_GRAY;
    height: 100%;
    min-height: 100vh;

    &_body {
        max-width: $MAX_WIDTH;
    }
}

.scroll_to_top {
    position: fixed;
    bottom: 20px;
    right: 5vw;
}

//📱 view port 가 400px 이하로 작을 때
@media (max-width: 600px) {
    .scroll_to_top {
        background-color: white;
        width: 40px;
        height: 40px;
        position: fixed;
        bottom: 20px;
        right: 30px;
    }
}
</style>
