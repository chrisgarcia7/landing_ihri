
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmy3RIqi7JSFdrwG0gq40zkoGSh2LSO94",
  authDomain: "ihri-proyecto.firebaseapp.com",
  projectId: "ihri-proyecto",
  storageBucket: "ihri-proyecto.firebasestorage.app",
  messagingSenderId: "800482983387",
  appId: "1:800482983387:web:0e1704b9206f8ec00bfbfe"
};


const app = initializeApp(firebaseConfig);

export default app;

export const auth = getAuth(app)
export const db = getFirestore(app)