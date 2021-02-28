import buyDb from '@/db/buys.js'

const state = {
	buys: null
}

const mutations = {
  savebuys: (state, buys) =>{
    state.buys = buys;
  }
}
 
const actions = {}

const getters = {
  user: state => async (store) => {
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