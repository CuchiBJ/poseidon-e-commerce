const state = {
	loading: false,
  snackBar: false,
  snackText: "",
}

const mutations = {
	activeSnack: (state, text) =>{
    state.snackBar = true,
    state.snackText = text
  },
  activateLoading: (state) =>{
    console.log('activado')
    state.loading = true
  },
  deactivateLoading: (state) =>{
    state.loading = false
  }
}

const actions = {}

const getters = {}

export default {
	state,
	mutations,
	actions,
	getters
}
