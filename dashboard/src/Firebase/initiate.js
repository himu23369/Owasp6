import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDec9tXrz1h8MwimJPNkSqgSbGna9ubKDw",
    authDomain: "aashram-241ee.firebaseapp.com",
    databaseURL: "https://aashram-241ee-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "aashram-241ee",
    storageBucket: "aashram-241ee.appspot.com",
    messagingSenderId: "280747148813",
    appId: "1:280747148813:web:ce553072601e24aec6f744"
};
const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);