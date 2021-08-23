<template>
    <v-card class="box px-3 pt-3">
        <div>
            <p>등급 필터</p>
            <v-autocomplete v-model="degree" :items="degrees" dense chips small-chips label="Degree" multiple solo></v-autocomplete>
        </div>
        <div>
            <p>그룹 필터</p>
            <v-autocomplete v-model="group" :items="groups" dense chips small-chips label="Group" multiple solo></v-autocomplete>
        </div>
        <div>
            <p>사용자 아이디 검색</p>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
        </div>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        items: ['foo', 'bar', 'fizz', 'buzz'],
        groups: ['포항', '대전'],
        degrees: ['Master', 'Engineer', 'Operator', 'Customer'],
        degree: '',
        group: '',
        search: '',
        value: null
    })
};
</script>
<style lang="scss" scoped>
.box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-bottom: 0px;
    background-color: white;
    margin-bottom: 20px;
    gap: 20px;
}
.v-text-field {
    margin-top: 20px;
    padding-top: 0px;
}
</style>
