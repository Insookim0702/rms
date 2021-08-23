<template>
    <div class="alert" v-if="confirm.state === true" @click="cancel()">
        <div class="alert" @click.stop="">
            <header>{{ confirm.title }}</header>
            <content>{{ confirm.question }}</content>
            <footer>
                <v-btn @click="done()">{{ confirm.okText }}</v-btn>
                <v-btn @click="cancel()">{{ confirm.cancelText }}</v-btn>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirm: this.$confirm.sConfirmData
        };
    },
    methods: {
        done() {
            this.confirm.done();
            this.confirm.state = false;
        },
        cancel() {
            this.$confirm.cancel();
        }
    }
};
</script>
<style lang="scss" scoped>
.alert {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #11111120;
    z-index: 999;
    word-break: break-all;

    .alert {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ffffff;
        max-height: 10rem;
        width: 520px;
        border-radius: 6px;
        box-shadow: 0 5px 26px 0 rgb(121, 121, 121);
        padding: 1rem;

        header {
            // background-color: gray;
            width: 100%;
            height: 100%;
            min-height: 1.4rem;
            font-size: 1.4rem;
        }

        content {
            margin: 1rem 0;
            min-height: 2.2rem;
            font-size: 1.2rem;
            word-break: break-word;
            display: grid;
            justify-items: center;
            align-items: center;
        }
        footer {
            display: grid;
            grid-auto-flow: column;
            gap: 10px;
        }
        .okBtn,
        .cancelBtn {
            background: gray;
            min-width: 230px;
            color: #ffffff;
            border-radius: 6px;
            font-size: 20px;
            display: grid;
            justify-items: center;
            align-items: center;
            height: 40px;
            cursor: pointer;
        }
    }
}
</style>
