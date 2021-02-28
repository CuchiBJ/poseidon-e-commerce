import Vue from 'vue'
import Vuex from 'vuex'
import actionBar from './modules/actionBar.js';
import user from './modules/currentUser.js'
import buy from './modules/buy.js';
import client from './modules/clients.js';
import supplier from './modules/suppliers.js';
import product from './modules/products.js';
import sale from './modules/sales.js';

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
    user,
    buy,
    client,
    supplier,
    product,
    sale
  }
})
