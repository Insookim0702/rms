<template>
    <div>
        <LineChart :pIndex="pIndex" ref="line-chart" />
    </div>
</template>
<script>
import LineChart from './LineChart.vue';
export default {
    props: {
        pIndex: {
            type: [Number, String],
            default: 0
        }
    },
    components: {
        LineChart
    }
};
</script>
<style lang=""></style>
