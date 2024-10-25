// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: "x-next-70203.firebaseapp.com",
  projectId: "x-next-70203",
  storageBucket: "x-next-70203.appspot.com",
  messagingSenderId: "398767485103",
  appId: "1:398767485103:web:caaaf2151143ccf02ee45a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
