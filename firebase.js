
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_API_KEY}`,
  authDomain: "number-blast-7a950.firebaseapp.com",
  projectId: "number-blast-7a950",
  storageBucket: "number-blast-7a950.appspot.com",
  messagingSenderId: "538977787688",
  appId: "1:538977787688:web:3c22b7612a12094f3c7a1d"
};

const app = initializeApp(firebaseConfig);

export default getFirestore();

