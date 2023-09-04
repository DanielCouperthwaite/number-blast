// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe4tad_MpWpKKc2mJOQJkUvQIbqtqQMl0",
  authDomain: "number-blast-7a950.firebaseapp.com",
  projectId: "number-blast-7a950",
  storageBucket: "number-blast-7a950.appspot.com",
  messagingSenderId: "538977787688",
  appId: "1:538977787688:web:3c22b7612a12094f3c7a1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();