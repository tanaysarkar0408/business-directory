// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3fZseNFkFj2C1Ir9Vo0DWNvknxLZ03u8",
  authDomain: "employee-3d692.firebaseapp.com",
  databaseURL: "https://employee-3d692-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "employee-3d692",
  storageBucket: "employee-3d692.appspot.com",
  messagingSenderId: "565611680822",
  appId: "1:565611680822:web:1c0e38ae4cc0a8273a7497"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);