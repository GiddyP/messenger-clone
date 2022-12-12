import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyA969XdLNyAfm984NkBupqX525AZk2OIfI",
    authDomain: "messenger-clone-aa071.firebaseapp.com",
    projectId: "messenger-clone-aa071",
    storageBucket: "messenger-clone-aa071.appspot.com",
    messagingSenderId: "911037533241",
    appId: "1:911037533241:web:613d27817b34f2de7251e8",
    measurementId: "G-T55Q9JQL7Y"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;