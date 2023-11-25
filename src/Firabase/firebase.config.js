// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const all = import.meta.env;

const firebaseConfig = {
  apiKey:all.VITE_apiKey,
  authDomain:all.VITE_authDomain,
  projectId:all.VITE_projectId,
  storageBucket:all.VITE_storageBucket,
  messagingSenderId:all.VITE_messagingSenderId,
  appId:all.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);