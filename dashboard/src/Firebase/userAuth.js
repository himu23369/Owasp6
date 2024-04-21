import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./initiate.js";
import addUser from "./CRUDOperations.js";
import { doc, getDoc } from "firebase/firestore";

export function signUp(userInfo) {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, userInfo['email'], userInfo['password'])
            .then((userCredential) => {
                addUser(userInfo)
                    .then((ref) => resolve(userInfo))
                    .catch((err) => reject("couldn't make the document"))
            })
            .catch((error) => {
                reject(error.message)
            })
    })
}

export function signIn(email, password) {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                getDoc(doc(db, 'Users', email))
                    .then((snapshot) => resolve(snapshot.data()))
                    .catch((error) => reject(error))
            })
            .catch((err) => {
                reject(err);
            })
    })
}