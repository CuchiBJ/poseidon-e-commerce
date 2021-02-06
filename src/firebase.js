// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {
    firebase,
    auth
  };