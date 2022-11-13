import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_ezuPmkIwOZwiuTTl4oIPyo-OaFRgtPw",
    authDomain: "fb-crud-react-a4ba1.firebaseapp.com",
    projectId: "fb-crud-react-a4ba1",
    storageBucket: "fb-crud-react-a4ba1.appspot.com",
    messagingSenderId: "731726809167",
    appId: "1:731726809167:web:ad7514053ba37705fec23a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
