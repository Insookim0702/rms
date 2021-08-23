<template>
    <div class="side_body">
        <header></header>
        <!-- <v-divider></v-divider> -->
        <div>
            <v-list dense dark color="#2d3844">
                <v-list-item v-for="item in items" :key="item.title" link @click="$router.push(item.route)">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </div>
        <!-- <v-divider></v-divider> -->
        <footer></footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            drawer: true,
            items: [
                { title: 'Users', icon: 'mdi-account-group-outline', route: '/adminsetting/users' },
                { title: 'Authorization', icon: 'mdi-home-city', route: '/adminsetting/auth' },
                { title: 'Report', icon: 'mdi-file-document-edit-outline', route: '/adminsetting/report' },
                { title: 'Chart', icon: 'mdi-chart-bar', route: '/adminsetting/chart' }
                // { title: 'Account', icon: 'mdi-account', route: '/adminsetting/user' }
            ],
            mini: true
        };
    }
};
</script>
<style lang="scss" scoped>
.side_body {
    position: fixed;
    top: 0;
    left: 0;
    max-width: 250px;
    width: 100%;
    height: 100%;
    background-color: #2d3844;
    display: grid;
    grid-template-rows: 0.6fr 8.8fr 0.6fr;
    header,
    footer {
        background-color: #1c222a;
    }
}
</style>
