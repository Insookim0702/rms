<template>
    <div class="index d-flex flex-column">
        <div class="mt-10 px-10">
            <header>
                <h1>Chart setting</h1>
            </header>
            <div class="body">
                <Chart />
            </div>
        </div>
    </div>
</template>
<script>
import Chart from '@/Modules/AdminSetting/Chart/components/chart';
export default {
    data() {
        return {};
    },
    components: { Chart }
};
</script>
<style lang="scss" scoped>
.index {
    height: 100%;
    min-height: 100vh;
    padding-left: 250px;
}
</style>
