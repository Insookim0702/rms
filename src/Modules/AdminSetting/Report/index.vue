<template>
    <div class="index d-flex flex-column">
        <div class="space mt-10 px-10">
            <header class="d-flex justify-space-between">
                <h1>Report setting</h1>
                <!-- <v-btn class="create_report_btn" width="150" height="40" color="primary"><v-icon>mdi-file-plus</v-icon></v-btn> -->
            </header>
            <div class="body d-flex justify-space-between">
                <ReportList></ReportList>
                <Report></Report>
            </div>
        </div>
    </div>
</template>
<script>
import ReportList from './components/ReportList.vue';
import Report from './components/Report.vue';
export default {
    data() {
        return {};
    },
    components: {
        Report,

        ReportList
    }
};
</script>
<style lang="scss" scoped>
.index {
    height: 100%;
    min-height: 100vh;
    padding-left: 250px;

    .space {
        .body {
            gap: 20px;

        }
    }
}
</style>
