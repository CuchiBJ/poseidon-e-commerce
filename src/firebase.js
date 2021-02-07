// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,    
    databaseURL: "https://poseidon-e-commerce.firebaseio.com",
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  const UsuarioCollection = db.collection("Usuario");
  const clientesCollection = db.collection("clientes");
  const compraCollection = db.collection("compra");
  const productosCollection = db.collection("productos");
  const ventaCollection = db.collection("venta");

  export {
    firebase,
    auth,
    UsuarioCollection,
    clientesCollection,
    compraCollection,
    productosCollection,
    ventaCollection,
  };