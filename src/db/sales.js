//import { UsuarioCollection} from '@/firebase.js';
import {Sale} from '../model/sale.js'

export default {
  getSales(){
    let sales = [];
    sales.push(new Sale(1, "firstName1" ,"lastName1", "address1"));
    sales.push(new Sale(2, "firstName2" ,"lastName2", "address2"));
    return sales;
  },
  createsale(){
    
  },
  updatesale(){
    
  },
  deletesale(){
    
  }
}