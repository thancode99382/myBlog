// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGIIxHDrb6xNKx39u-em-HGYfFVeQqESI",
  authDomain: "myblog-4fb1c.firebaseapp.com",
  projectId: "myblog-4fb1c",
  storageBucket: "myblog-4fb1c.appspot.com",
  messagingSenderId: "792903773661",
  appId: "1:792903773661:web:28a39a9c7b8b4b806b1a34",
  measurementId: "G-B8BGZFM6TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export {db}
