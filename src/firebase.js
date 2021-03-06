import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey:               process.env.VUE_APP_APIKEY,
    authDomain:         process.env.VUE_APP_AUTHDOMAIN,    
    projectId:          process.env.VUE_APP_PROJECTID,
    storageBucket:      process.env.VUE_APP_STORAGEBUCKET,
    messagingSenderId:  process.env.VUE_APP_MESSAGINGSENDERID,
    appId:              process.env.VUE_APP_APPID,
    measurementId:      process.env.VUE_APP_MEASUREMENTID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const UsuarioCollection = db.collection("Usuario");
const clientesCollection = db.collection("clientes");
const compraCollection = db.collection("compra");
const productosCollection = db.collection("productos");
const ventaCollection = db.collection("venta");

export {
  firebase,
  UsuarioCollection,
  clientesCollection,
  compraCollection,
  productosCollection,
  ventaCollection
};