//import { UsuarioCollection} from '@/firebase.js';
import {Product} from '../model/product.js'

export default {
  getProducts(){
    let products = [];
    products.push(new Product(1, "desc1", "brand1", "price1", "buyPrice1", "name1", "supplier1", "size1", "color1"));
    products.push(new Product(2, "desc2", "brand2", "price2", "buyPrice2", "name2", "supplier2", "size2", "color2"));
    products.push(new Product(2, "desc2", "brand2", "price2", "buyPrice2", "name3", "supplier2", "size2", "color2"));
    products.push(new Product(2, "desc2", "brand2", "price2", "buyPrice2", "name4", "supplier2", "size2", "color2"));
    products.push(new Product(2, "desc2", "brand2", "price2", "buyPrice2", "name5", "supplier2", "size2", "color2"));

    return products;
  },
  createProduct(){
    
  },
  updateProduct(){
    
  },
  deleteProduct(){
    
  }
}