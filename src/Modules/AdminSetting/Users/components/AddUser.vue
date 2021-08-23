<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="800">
            <template v-slot:activator="{ on, attrs }">
                <v-btn width="150" height="40" color="primary" v-bind="attrs" v-on="on"><v-icon>mdi-account-plus</v-icon></v-btn>
            </template>

            <v-card>
                <v-card-title class="text-h5 lighten-2">
                    Add User
                </v-card-title>
                <UserSetting></UserSetting>

                <v-divider></v-divider>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import UserSetting from './UserSetting.vue';
export default {
    components: {
        UserSetting
    },
    data: () => ({
        dialog: false
    })
};
</script>
<style scoped>
.row {
    margin: 0;
    display: block;
    flex: 0;
}
</style>
