import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider, } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB853jljqxyhLNoDZGADVXNvHTgaRSUi-c",
    authDomain: "prueba-dfa34.firebaseapp.com",
    projectId: "prueba-dfa34",
    storageBucket: "prueba-dfa34.appspot.com",
    messagingSenderId: "450314684548",
    appId: "1:450314684548:web:7075391bada82ece3e9ad1",
    measurementId: "G-M5TL71QMDV"
  };
  

 // Initialize Firebase

 const firebaseApp = initializeApp(firebaseConfig);
 const googleProvider = new GoogleAuthProvider();
 const facebookProvider = new FacebookAuthProvider();

 
 export{
   firebaseApp,
   googleProvider,
   facebookProvider

 } ;
 

 