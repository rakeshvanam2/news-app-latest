
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfEKt9mCE0DqApa_viI0GFwqlVdvq3TJk",
  authDomain: "auth-app-411fb.firebaseapp.com",
  projectId: "auth-app-411fb",
  storageBucket: "auth-app-411fb.appspot.com",
  messagingSenderId: "924848721590",
  appId: "1:924848721590:web:de018069c8d663e0b02017",
  measurementId: "G-VF2PY1CBQV"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
// Initialize Firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;