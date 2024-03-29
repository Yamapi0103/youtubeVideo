import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/scss/style.scss';
import './assets/iconfont/iconfont.css';
import 'bootstrap/dist/css/bootstrap.css';
import Paginate from 'vuejs-paginate';
Vue.component('paginate', Paginate);

import vSelect from 'vue-select';
Vue.component('v-select', vSelect);

import 'video.js/dist/video-js.css';

import store from './store';
window.store = store;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
