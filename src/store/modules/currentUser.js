import userSer from '@/db/user.js'
import productDb from '@/db/products.js'

const state = {
	currentUser: null
}

const mutations = {
  saveCurrentUser: (state, user) =>{
    state.currentUser = user;
  }
}

const actions = {}

const getters = {
  user: state => async (store) => {
    console.log(productDb.getProducts());
    if (state.currentUser == null) {
      let currentUser = await userSer.getUser();
      store.commit('saveCurrentUser', currentUser);
      return currentUser;
    } else {
      return state.currentUser;
    }
  }
}

export default {
	state,
	mutations,
	actions,
	getters
}