import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDbDqU1ElraDfqgl24UY-nkXHbP66wpNYU",
  authDomain: "mappie-a4c83.firebaseapp.com",
  projectId: "mappie-a4c83",
  storageBucket: "mappie-a4c83.appspot.com",
  messagingSenderId: "364286563040",
  appId: "1:364286563040:web:40b7b9f6fff47cf452b685"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);