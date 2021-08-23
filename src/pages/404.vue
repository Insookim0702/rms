<template>
    <div>
        <div>
            <h1>Page not found.</h1>
            <v-btn @click="$router.push('/')">🏠 home</v-btn>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
div {
    background-color: $BACKGROUND_GRAY;
    width: 100%;
    height: 100%;
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>
