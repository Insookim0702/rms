<template>
    <div>
        <canvas :id="`chart-${pIndex}`" width="3000" height="1000"></canvas>
    </div>
</template>
<script>
import { Chart, LineElement, PointElement, LineController, LinearScale, CategoryScale } from 'chart.js';
Chart.register(LineElement, PointElement, LineController, LinearScale, CategoryScale);
export default {
    props: {
        pIndex: {
            type: [Number, String],
            default: 0
        }
    },
    methods: {
        fillData() {
            if (window.myChart != undefined) {
                window.myChart.destroy();
            }
            const ctx = document.getElementById(`chart-${this.pIndex}`).getContext('2d');
            window.myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [
                        {
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.fillData();
        });
    }
};
</script>
<style lang="scss" scoped]></style>
