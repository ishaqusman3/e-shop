import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyD2gD4VQC1kC98soQ_56JtkTXknxlE5fPY",
  authDomain: "react-eshops.firebaseapp.com",
  projectId: "react-eshops",
  storageBucket: "react-eshops.appspot.com",
  messagingSenderId: "477205144128",
  appId: "1:477205144128:web:2086f5b3976617085835a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;