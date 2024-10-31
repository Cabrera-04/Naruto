
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAR6VS8l33Yfm4eDUbO0ZrhkyUczmBZ_RI",
  authDomain: "naruto-1a0c6.firebaseapp.com",
  projectId: "naruto-1a0c6",
  storageBucket: "naruto-1a0c6.appspot.com",
  messagingSenderId: "1014443226474",
  appId: "1:1014443226474:web:b33776188a454640562113"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
