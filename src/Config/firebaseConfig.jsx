import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuzfRVNCh-doXlIjpc8FFE8tHqtHFclyo",
  authDomain: "brand-shop-auth-33c1f.firebaseapp.com",
  projectId: "brand-shop-auth-33c1f",
  storageBucket: "brand-shop-auth-33c1f.appspot.com",
  messagingSenderId: "840826818593",
  appId: "1:840826818593:web:32d40bd795def937fb9360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);