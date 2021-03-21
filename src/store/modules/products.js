import productDb from '@/db/products.js'

const state = {
	products: null
}

const mutations = {
  saveProducts: (state, products) =>{
    state.products = products;
    products[0].makeVariants();
    console.log(products[0]);
  },
  loadProduct: async (state, product) =>{
    let res = await productDb.createProduct(product)
    if (res != null){
      state.products.push(product)
    }
  }
}
 
const actions = {}

const getters = {
  getProducts: state => async (store) => {
    if (state.products == null) {
      let auxProducts = await productDb.getProducts();
      store.commit('saveProducts', auxProducts);
      return state.products; 
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
    if (prod.variants.length == 0) {
      prod.makeVariants();
    }
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