<template>
    <v-container fluid class="card d-flex flex-column">
        <header>
            <h3>{{ pAuthInfo.name }}</h3>
        </header>
        <content>
            <div class="description">
                <ul>
                    <li v-for="(permission, idx) in pAuthInfo.permissions" :key="idx">{{ permission }}</li>
                </ul>
            </div>
            <div class="setting"></div>
        </content>
    </v-container>
</template>
<script>
export default {
    props: {
        pAuthInfo: {
            type: Object,
            default: () => {}
        }
    },
    data: () => ({
        items: ['Foo', 'Bar', 'Fizz', 'Buzz']
    })
};
</script>
<style lang="scss">
.card {
    min-height: 200px;
    margin: 20px 0;
    border-top: $BORDER_BOTTOM;

    content {
        display: grid;
        grid-template-columns: 3fr 7fr;
        width: 100%;
        height: 100%;

        .description {
            width: 100%;
            height: 100%;
        }

        .setting {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
