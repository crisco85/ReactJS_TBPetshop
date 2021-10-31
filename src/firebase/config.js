import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoV7vdrgkIUfc1QN3hYXceGoELGROINaU",
  authDomain: "tb-petshop.firebaseapp.com",
  projectId: "tb-petshop",
  storageBucket: "tb-petshop.appspot.com",
  messagingSenderId: "397144519103",
  appId: "1:397144519103:web:7084d84188c59763bef10a",
  measurementId: "G-WRXHJK35WE"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
 const app = firebase.initializeApp(firebaseConfig);

 export const getFireStore = () => {
    return firebase.firestore(app)
 }

 export const getAuth = () => {
    return firebase.auth(app)
 }