<template>
    <div class="index d-flex flex-column">
        <div class="mt-10 px-10">
            <header class="d-flex justify-space-between">
                <h1>Users setting</h1>
                <AddUser />
            </header>
            <UserFilter />
        </div>
        <UserList />
    </div>
</template>
<script>
import UserList from '@/Modules/AdminSetting/Users/components/UserList';
import UserFilter from '@/Modules/AdminSetting/Users/components/UserFilter';
import AddUser from '@/Modules/AdminSetting/Users/components/AddUser';
export default {
    data() {
        return {};
    },
    components: {
        UserList,
        UserFilter,
        AddUser
    }
};
</script>
<style lang="scss" scoped>
.index {
    height: 100%;
    min-height: 100vh;
    padding-left: 250px;
}
</style>
