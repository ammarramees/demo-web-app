// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDsXSrYflkF81tntm45dcLxvA8_WeRG9nk",
  authDomain: "rmad-02-48649.firebaseapp.com",
  projectId: "rmad-02-48649",
  storageBucket: "rmad-02-48649.appspot.com",
  messagingSenderId: "795084428389",
  appId: "1:795084428389:web:134a15782ae22afdcfe28c",
  measurementId: "G-KXNKT35M9S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);