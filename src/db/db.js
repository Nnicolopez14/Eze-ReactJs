// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvtTUYfDB1tTxD2og-ISTa4FSG7auv50w",
  authDomain: "eze-react-js.firebaseapp.com",
  projectId: "eze-react-js",
  storageBucket: "eze-react-js.firebasestorage.app",
  messagingSenderId: "405656488070",
  appId: "1:405656488070:web:2618673dfbb6dd4ae5e907"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db; 