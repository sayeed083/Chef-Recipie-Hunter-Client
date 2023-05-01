// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASsLcvTZ0dVHjIz7LjauPmObSGZt_Xmrk",
  authDomain: "chef-recipe-hunter-39a8c.firebaseapp.com",
  projectId: "chef-recipe-hunter-39a8c",
  storageBucket: "chef-recipe-hunter-39a8c.appspot.com",
  messagingSenderId: "568486199331",
  appId: "1:568486199331:web:45e77beabecf825a973196"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;