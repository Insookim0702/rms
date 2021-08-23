<template>
    <!-- <v-lazy
        v-model="isActive"
        :options="{
            threshold: 0.5
        }"
        min-height="200"
        transition="fade-transition slide-y-reverse-transition"
    > -->
    <v-card class="card" :loading="loading" max-height="370">
        <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>
        <header class="d-flex justify-space-between">
            <p>연료 전지 고유 번호</p>
            <!-- <p class="d-inline green--text">stopped</p> -->
            <!-- <p class="stop badges">stopped</p> -->
            <!-- <p class="running badges">running</p> -->
            <!-- <p class="alarm badges">alarm</p> -->
            <!-- <span class="v-chip theme--light v-size--x-small warning white--text">alarm</span> -->
            <!-- <v-btn rounded color="warning" dark @click="handleAlarmModal()">
                alarm
            </v-btn> -->
            <Alarm></Alarm>
            <!-- <p class="d-inline green--text">stopped</p> -->
            <!-- <div class="d-inline green--text ms-4">
                        running
                    </div> -->
            <!-- <v-card-title class="d-inline"></v-card-title> -->
            <!-- <v-chip>5:30PM</v-chip> -->
        </header>
        <v-divider class="mt-2"></v-divider>
        <div>
            <v-card-subtitle class="d-flex justify-space-between align-center pa-0">
                <p>power</p>
                <Command></Command>
            </v-card-subtitle>
            <p class="text-h3">80w</p>

            <!-- <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="reserve">
                    Setting
                </v-btn>
            </v-card-actions> -->
        </div>
        <v-divider class="mt-2"></v-divider>
        <div class="tag_list">
            <v-card-actions @click="show = !show">
                <v-btn color=" lighten-2" text>
                    Tag List 84개
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>
            <v-expand-transition>
                <div class="tag_box" v-show="show">
                    <TagChart :pIndex="1"></TagChart>
                    <TagChart :pIndex="2"></TagChart>
                    <TagChart :pIndex="3"></TagChart>
                    <TagChart :pIndex="4"></TagChart>
                    <TagChart :pIndex="5"></TagChart>
                    <TagChart :pIndex="6"></TagChart>
                    <TagChart :pIndex="7"></TagChart>
                    <TagChart :pIndex="8"></TagChart>
                    <TagChart :pIndex="9"></TagChart>
                    <TagChart :pIndex="10"></TagChart>
                    <TagChart :pIndex="11"></TagChart>
                    <TagChart :pIndex="12"></TagChart>
                    <TagChart :pIndex="13"></TagChart>
                    <TagChart :pIndex="14"></TagChart>
                    <TagChart :pIndex="15"></TagChart>
                    <TagChart :pIndex="16"></TagChart>
                    <TagChart :pIndex="17"></TagChart>
                    <TagChart :pIndex="18"></TagChart>
                    <TagChart :pIndex="19"></TagChart>
                    <TagChart :pIndex="20"></TagChart>
                    <TagChart :pIndex="21"></TagChart>
                    <TagChart :pIndex="22"></TagChart>
                </div>
            </v-expand-transition>
        </div>
    </v-card>
    <!-- </v-lazy> -->
</template>
<script>
import Alarm from './Alarm.vue';
import Command from './Command.vue';
import TagChart from './TagChart.vue';
export default {
    components: {
        Alarm,
        Command,
        TagChart
    },
    data: () => ({
        isActive: false,
        loading: false,
        selection: 1,
        show: false,
        sModalMode: ''
    }),

    methods: {
        handleTagChartModalOpen() {
            this.sModalMode = 'chart';
        },
        handleAlarmModal() {
            this.sModalMode = 'alarm';
        },
        handleCommandModal() {
            this.sModalMode = 'command';
        },
        reserve() {
            this.loading = true;

            setTimeout(() => (this.loading = false), 2000);
        }
    }
};
</script>
<style lang="scss" scoped>
p {
    margin: 0;
}
.card {
    padding: 15px;
    width: 100%;
    min-width: 280px;

    header {
        padding-bottom: 0px;

        .badges {
            border-radius: 15px;
            padding: 3px 10px;
            color: white;
        }
        .stop {
            background-color: red;
        }
        .running {
            background-color: rgb(138, 226, 5);
        }
        .alarm {
            background-color: orange;
        }
    }
}
.v-card__actions {
    padding: 0;
}

.tag_box {
    width: 100%;
    max-width: 350px;
    position: absolute;
    max-height: 400px;
    overflow-y: scroll;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: white;
}
</style>
