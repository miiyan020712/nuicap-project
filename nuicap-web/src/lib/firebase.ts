// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAdHjQOOQ4k-uaqrKWjmPRxSLaOQYXm58I",
  authDomain: "nuicap-web.firebaseapp.com",
  projectId: "nuicap-web",
  storageBucket: "nuicap-web.firebasestorage.app",
  messagingSenderId: "725325267538",
  appId: "1:725325267538:web:f9e231b62a55f2d340d58b",
  measurementId: "G-PK6XNH1RK5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
