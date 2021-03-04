import buyDb from '@/db/buys.js'

const state = {
	buys: null
}

const mutations = {
  savePurchases: (state, buys) =>{
    state.buys = buys;
  }
}
 
const actions = {}

const getters = {
  getPurchases: state => async (store) => {
    if (state.buys == null) {
      let auxbuys = await buyDb.getbuys();
      store.commit('savebuys', auxbuys);
      return auxbuys;
    } else {
      return state.buys;
    }
  }
}

export default {
	state,
	mutations,
	actions,
	getters
}