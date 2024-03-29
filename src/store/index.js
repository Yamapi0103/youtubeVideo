import Vue from 'vue';
import Vuex from 'vuex';
import { actions } from './actions';
import { mutations, state } from './mutation';
Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  mutations,
  state,
});
