<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on">
                    CHANGE PASSWORD
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">CHANGE PASSWORD</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field :error-messages="nowPasswordErrors" v-model.trim="sNowPassword" label="now password" type="password" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    @input="$v.sForm.sPassword.$touch()"
                                    @blur="$v.sForm.sPassword.$touch()"
                                    v-model.trim="sForm.sPassword"
                                    :error-messages="passwordErrors"
                                    label="password"
                                    type="password"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    @input="$v.sRepeatPassword.$touch()"
                                    @blur="$v.sRepeatPassword.$touch()"
                                    v-model.trim="sRepeatPassword"
                                    :error-messages="repeatPasswordErrors"
                                    label="check password"
                                    type="password"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <!-- <small>*indicates required field</small> -->
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeModal()">
                        Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="changePasswordSubmit()">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
import { required, sameAs } from 'vuelidate/lib/validators';
export default {
    validations: {
        sNowPassword: { required },
        sForm: {
            sPassword: { required }
        },
        sRepeatPassword: { required, sameAsPassword: sameAs('password') }
    },
    computed: {
        nowPasswordErrors() {
            const errors = [];
            if (this.$v.sNowPassword.$dirty === false) return errors;
            !this.$v.sNowPassword.required && errors.push('Current password is required.');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (this.$v.sForm.sPassword.$dirty === false) return errors;
            !this.$v.sForm.sPassword.required && errors.push('Password is required.');
            return errors;
        },
        repeatPasswordErrors() {
            const errors = [];
            if (this.$v.sRepeatPassword.$dirty === false) return errors;
            !this.$v.sRepeatPassword.required && errors.push('check Password is required.');
            !this.$v.sRepeatPassword.sameAsPassword && errors.push('Passwords must be identical.');
            return errors;
        }
    },
    methods: {
        closeModal() {
            this.dialog = false;
            this.sForm.sUserId = '';
            this.sForm.sPassword = '';
            this.sNowPassword = '';
            this.sRepeatPassword = '';
            this.sSubmitState = '';
            this.$v.$reset();
        },
        changePasswordSubmit() {
            this.$v.$touch();
            if (this.$v.dirty === true) {
                this.sSubmitState = 'ERROR';
            } else {
                this.sSubmitState = 'PENDING';
                setTimeout(() => {
                    this.sSubmitState = 'OK';
                }, 500);
            }
        }
    },
    destroyed() {},
    data: () => ({
        dialog: false,
        sForm: {
            sUserId: '',
            sPassword: ''
        },
        sNowPassword: '',
        sRepeatPassword: '',
        sSubmitState: ''
    })
};
</script>
