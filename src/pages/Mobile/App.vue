<template>
    <v-app>
        <BaseMobileHeader />
        <router-view />
        <BaseMobileBottomNav />
        <BaseAlert />
        <BaseConfirm />
    </v-app>
</template>

<script>
export default {
    name: 'Mobile App'
};
</script>
