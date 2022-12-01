import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgMVckJWaBxg9T7ZVeFrJGcgcyeoYFP9A",
  authDomain: "fir-basics-2b7da.firebaseapp.com",
  projectId: "fir-basics-2b7da",
  storageBucket: "fir-basics-2b7da.appspot.com",
  messagingSenderId: "400830165270",
  appId: "1:400830165270:web:19ff6e42102cc5edfc2037"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);