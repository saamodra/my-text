// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCR86NC7_Sml4f1gZw8G-nwB6WWH-Ec-0Q",
    authDomain: "my-text-1d6ad.firebaseapp.com",
    projectId: "my-text-1d6ad",
    storageBucket: "my-text-1d6ad.appspot.com",
    messagingSenderId: "760729374064",
    appId: "1:760729374064:web:dd085762e50cf222c3d3b5",
    measurementId: "G-954CGXGYXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
