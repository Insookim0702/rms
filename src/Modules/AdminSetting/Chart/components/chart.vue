<template>
    <v-container fluid>
        <v-row>
            <v-card class="pa-3 my-5">
                <LineChart />
            </v-card>
        </v-row>
        <v-row>
            <v-card class="setting pa-5 my-5">
                <v-row>
                    <v-col>
                        <p>tag color</p>
                        <v-color-picker v-model="sForm.sColor" dot-size="25" mode="hexa" swatches-max-height="200"></v-color-picker>
                    </v-col>
                    <v-col>
                        <v-row>
                            <!-- chart time range 설정 -->
                            <v-col>
                                <p>calculation mode</p>
                                <v-autocomplete v-model="sForm.sSelectedCalc" :items="sMode" outlined dense chips small-chips></v-autocomplete>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <p>time range</p>
                                <BaseDatePicker @eTimeRange="timeRange" />
                            </v-col>
                        </v-row>
                        <v-row>
                            <!-- raw로 보여줄 시간 설정 -->
                            <v-col>
                                <p>raw time range</p>
                                <v-autocomplete v-model="sForm.sRawTimeRange" :items="sRawTiemRange" outlined dense chips small-chips></v-autocomplete>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="d-flex justify-center py-5">
                    <v-btn color="primary" width="200" :loading="sSubmitState === 'PENDING'" id="saveSubmit" @click="updateSubmit()">Save</v-btn>
                </v-row>
            </v-card>
        </v-row>
    </v-container>
</template>
<script>
import LineChart from '@/Modules/LineChart';
export default {
    name: 'chartSetting',
    components: {
        LineChart
    },
    methods: {
        timeRange(aStartTimeRange, aEndTimeRange) {
            this.sStartTimeRange = aStartTimeRange;
            this.sEndTimeRange = aEndTimeRange;
        },
        updateSubmit() {
            console.log(this.sForm);
        }
    },
    data() {
        return {
            sMode: ['RAW', 'SUM', 'AVG'],
            sSubmitState: '',
            sRawTiemRange: [60, 90, 120],
            sForm: {
                sColor: '',
                sSelectedCalc: '',
                sStartTimeRange: '',
                sEndTimeRange: '',
                sRawTimeRange: ''
            }
        };
    }
};
</script>
<style lang="scss" scoped>
.setting {
    width: 100%;
    display: grid;
}
</style>
