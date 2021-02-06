import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import VueAxios from "vue-axios";
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify';

Vue.use(VueAxios, axios);
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
