<template>
    <v-container fluid class="report d-flex flex-column pa-5" >
        <header class="d-flex justify-space-between">
            <h2>
                Report Name
            </h2>
            <div>
                <v-btn class="create_report_btn" width="150" height="40" color="primary"><v-icon>mdi-file-plus</v-icon></v-btn>
                <v-btn color="error" @click="deleteReportSubmit()">REPORT DELETE</v-btn>
            </div>
            
        </header>
        <div class="filter border pa-2">
            <h4 class="mb-4">Parameter setting.</h4>
            <div class="input_box px-3">
                <p>Report name</p>
                <v-text-field
                    v-model="sForm.sReportName"
                    @input="$v.sForm.sReportName.$touch()"
                    @blur="$v.sForm.sReportName.$touch()"
                    :error-messages="reportNameErrors"
                    outlined
                    dense
                ></v-text-field>
            </div>
            <div class="input_box px-3">
                <p>date</p>
                <BaseDatePicker />
            </div>
            <div class="input_box">
                <v-row class="mx-2 ">
                    <v-col class="pa-0 mr-5">
                        <p>group</p>
                        <v-autocomplete v-model="sSelectedGroup" :items="groups" outlined dense chips small-chips multiple></v-autocomplete>
                    </v-col>
                    <v-col class="pa-0 ml-3">
                        <p class="input_title">Role</p>
                        <v-autocomplete
                            v-model="sForm.sRole"
                            @input="$v.sForm.sRole.$touch()"
                            @blur="$v.sForm.sRole.$touch()"
                            :error-messages="roleErrors"
                            :items="sRoleList"
                            outlined
                            dense
                            chips
                            small-chips
                            multiple
                        ></v-autocomplete>
                    </v-col>
                </v-row>
            </div>
        </div>
        <div class="pdf border"></div>
        <div class="email_setting border pa-2">
            <h4>Email setting.</h4>
            <v-row class="px-3">
                <v-col>
                    <p class="input_title">sending cycle</p>
                    <!-- <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="sForm.sSendingInfo.sSendingCycle"
                                :error-messages="sendingCycleErrors"
                                label="Picker without buttons"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker @input="menu2 = false" no-title scrollable></v-date-picker>
                    </v-menu> -->
                </v-col>
            </v-row>
            <v-row class="px-3">
                <v-col>
                    <p class="input_title">email</p>
                    <v-autocomplete
                        v-model="sForm.sSendingInfo.sEmailList"
                        @input="$v.sForm.sSendingInfo.sEmailList.$touch()"
                        @blur="$v.sForm.sSendingInfo.sEmailList.$touch()"
                        :error-messages="emailErrors"
                        :items="sEmails"
                        outlined
                        dense
                        chips
                        small-chips
                        multiple
                    ></v-autocomplete>
                </v-col>
            </v-row>
        </div>
        <footer>
            <v-row align="center">
                <v-col align="center">
                    <v-btn color="primary" width="200" :loading="sSubmitState === 'PENDING'" @click="saveReportSubmit()">Save</v-btn>
                    <p class="typo__p" v-if="sSubmitState === 'OK'">Thanks for your submission!</p>
                    <p class="typo__p" v-if="sSubmitState === 'ERROR'">Please fill the form correctly.</p>
                    <p class="typo__p" v-if="sSubmitState === 'PENDING'">Sending...</p>
                </v-col>
            </v-row>
        </footer>
    </v-container>
</template>
<script>
import Vue from 'vue';
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
import { required } from 'vuelidate/lib/validators';
export default {
    validations: {
        sForm: {
            sReportName: { required },
            // sStartDate: { required },
            // sEndDate: { required },
            sRole: { required },
            // sSelectedTaglet: { required },
            sSendingInfo: {
                // sSendingCycle: { required },
                sEmailList: { required }
            }
        }
    },
    computed: {
        reportNameErrors() {
            const errors = [];
            if (!this.$v.sForm.sReportName.$dirty) return errors;
            !this.$v.sForm.sReportName.required && errors.push('report name is required.');
            return errors;
        },
        roleErrors() {
            const errors = [];
            if (!this.$v.sForm.sRole.$dirty) return errors;
            !this.$v.sForm.sRole.required && errors.push('role is required.');
            return errors;
        },
        sendingCycleErrors() {
            const errors = [];
            if (!this.$v.sForm.sSendingInfo.sSendingCycle.$dirty) return errors;
            !this.$v.sForm.sSendingInfo.sSendingCycle.required && errors.push('emails is required.');
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.sForm.sSendingInfo.sEmailList.$dirty) return errors;
            !this.$v.sForm.sSendingInfo.sEmailList.required && errors.push('emails is required.');
            return errors;
        }
    },
    components: {},
    methods: {
        deleteReportSubmit() {
            this.$confirm.show({
                question: 'delete the report?',
                done: () => {
                    console.log('delete');
                }
            });
        },
        saveReportSubmit() {
            this.$v.$touch();
            if (this.$v.$invalid === true) {
                this.sSubmitState = 'ERROR';
                console.log('실패');
            } else {
                this.sSubmitState = 'PENDING';
                console.log(this.sForm);
                setTimeout(() => {
                    this.sSubmitState = 'OK';
                }, 500);
            }
        }
    },
    data() {
        return {
            sSubmitState: null,
            sForm: {
                sReportName: '',
                sStartDate: '',
                sEndDate: '',
                sRole: [], // role id 전달
                sSelectedTagletList: [], // id만 전달
                sSendingInfo: {
                    sSendingCycle: {
                        cycle: 'd', // d(일) | w(주) | m(달) | y(년)
                        sending_time: ['14:23:23'], // 일 단위: 시간
                        sending_week: ['wen'], // 주 단위: mon | tue | wed | thu | fri | sat | sun
                        sending_month: ['13/14:24:23'], // 월 단위: 일/시간
                        sending_year: '12/25/14:24:23' // 연 단위: 월/일/시간
                    },
                    sEmailList: []
                }
            },

            sAvatarImgFile: false,
            sSelectedGroup: [],
            sSelectedAuth: [],
            groups: ['포항', '대전'],
            sRoleList: [
                { text: 'Master', value: '0' },
                { text: 'Engineer', value: '1' },
                { text: 'Operator', value: '2' },
                { text: 'Customer', value: '3' }
            ],
            sEmails: ['john.kim@gmail.com'],
            sSelectedEmail: [],
            date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false
        };
    }
};
</script>
<style lang="scss" scoped>
p {
    margin-bottom: 2px;
}

.create_report_btn {
    position: absolute;
    top: 100px;
}
.report {
    background-color: white;
    height: 100%;
    max-width: 800px;
    min-height: 80vh;
    gap: 12px;

    .border {
        border: 2px solid $BACKGROUND_GRAY;
        border-radius: 10px;
    }

    .filter {
        .input_box {
        }
    }
    .pdf {
        min-height: 50vh;
    }
}
</style>
