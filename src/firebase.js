// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS8tplh0A5odNH0dGnKMS6xnvCgxF6fRI",
  authDomain: "punkapiv2.firebaseapp.com",
  projectId: "punkapiv2",
  storageBucket: "punkapiv2.appspot.com",
  messagingSenderId: "519864914163",
  appId: "1:519864914163:web:4da1f8e0fe373469d6a786"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app)

export {firestore}
export {app}