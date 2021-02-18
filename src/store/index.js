import Vue from 'vue'
import Vuex from 'vuex'
import actionBar from './modules/actionBar.js';
import user from './modules/currentUser.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    actionBar,
    user
  }
})
