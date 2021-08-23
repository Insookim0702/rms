<template>
    <!-- 📄 https://vuetifyjs.com/en/components/app-bars/#dense -->
    <div fluid class="nav" v-if="$vuetify.breakpoint.xs === true">
        <v-app-bar color="accent-4" dense dark>
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

            <v-toolbar-title>{{ $route.name }}</v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- <v-btn icon @click="handlePcVer()">
                <v-icon color="primary">mdi-web</v-icon>
            </v-btn> -->

            <!-- <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu> -->
        </v-app-bar>
    </div>
</template>
<script>
export default {
    name: 'app-header',
    methods: {
        handlePcVer() {
            // const HTML = document.querySelector('body');
            // HTML.style.webkitTransform = 'rotate(90deg)';
            // HTML.style.width = '100vw';
            // HTML.style.height = '100%';
            // 자동으로 화면 회전은 네이티브 앱에서 가능함 브라우저를 디바이스에서 회전 시킬 방법이 javascript에서는 없음.
        }
    },

    computed: {
        sIsLogin() {
            return window.location.href.includes('login');
        }
    },
    data() {
        return {
            sTitle: ''
        };
    }
};
</script>
<style lang="scss" scoped>
.nav {
    z-index: 1;
    position: sticky;
    top: 0;
    left: 0;
}
</style>
