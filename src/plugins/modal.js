import BaseModal from '@/global/BaseModal';
const _initModalData = {
    mode: 'chart'
};
const modal = {
    sModalData: { state: false },
    show(modalData = {}) {
        this.sModalData.state = true;
        Object.assign(this.sModalData, { ..._initModalData, ...modalData });
    },
    cancel() {
        this.sModalData.state = false;
    }
};

export default {
    install(Vue, pluginName = '$modal') {
        Vue.prototype[pluginName] = modal;
        Vue.component('BaseModal', BaseModal);
    }
};
