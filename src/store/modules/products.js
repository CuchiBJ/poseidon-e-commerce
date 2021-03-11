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
    let prod
    if (state.products == null) {
      let auxProducts = await productDb.getProducts();
      store.commit('saveProducts', auxProducts);
      prod = auxProducts.find((product) => product.id == idIn )
    } else {
      prod = state.products.find((product) => product.id == idIn)
    }
    prod.variants= await productDb.getVariants(idIn);
    console.log(prod)
    return prod;
  }
}

export default {
	state,
	mutations,
	actions,
	getters
}