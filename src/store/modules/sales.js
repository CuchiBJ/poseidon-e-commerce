import saleDb from '@/db/sales.js'

const state = {
	sales: null
}

const mutations = {
  saveSales: (state, sales) =>{
    state.sales = sales;
  }
}
 
const actions = {}

const getters = {
  getSales: state => async (store) => {
    if (state.sales == null) {
      let auxsales = await saleDb.getsales();
      store.commit('saveSales', auxsales);
      return auxsales;
    } else {
      return state.sales;
    }
  }
}

export default {
	state,
	mutations,
	actions,
	getters
}