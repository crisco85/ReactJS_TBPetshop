import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDoV7vdrgkIUfc1QN3hYXceGoELGROINaU",
  authDomain: "tb-petshop.firebaseapp.com",
  projectId: "tb-petshop",
  storageBucket: "tb-petshop.appspot.com",
  messagingSenderId: "397144519103",
  appId: "1:397144519103:web:7084d84188c59763bef10a",
  measurementId: "G-WRXHJK35WE"
};

// Inicializo Firebase
 const app = firebase.initializeApp(firebaseConfig);

 export const getFireStore = () => {

    return firebase.firestore(app)
 }