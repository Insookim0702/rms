<template lang="">
    <v-container fluid class="modal" v-if="modal.state === true" @click="cancel()">
        <div class="modal" @click.stop="">
            <slot name="header"></slot>
            <slot name="content"></slot>
            <slot name="footer"></slot>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'modal',
    data() {
        return {
            modal: this.$modal.sModalData
        };
    },
    methods: {
        cancel() {
            this.$modal.cancel();
        }
    }
};
</script>
<style lang="scss" scoped>
.modal {
    height: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #11111120;
    z-index: 33;
    word-break: break-all;

    .modal {
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
