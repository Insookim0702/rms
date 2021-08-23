<template>
    <v-container fluid class="user_setting d-flex flex-column align-center">
        <div class="contents mt-15 mx-15">
            <h1>Account Setting</h1>
            <!-- 가운데 정렬용 요소-->
            <v-container fluid>
                <header>
                    <h3>Public Avatar</h3>
                    <p>You can change your avatar here or remove the current avatar</p>
                </header>
                <article class="public_avatar d-flex justify-start">
                    <div class="" v-if="sAvatarImgFile === false">
                        <v-avatar class="default_avatar_img">
                            <!-- <v-icon dark size="192.99">
                                mdi-account-circle
                            </v-icon> -->
                            <img src="@/assets/img/default_avatar.png" alt="default" />
                        </v-avatar>
                    </div>
                    <div v-else>
                        <v-avatar class="default_avatar_img">
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="" />
                        </v-avatar>
                    </div>
                    <v-container fluid class="public_avatar_interaction_box">
                        <p>Upload new avatar</p>

                        <div>
                            <!-- <v-file-input label="File input" hide-input class="upload_btn" ref="fileInput"></v-file-input> -->
                            <input type="file" accept="image/*" class="upload_btn" ref="fileInput" @change="settingUploadfile()" />
                            <v-btn outlined @click="fileUpload()">Choose file...</v-btn> <span>No file chosen</span>
                        </div>
                        <v-divider class="my-5"></v-divider>
                        <v-btn color="error" @click="handleRemoveAvatarSubmit()">Remove avatar</v-btn>
                    </v-container>
                </article>
            </v-container>
            <v-divider class="my-10"></v-divider>
            <v-container fluid>
                <header>
                    <h2>Main settings</h2>
                </header>
                <article class="main_setting d-flex flex-column">
                    <div class="input_box">
                        <p class="input_title">User Id</p>
                        <input type="text" />
                    </div>
                    <div class="input_box">
                        <p class="input_title">password</p>
                        <input type="password" />
                    </div>
                    <div class="input_box">
                        <p class="input_title">password check</p>
                        <input type="password" />
                    </div>
                    <div class="input_box">
                        <p>group</p>
                        <v-autocomplete v-model="group" :items="groups" outlined dense chips small-chips multiple></v-autocomplete>
                    </div>
                    <div class="input_box">
                        <p class="input_title">Role</p>
                        <v-autocomplete v-model="degree" :items="degrees" outlined dense chips small-chips></v-autocomplete>
                    </div>
                    <div class="input_box">
                        <p class="input_title">comment</p>
                        <textarea type="text" />
                        <p>Tell us about yourself in fewer than 250 characters.</p>
                    </div>
                    <v-divider class="my-6"></v-divider>
                    <div class="button_box">
                        <div>
                            <input type="checkbox" name="deactivation" class="checkbox" />
                            <label for="deactivation">Account Deactivation</label>
                        </div>
                        <div class="btn_box d-flex justify-space-between">
                            <v-btn color="success" @click="handleUpdateProfileSubmit()">Update profile setting</v-btn>
                            <v-btn outlined>Cancel</v-btn>
                        </div>
                    </div>
                </article>
            </v-container>
            <!-- <section></section> -->
        </div>
    </v-container>
</template>
<script>
export default {
    methods: {
        handleRemoveAvatarSubmit() {
            this.$confirm.show({
                question: 'Sure that Remove an Avatar?',
                okText: 'OK',
                done: () => {
                    this.sAvatarImgFile = false;
                }
            });
        },
        handleUpdateProfileSubmit() {
            this.$alert.show('success', 'successed update profile');
        },
        settingUploadfile() {
            // const form = new FormData();
            const image = this.$refs.fileInput.files[0];
            console.log(image);

            // form.append('image', image);

            // console.log(aEvent.target);
        },
        fileUpload() {
            this.$refs.fileInput.click();
        }
    },
    data() {
        return {
            sAvatarImgFile: false,
            groups: ['포항', '대전'],
            degrees: ['Master', 'Engineer', 'Operator', 'Customer']
        };
    }
};
</script>
<style lang="scss" scoped>
::v-deep fieldset {
    color: rgba(0, 0, 0, 0.12) !important;
}

.user_setting {
    padding-left: 250px;
    min-height: 100vh;

    .contents {
        max-width: $MAX_WIDTH;
    }

    section {
        // width: 100%;
        display: grid;
        grid-template-columns: 3.5fr 6.5fr;

        header {
            padding-right: 3rem;
        }

        .public_avatar {
            gap: 2rem;

            &_interaction_box {
                max-width: 455px;
                // width: 100%;

                .upload_btn {
                    visibility: hidden;
                }

                span {
                    margin-left: 18px;
                }
            }
        }
    }

    .main_setting {
        .input_box {
            width: 100%;

            .input_title {
                padding: 0;
                margin: 5px 0;
                font-weight: 500;
            }
            input,
            textarea {
                width: 100%;
                border-radius: 2px;
                padding: 6px 10px;
                border: 1px solid #e1e1e1;
            }

            input:focus,
            textarea:focus {
                outline: 3px solid rgb(180, 194, 245);
            }
        }

        .input_box:not(:first-child) {
            margin: 10px 0;
        }

        label {
            padding-left: 10px;
        }

        .btn_box {
            margin: 20px 0;
        }
    }
    .border_bottom {
        width: 100%;
        margin: 24px 0;
        border-bottom: 1px solid #e1e1e1;
    }

    .default_avatar_img {
        background: #e1e1e1;
        width: 100% !important;
        min-width: 13rem !important;
        height: 100% !important;
        border-radius: 100%;
    }
}
</style>
