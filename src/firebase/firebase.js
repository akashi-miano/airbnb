import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDHanelGxjSETmpiYlPy9q5E5IZkn_ocj8",
  authDomain: "airbnb-clone-b2342.firebaseapp.com",
  projectId: "airbnb-clone-b2342",
  storageBucket: "airbnb-clone-b2342.appspot.com",
  messagingSenderId: "73460801621",
  appId: "1:73460801621:web:665543e5e08e34e85c74dc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider();