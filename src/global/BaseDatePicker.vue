<template>
    <v-row fluid class="date_picker mx-1">
        <!-- <v-col> -->
        <v-menu
            ref="sStartDateCalendar"
            v-model="sStartDateCalendar"
            :close-on-content-click="false"
            :return-value.sync="sStartDate"
            transition="scale-transition"
            offset-y
            :nudge-right="40"
            :nudge-top="10"
            min-width="auto"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="sStartDateTime"
                    max-width="70px"
                    label="Picker in start date"
                    append-icon="mdi-calendar-arrow-right"
                    readonly
                    outlined
                    dense
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker class="picker" v-model="sStartDate" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="sStartDateCalendar = false">
                    Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.sStartDateCalendar.save(sStartDate)">
                    OK
                </v-btn>
            </v-date-picker>
            <v-time-picker class="time-picker" v-model="sStartTime" use-seconds format="24hr" width="250" @change="updateStartDateTime" />
        </v-menu>
        <!-- </v-col> -->
        <!-- <p class="px-5 text--h5 align-center">~</p> -->
        <!-- <v-col> -->
        <v-menu
            ref="sEndDateCalendar"
            v-model="sEndDateCalendar"
            :close-on-content-click="false"
            :return-value.sync="sEndDate"
            transition="scale-transition"
            :nudge-right="40"
            :nudge-top="10"
            offset-y
            min-width="auto"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="sEndDateTime"
                    label="Picker in end date"
                    append-icon="mdi-calendar-arrow-left"
                    outlined
                    dense
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker v-model="sEndDate" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="sEndDateCalendar = false">
                    Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.sEndDateCalendar.save(sEndDate)">
                    OK
                </v-btn>
            </v-date-picker>
            <v-time-picker class="time-picker" v-model="sEndTime" use-seconds format="24hr" width="250" @change="updateEndDateTime" />
        </v-menu>
        <!-- </v-col> -->
        <!-- <v-btn icon @click="refresh()"><v-icon color="primary">mdi-refresh</v-icon></v-btn> -->
    </v-row>
</template>
<script>
export default {
    methods: {
        updateStartDateTime() {
            this.sStartDateTime = `${this.sStartDate} ${this.sStartTime}`;
        },
        updateEndDateTime() {
            this.sEndDateTime = `${this.sEndDate} ${this.sEndTime}`;
        }
    },
    data() {
        return {
            sStartDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
            sEndDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
            sStartDateCalendar: false,
            sEndDateCalendar: false,
            sStartTime: null,
            sEndTime: null,
            sStartDateTime: '',
            sEndDateTime: ''
        };
    }
};
</script>
<style lang="scss" scoped>
.v-menu__content {
    display: flex;
}
.date_picker {
    display: flex;
}
</style>
