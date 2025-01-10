import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';  
const firebaseConfig = {
  apiKey: "AIzaSyDs0RTAphmuzctmKDH3MwDPfNu5ypxoas8",
  authDomain: "vhadb-c09b4.firebaseapp.com",
  projectId: "vhadb-c09b4",
  storageBucket: "vhadb-c09b4.appspot.com",
  messagingSenderId: "1089586920718",
  appId: "1:1089586920718:web:33fd5205c11a3f5eaa2b5f"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app); // Export the 'auth' object