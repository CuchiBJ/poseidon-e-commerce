import { productsCollection} from '@/firebase.js'; 
import {Product} from '../model/product.js'
import {Variant} from '../model/variant.js'

export default {
  async getProducts(){
    let products = [];
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
  async getVariants(prodId){
    let variants = [];
    variants = await productsCollection
      .doc(prodId).collection("variants")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          variants.push(new Variant(doc.id, doc.data().price, doc.data().buyPrice, doc.data().color, doc.data().size, doc.data().quantity));
        });
        return variants;
      })
      .catch((error) => {
        console.log("Error getting variants: ", error);
        return variants;
      });
    return variants; 
  },
  createProduct(){
    
  },
  updateProduct(){
    
  },
  deleteProduct(){
    
  } 
}