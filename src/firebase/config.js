import firebase from "firebase/app";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBA12ZDh_yWjLt6ZD66F6qbR5A9FUDJ9mc",
    authDomain: "nikkei-cravings.firebaseapp.com",
    projectId: "nikkei-cravings",
    // UPDATED LINE BELOW:
    storageBucket: "nikkei-cravings.firebasestorage.app", 
    messagingSenderId: "214756567098",
    appId: "1:214756567098:web:c57e3a33c17b3b00ec6d03"
};

// Initialize Firebase (v8 style)
const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app);
}