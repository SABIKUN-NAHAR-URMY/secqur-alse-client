// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnAbceuNkzQwCn-d8sauwuJK1g_av5bGM",
  authDomain: "secqur-alse-project.firebaseapp.com",
  projectId: "secqur-alse-project",
  storageBucket: "secqur-alse-project.appspot.com",
  messagingSenderId: "724260553263",
  appId: "1:724260553263:web:f5f8e832a9bf473cdd3cda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);