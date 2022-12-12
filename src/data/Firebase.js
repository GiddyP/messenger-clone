import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyADWgayzmvhmzkMcVucKKN4qOLXnnWhbHY",
    authDomain: "messenger-clone2-a984e.firebaseapp.com",
    projectId: "messenger-clone2-a984e",
    storageBucket: "messenger-clone2-a984e.appspot.com",
    messagingSenderId: "858564569107",
    appId: "1:858564569107:web:9199577237f6c5d8e277e6",
    measurementId: "G-50H78ZD8WB"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;