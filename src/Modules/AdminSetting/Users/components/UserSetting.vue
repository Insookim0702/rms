<template>
    <div class="user_setting d-flex flex-column justify-space-between">
        <div>
            <v-row align="center">
                <v-col class="input">
                    <h3 class="black--text my-3">ID</h3>
                    <v-text-field
                        outlined
                        label="ID"
                        dense
                        hide-details="auto"
                        :error-messages="idErrors"
                        v-model="sForm.sId"
                        required
                        @input="$v.sForm.sId.$touch()"
                        @blur="$v.sForm.sId.$touch()"
                    ></v-text-field>
                </v-col>
                <v-col class="input">
                    <h3 class="black--text my-3">Password</h3>
                    <v-text-field
                        outlined
                        label="Password"
                        dense
                        hide-details="auto"
                        v-model="sForm.sPw"
                        :error-messages="pwErrors"
                        @input="$v.sForm.sPw.$touch()"
                        @blur="$v.sForm.sPw.$touch()"
                        type="password"
                        required
                    ></v-text-field>
                </v-col>
                <v-col class="input mt-5">
                    <h3 class="black--text my-3">Role</h3>
                    <v-select outlined dense :items="sRoleList" required :error-messages="roleErrors" v-model="sForm.sRole" @change="$v.sForm.sRole.$touch()"></v-select>
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col sm="8">
                    <h3 class="black--text my-3">Email</h3>
                    <v-text-field
                        outlined
                        dense
                        label="Email"
                        hide-details="auto"
                        required
                        :error-messages="emailErrors"
                        v-model="sForm.sEmail"
                        @input="$v.sForm.sEmail.$touch()"
                        @blur="$v.sForm.sEmail.$touch()"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col sm="4">
                    <h3 class="black--text my-3">Group</h3>
                    <v-select outlined v-model="sSelectedGroupList" :items="sGroupList" attach chips label="Chart"></v-select>
                </v-col>
                <v-col sm="4">
                    <h3 class="black--text my-3">Edge</h3>
                    <v-select outlined v-model="sSelectedEdgeList" :items="sEdgeList" attach chips label="Report"></v-select>
                </v-col>
                <v-col sm="4">
                    <h3 class="black--text my-3">Taglet</h3>
                    <v-select outlined v-model="sSelectedTagletList" :items="sTagletList" attach chips label="Report" multiple></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="pb-5 pt-0">
                    <div class="taglet_btns d-flex justify-end">
                        <v-btn @click="addTaglet()" color="primary"><v-icon>mdi-plus</v-icon></v-btn>
                        <v-btn @click="resetAll()"><v-icon>mdi-autorenew</v-icon></v-btn>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-list class="selected_list">
                        <ul class="px-4">
                            <li v-for="(aTaglet, i) in willBeAddedTagletList" :key="i" class="item d-flex justify-space-between">
                                <div class="flex-align-center d-flex align-center">
                                    <p align="center" class="mb-0 pb-0">{{ aTaglet.text }}</p>
                                </div>

                                <div>
                                    <v-btn icon><v-icon>mdi-minus</v-icon></v-btn>
                                </div>
                            </li>
                        </ul>
                    </v-list>
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col sm="6">
                    <h3 class="black--text my-3">accessable chart dashboard</h3>
                    <v-select outlined v-model="sForm.sSelectedChartList" :items="sChartList" attach dense chips label="Chart" multiple></v-select>
                </v-col>
                <v-col sm="6">
                    <h3 class="black--text my-3">accessable report</h3>
                    <v-select outlined v-model="sForm.sSelectedReportList" :items="sReportList" attach dense chips label="Report" multiple></v-select>
                </v-col>
            </v-row>
        </div>
        <div>
            <v-row align="center">
                <v-col align="center">
                    <v-btn color="primary" width="200" :loading="sSubmitStatus === 'PENDING'" @click="updateUserSubmit()">Save</v-btn>
                    <p class="typo__p" v-if="sSubmitStatus === 'OK'">Thanks for your submission!</p>
                    <p class="typo__p" v-if="sSubmitStatus === 'ERROR'">Please fill the form correctly.</p>
                    <p class="typo__p" v-if="sSubmitStatus === 'PENDING'">Sending...</p>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators';
export default {
    validations: {
        sForm: {
            sId: { required },
            sPw: { required },
            sRole: { required },
            sEmail: { required, email }
        }
    },
    computed: {
        idErrors() {
            const errors = [];
            if (!this.$v.sForm.sId.$dirty) return errors;
            !this.$v.sForm.sId.required && errors.push('id is required.');
            return errors;
        },
        pwErrors() {
            const errors = [];
            if (!this.$v.sForm.sPw.$dirty) return errors;
            !this.$v.sForm.sPw.required && errors.push('password is required.');
            return errors;
        },
        roleErrors() {
            const errors = [];
            if (!this.$v.sForm.sRole.$dirty) return errors;
            !this.$v.sForm.sRole.required && errors.push('user role is required.');
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.sForm.sEmail.$dirty) return errors;
            !this.$v.sForm.sEmail.email && errors.push('Must be valid e-mail');
            !this.$v.sForm.sEmail.required && errors.push('id is required.');
            return errors;
        }
    },
    methods: {
        updateUserSubmit() {
            this.$v.$touch();
            if (this.$v.$invalid === true) {
                //error
                this.sSubmitStatus = 'ERROR';
                console.log('실패');
            } else {
                this.sSubmitStatus = 'PENDING';
                setTimeout(() => {
                    this.sSubmitStatus = 'OK';
                }, 500);
                //submit
            }
        },
        addTaglet() {
            this.sSelectedTagletList.forEach(aTaglet => {
                this.willBeAddedTagletList.push(aTaglet.taglet_info.id);
            });
        },
        resetAll() {
            this.sSelectedGroupList = [];
            this.sSelectedEdgeList = [];
            this.sSelectedTagletList = [];
        },
        deleteUser() {
            this.$confirm.show({
                question: 'delete the user?',
                done: () => {
                    console.log(11);
                }
            });
        }
    },
    data: () => ({
        sForm: {
            sId: '',
            sPw: '',
            sRole: '',
            sEmail: '',
            sSelectedChartList: [],
            sSelectedReportList: []
        },
        sSubmitStatus: null,
        sGroupList: ['포항', '대전'],
        sEdgeList: ['edge-1', 'edge-2'],
        sTagletList: [
            { text: 'taglet-123-1', value: '0' },
            { text: 'taglet-123-2', value: '1' },
            { text: 'taglet-f32fd3-1', value: '2' },
            { text: 'taglet-123e32-2', value: '3' },
            { text: 'taglet-123321-1', value: '4' },
            { text: 'taglet-123-d212', value: '5' },
            { text: 'taglet-123-d21', value: '6' },
            { text: 'taglet-123-2d12', value: '7' },
            { text: 'taglet-123-1d21', value: '8' },
            { text: 'taglet-123d21-2', value: '9' }
        ],
        sSelectedGroupList: [],
        sSelectedEdgeList: [],
        sSelectedTagletList: [],
        sChartList: [
            { text: 'chart-1', value: '0' },
            { text: 'chart-2', value: '1' },
            { text: 'chart-3', value: '2' },
            { text: 'chart-4', value: '3' },
            { text: 'chart-5', value: '4' }
        ],
        sReportList: [
            { text: 'report-1', value: '0' },
            { text: 'report-2', value: '1' },
            { text: 'report-3', value: '2' },
            { text: 'report-4', value: '3' },
            { text: 'report-5', value: '4' },
            { text: 'report-6', value: '5' },
            { text: 'report-7', value: '6' },
            { text: 'report-8', value: '7' },
            { text: 'report-9', value: '8' },
            { text: 'report-14', value: '9' },
            { text: 'report-12', value: '10' },
            { text: 'report-13', value: '11' }
        ],
        willBeAddedTagletList: [
            {
                text: 'group > edge > taglet'
            },
            {
                text: 'group > edge > taglet',
                disabled: false
            },
            {
                text: 'group > edge > taglet',
                disabled: false
            }
        ],
        sRoleList: [
            { text: 'Master', value: '0' },
            { text: 'Engineer', value: '1' },
            { text: 'Operator', value: '2' },
            { text: 'Customer', value: '3' }
        ],
        model: 0
    })
};
</script>
<style lang="scss" scoped>
.user_setting {
    background-color: rgb(247, 245, 245);
    width: 100%;
    padding: 30px;
    overflow-y: scroll;
    .selected_list {
        width: 100%;

        .item {
            border-bottom: $BORDER_BOTTOM;
        }

        .item:hover {
            background-color: $LIGHT_GRAY;
        }
    }
    .taglet_btns {
        width: 100%;
    }
    .input {
        min-width: 350px;
    }
}
</style>
