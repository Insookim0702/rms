<template>
    <div class="index d-flex flex-column">
        <div class="mt-10 px-10">
            <h1>Authorization setting</h1>
            <AuthCard v-for="authInfo in authList" :key="authInfo.id" :pAuthInfo="authInfo" />
        </div>
    </div>
</template>
<script>
import AuthCard from '@/Modules/AdminSetting/Auth/components/AuthCard';
export default {
    data() {
        return {
            authList: [
                {
                    id: 0,
                    name: 'Master',
                    img: '',
                    permissions: ['Engineer 권한', 'RMS 전체 접근 가능', 'RMS 관리', '사용자 계정 추가 및 권한 관리']
                },
                {
                    id: 1,
                    name: 'Engineer',
                    img: '',
                    permissions: ['Operator 권한', 'PID 변수 제어 (각 파라메터 입력/수정)', 'Chart 생성 / 수정']
                },
                {
                    id: 2,
                    name: 'Operator',
                    img: '',
                    permissions: [
                        'Customer 권한',
                        '연료전지 상태 감시',
                        '제어 명령(Run / Stop / Power set)',
                        '경보 확인 및 해지',
                        '운전 데이터 다운로드(기간, Tag, interval 등 지정)',
                        '경보 이상 발생시 연락 email(Customer) 지정',
                        'Report 수신자 (Customer) 지정'
                    ]
                },
                {
                    id: 3,
                    name: 'Customer',
                    img: '',
                    permissions: ['지정 site만 접근 가능(Edge, Taglet)', '운전현황 확인', '운전 데이터 다운로드(기간, Tag, interval 등 지정)']
                }
            ]
        };
    },
    components: {
        AuthCard
    }
};
</script>
<style lang="scss">
.index {
    height: 100%;
    padding-left: 250px;
    min-height: 100vh;
    // max-width: 800px;
}
</style>
