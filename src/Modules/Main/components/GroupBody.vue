<template>
    <div class="contents">
        <TagletCard></TagletCard>
        <TagletCard></TagletCard>
        <TagletCard></TagletCard>
        <TagletCard></TagletCard>
        <TagletCard></TagletCard>
        <TagletCard></TagletCard>
        <TagletCard></TagletCard>
    </div>
</template>
<script>
import TagletCard from './TagletCard.vue';
export default {
    components: {
        TagletCard
    },
    data: () => ({
        isActive: false,
        loading: false,
        selection: 1
    })
};
</script>
<style lang="scss" scoped>
.contents {
    padding: 15px 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    justify-content: space-between;
    gap: 14px;
}
.v-application p {
    padding: 0;
    margin: 0;
}
</style>
