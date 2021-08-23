<template lang="">
    <v-dialog v-model="dialog" width="800">
        <template v-slot:activator="{ on, attrs }">
            <v-btn class="tag" color="deep-purple lighten-2" text v-bind="attrs" v-on="on">
                Tag Name
            </v-btn>
        </template>

        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
                Tag Name
            </v-card-title>

            <v-card-text>
                <v-row class="my-5">
                    <BaseDatePicker />
                    <v-btn icon @click="refresh()"><v-icon color="primary">mdi-refresh</v-icon></v-btn>
                </v-row>
                <v-row class="chart_box d-flex justify-center">
                    <LineChart :pIndex="pIndex" />
                </v-row>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="csvDownload()"> <v-icon color="primary">mdi-download</v-icon> CSV DOWNLOAD </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import LineChart from '@/Modules/LineChart';
export default {
    name: 'modal',
    props: {
        pIndex: {
            type: [Number, String],
            default: 0
        }
    },
    components: {
        LineChart
    },
    data() {
        return {
            dialog: false,
            sStartDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
            sEndDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
            sStartDateCalendar: false,
            sEndDateCalendar: false
        };
    },
    methods: {
        refresh() {
            console.log('refresh');
        },
        csvDownload() {
            console.log('download');
        }
    }
};
</script>
<style lang="scss" scoped>
.v-text-field input {
    max-width: 100px !important;
}
.tag {
    max-height: 40px;
    background-color: $BACKGROUND_GRAY;
    padding: 7px;
    border: 1px solid rgba(0, 0, 0, 0.12);
}

.tag:hover {
    background-color: rgb(211, 211, 255);
    cursor: pointer;
}
</style>
