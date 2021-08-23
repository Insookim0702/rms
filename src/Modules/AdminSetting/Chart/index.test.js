import { mount } from '@vue/test-utils';
import Chart from './components/chart.vue';

describe('Tag Chart 세팅 테스트', () => {
    it('변경된 tag chart 세팅 전달 폼이 유효한지 확인', () => {
        const wrapper = mount(Chart);
        const saveBtn = wrapper.find('#saveSubmit');
        expect(wrapper.find('[data-test="cool-card-div"]').test()).toEquel('hello i am a card');
        const defaultForm = {
            sColor: '',
            sSelectedCalc: '',
            sStartTimeRange: '',
            sEndTimeRange: '',
            sRawTimeRange: ''
        };
        saveBtn.trigger('click');
        expect(wrapper.vm.sForm).toEquel(defaultForm);
        // wrapper.html(); -> 컴포넌트 html 가져오기
        // await wrapper.setData({ count: 10 }) -> data property에 데이터 넣기
        // expect(wrapper.vm.quantity).toBe(0) -> data property에서 데이터 테스트하기
    });
});
