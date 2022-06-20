import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAPZ63E0v46gspXjlEImKiIkPZSSH28hI",
  authDomain: "react-coder-confalone.firebaseapp.com",
  projectId: "react-coder-confalone",
  storageBucket: "react-coder-confalone.appspot.com",
  messagingSenderId: "58649929383",
  appId: "1:58649929383:web:03a853322175a7db709d82"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;