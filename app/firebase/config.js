import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1YGDIhQJAeIgdzoDTTC158rjvuoLXG8U",
  authDomain: "algabay-algabay.firebaseapp.com",
  projectId: "algabay-algabay",
  storageBucket: "algabay-algabay.appspot.com",
  messagingSenderId: "433008167047",
  appId: "1:433008167047:web:9ff0b2706c29f41c831022",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { app, auth };
