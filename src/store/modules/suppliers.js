import supplierDb from '@/db/suppliers.js'

const state = {
	suppliers: null
}

const mutations = {
  saveSuppliers: (state, suppliers) =>{
    state.suppliers = suppliers;
  }
}
 
const actions = {}

const getters = {
  user: state => async (store) => {
    if (state.suppliers == null) {
      let auxsuppliers = await supplierDb.getSuppliers();
      store.commit('saveSuppliers', auxsuppliers);
      return auxsuppliers;
    } else {
      return state.suppliers;
    }
  }
}

export default {
	state,
	mutations,
	actions,
	getters
}