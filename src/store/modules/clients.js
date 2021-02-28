import clientDb from '@/db/clients.js'

const state = {
	clients: null
}

const mutations = {
  saveClients: (state, clients) =>{
    state.clients = clients;
  }
}
 
const actions = {}

const getters = {
  user: state => async (store) => {
    if (state.clients == null) {
      let auxclients = await clientDb.getClients();
      store.commit('saveClients', auxclients);
      return auxclients;
    } else {
      return state.clients;
    }
  }
}

export default {
	state,
	mutations,
	actions,
	getters
}