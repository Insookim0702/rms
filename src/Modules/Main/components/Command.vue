<template lang="">
    <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="deep-purple lighten-2" text v-bind="attrs" v-on="on">
                Setting
            </v-btn>
        </template>

        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
                Command
            </v-card-title>

            <v-card-text>
                <p>Date</p>
                <p>start date</p>
                <v-menu
                    ref="sStartDateCalendar"
                    v-model="sStartDateCalendar"
                    :close-on-content-click="false"
                    :return-value.sync="sStartDate"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="sStartDate" label="Picker in sStartDateCalendar" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="sStartDate" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="sStartDateCalendar = false">
                            Cancel
                        </v-btn>
                        <v-btn text color="primary" @click="$refs.sStartDateCalendar.save(sStartDate)">
                            OK
                        </v-btn>
                    </v-date-picker>
                </v-menu>
                <p>end date</p>
                <v-menu
                    ref="sEndDateCalendar"
                    v-model="sEndDateCalendar"
                    :close-on-content-click="false"
                    :return-value.sync="sEndDate"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="sEndDate" label="Picker in sEndDateCalendar" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
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
                </v-menu>
                <p>Power</p>
                <v-text-field :rules="rules"></v-text-field>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">
                    I accept
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'modal',
    data() {
        return {
            dialog: false,
            menu: false,
            sStartDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
            sEndDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
            sStartDateCalendar: false,
            sEndDateCalendar: false,
            modal: false,
            menu2: false,
            rules: [
                value => !!value || 'Required.',
                value => (value || '').length <= 20 || 'Max 20 characters',
                value => {
                    const pattern = /^[\d]*$/;
                    return pattern.test(value) || 'Invalid number.';
                }
            ]
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped></style>
