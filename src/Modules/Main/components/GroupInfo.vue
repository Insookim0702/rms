<template>
    <v-card class="filter_body mt-5 pa-5">
        <div class="info_box">
            <p class="info_box_title">Taglet Total Count</p>
            <p class="number">30</p>
        </div>
        <div class="info_box">
            <p class="info_box_title">Active Taglet Count</p>
            <p class="number">20</p>
        </div>
        <div class="info_box">
            <p class="info_box_title">Group Total Power</p>
            <p class="number">80W</p>
        </div>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        items: ['foo', 'bar', 'fizz', 'buzz'],
        values: ['foo', 'bar'],
        value: null
    })
};
</script>
<style lang="scss" scoped>
.filter_body {
    width: 100%;
    height: 20vw;
    max-height: 140px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    align-items: center;

    .info_box {
        &_title {
            font-size: 2vw;
            text-align: center;
        }

        .number {
            font-size: 4vw;
            text-align: center;
            height: 50%;
        }

        p {
            margin: 0;
        }
    }
}

//📱 view port 가 400px 이하로 작을 때
@media (max-width: 600px) {
    .filter_body {
        height: 25vw;
        .info_box {
            &_title {
                font-size: 4vw;
                text-align: center;
            }

            .number {
                font-size: 5vw;
                text-align: center;
                height: 50%;
                font-weight: 600;
            }

            p {
                margin: 0;
            }
        }
    }
}
// 💻

// 🖥 view port 가 1200px 이상 클 때
@media (min-width: $MAX_WIDTH) {
    .filter_body {
        height: 10vw;
        max-height: 175px;
        .info_box {
            &_title {
                font-size: 1.3vw;
                text-align: center;
            }

            .number {
                font-size: 2.7vw;
                text-align: center;
                height: 50%;
            }

            p {
                margin: 0;
            }
        }
    }
}
</style>
