<template>
    <v-app>
        <BaseHeader />
        <BaseMobileHeader />
        <router-view />
        <BaseMobileBottomNav />
        <BaseAlert />
        <BaseConfirm />
    </v-app>
</template>

<script>
export default {
    name: 'App'
};
</script>
