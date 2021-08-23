<template>
    <!-- 📄 https://vuetifyjs.com/en/components/bottom-navigation/ -->
    <v-bottom-navigation v-if="sIsLogin === false && $vuetify.breakpoint.xs === true" class="overflow-hidden bottom_nav" :value="value" color="primary" grow>
        <v-btn @click="handleRouter('/group')">
            <span>Group</span>
            <v-icon>mdi-map-marker</v-icon>
        </v-btn>
        <v-btn @click="handleRouter('/')">
            <span>FUEL CELL</span>
            <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn @click="handleRouter('/report')">
            <span>Report</span>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
    computed: {
        sIsLogin() {
            return window.location.href.includes('login');
        },
        ...mapGetters({
            gAppTitle: 'main/getAppTitle'
        })
    },
    methods: {
        ...mapMutations({
            setAppTitle: 'main/setAppTitle'
        }),
        handleRouter(aRoute) {
            this.$router.push(aRoute);
            switch (aRoute) {
                case '/':
                    this.setAppTitle('FUEL SELL');
                    break;

                case '/group':
                    this.setAppTitle('GROUP');
                    break;
                case '/report':
                    this.setAppTitle('REPORT');
                    break;
            }
        }
    },
    data: () => ({ value: 1 })
};
</script>
<style lang="scss" scoped>
.bottom_nav {
    position: fixed;
    z-index: 1;
}
</style>
