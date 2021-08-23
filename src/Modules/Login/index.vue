<template>
    <v-container fluid class="login d-flex justify-center align-center">
        <v-card class="login_box d-flex flex-column justify-end align-center">
            <img src="" alt="" />
            <h2>Login</h2>
            <input type="text" placeholder="ID" />
            <input type="text" placeholder="PASSWORD" />
            <v-btn rounded color="#741eec" @click="login()">Login</v-btn>
            <p class="small">Copyright ⓒ2021 MACHBASE</p>
        </v-card>
    </v-container>
</template>
<script>
export default {
    methods: {
        login() {
            this.$router.push('/intro');
        }
    }
};
</script>
<style lang="scss" scoped>
.login {
    background-color: $BACKGROUND_GRAY;
    height: 100vh;

    &_box {
        background-color: white;
        width: 320px;
        max-width: 320px;
        height: 500px;
        border-radius: 10px;
        padding: 10px 43px;

        img {
            margin: 30px;
        }
        h2 {
            margin: 30px;
        }

        input {
            width: 100%;
            border: 1px solid #cacaca;
            border-radius: 2px;
            padding: 5px;
            margin-bottom: 10px;
        }

        button {
            margin-top: 30px;
            margin-bottom: 80px;
            width: 100%;
        }
    }
    .small {
        font-size: 0.8rem;
        color: #cacaca;
    }
}
</style>
