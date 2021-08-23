import Vue from 'vue';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import router from '@/router/index.js';
import store from '@/store/index.js';
import global from '@/global/index.js';
import Alert from '@/plugins/alert.js';
import Confirm from '@/plugins/confirm.js';
import Modal from '@/plugins/modal.js';
import VueMeta from 'vue-meta';
import Vuelidate from 'vuelidate';

global.import();

Vue.use(Alert);
Vue.use(Confirm);
Vue.use(Modal);
Vue.use(VueMeta);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app');
