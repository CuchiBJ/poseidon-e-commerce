import productDb from '@/db/products.js'

const state = {
	products: null
}

const mutations = {
  saveProducts: (state, products) =>{
    state.products = products;
  }
}
 
const actions = {}

const getters = {
  getProducts: state => async (store) => {
    if (state.products == null) {
      let auxProducts = await productDb.getProducts();
      store.commit('saveProducts', auxProducts);
      return auxProducts;
    } else {
      return state.products;
    }
  },
  getProduct: state => async (store, idIn) => {
    if (state.products == null) {
      let auxProducts = await productDb.getProducts();
      store.commit('saveProducts', auxProducts);
      return auxProducts.find((product) => product.id == idIn );
    } else {
      return state.products.find((product) => product.id == idIn);
    }
  }
}

export default {
	state,
	mutations,
	actions,
	getters
}