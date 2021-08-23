<template>
    <div class="list_body px-10">
        <v-card>
            <v-list>
                <v-list-group v-for="item in items" :key="item.title" v-model="item.active" no-action class="item">
                    <template v-slot:activator>
                        <!-- <div class="user_img"></div> -->
                        <v-avatar size="40" class="mr-5">
                            <img v-if="item.avatar_img !== ''" src="@/assets/img/default_avatar.png" alt="John" />
                            <img v-else src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                        </v-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <!-- <v-list-item v-for="child in item.items" :key="child.title"> -->
                    <v-list-item-content class="pt-0 pb-0 setting_body">
                        <header class="d-flex justify-end px-5 pt-4"><v-btn color="error" @click="deleteUser()">USER DELETE</v-btn></header>
                        <UserSetting />
                    </v-list-item-content>
                    <!-- </v-list-item> -->
                </v-list-group>
            </v-list>
        </v-card>
    </div>
</template>
<script>
import UserSetting from './UserSetting';
export default {
    components: {
        UserSetting
    },
    methods: {
        deleteUser() {
            this.$confirm.show({
                question: 'delete the user?',
                done: () => {
                    console.log(11);
                }
            });
        }
    },
    data: () => ({
        items: [
            {
                action: 'mdi-account',
                items: [{ title: 'List Item' }],
                title: 'Attractions',
                avatar_img: ''
            },
            {
                action: 'mdi-silverware-fork-knife',
                // active: true,
                items: [{ title: 'Breakfast & brunch' }, { title: 'New American' }, { title: 'Sushi' }],
                title: 'Dining'
            },
            {
                action: 'mdi-school',
                items: [{ title: 'List Item' }],
                title: 'Education'
            },
            {
                action: 'mdi-run',
                items: [{ title: 'List Item' }],
                title: 'Family'
            },
            {
                action: 'mdi-bottle-tonic-plus',
                items: [{ title: 'List Item' }],
                title: 'Health'
            },
            {
                action: 'mdi-content-cut',
                items: [{ title: 'List Item' }],
                title: 'Office'
            },
            {
                action: 'mdi-tag',
                items: [{ title: 'List Item' }],
                title: 'Promotions'
            }
        ]
    })
};
</script>
<style lang="scss" scoped>
.list_body {
    height: 100%;
    .item {
        border-bottom: 1px solid $LIGHT_GRAY;
    }

    .setting_body {
        background-color: rgb(247, 245, 245);
    }
}
header {
    background-color: rgb(247, 245, 245);
}
</style>
