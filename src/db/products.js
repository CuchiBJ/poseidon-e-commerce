import { productsCollection} from '@/firebase.js'; 
import {Product} from '../model/product.js'

export default {
  async getProducts(){
    let products = [];
    /* products.push(new Product(1, "desc1", "brand1", "name1", "supplier1", ["size1", "size1"], ["color1", "color1"]));
    products.push(new Product(2, "desc2", "brand2", "name2", "supplier2", ["size2", "size2"], ["color2", "color2"]));
    products.push(new Product(2, "desc2", "brand2", "name3", "supplier2", ["size2", "size2"], ["color2", "color2"]));
    products.push(new Product(2, "desc2", "brand2", "name4", "supplier2", ["size2", "size2"], ["color2", "color2"]));
    products.push(new Product(2, "desc2", "brand2", "name5", "supplier2", ["size2", "size2"], ["color2", "color2"])); */
    products = await productsCollection
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          products.push(new Product(
            doc.id, doc.data().description, doc.data().brand, doc.data().name, doc.data().supplier, doc.data().sizes, doc.data().colors, doc.data().categories
          ));
        });
        return products;
      })
      .catch((error) => {
        console.log("Error getting products: ", error);
        return products;
      });
    console.log(products);
    return products; 
  },
  createProduct(){
    
  },
  updateProduct(){
    
  },
  deleteProduct(){
    
  },
  getVariant(){

  }
}