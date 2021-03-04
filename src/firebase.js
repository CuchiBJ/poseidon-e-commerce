import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

const auth = firebase.auth();

auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)

const usersCollection = db.collection("users");
const clientsCollection = db.collection("clients");
const purchasesCollection = db.collection("purchases");
const productsCollection = db.collection("products");
const salesCollection = db.collection("sales");

export {
  firebase,
  auth,
  usersCollection,
  clientsCollection,
  purchasesCollection,
  productsCollection,
  salesCollection
};