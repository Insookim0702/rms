<template>
    <div class="Report_list d-flex flex-column">
        <v-list dense dark class="pa-0">
            <v-list-item v-for="item in controlls" :key="item.title" link @click="handleClickReport()">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <!-- <v-divider></v-divider> -->
        <div>
            <v-list dense color="rgb(243, 243, 243)" class="pa-0 list">
                <v-list-item class="item" v-for="(item, idx) in items" :key="idx" link @click="handleClickReport()">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        handleClickReport() {
            console.log('ff');
        }
    },
    data() {
        return {
            drawer: true,
            controlls: [{ title: '빠른 검색', icon: 'mdi-magnify' }],
            items: [
                { title: 'Report', icon: 'mdi-file-document' },
                { title: 'Report', icon: 'mdi-file-document' },
                { title: 'Report', icon: 'mdi-file-document' },
                { title: 'Report', icon: 'mdi-file-document' },
                { title: 'Report', icon: 'mdi-file-document' }
            ],
            mini: true
        };
    }
};
</script>
<style lang="scss" scoped>
.Report_list {
    max-width: 250px;
    width: 100%;
    min-height: 80vh;
    background-color: white;

    header {
        background-color: #1c222a;
    }

    .list {
        .item {
            border-bottom: 1px solid rgb(219, 219, 219);
        }
    }
}
</style>
