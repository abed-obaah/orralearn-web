import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "orralearnsocial.firebaseapp.com",
  databaseURL: "https://orralearnsocial-default-rtdb.firebaseio.com",
  projectId: "orralearnsocial",
  storageBucket: "orralearnsocial.appspot.com",
  messagingSenderId: "165361665483",
  appId: "1:165361665483:web:f0c74d35a06361d759a24e",
  measurementId: "G-NL6T7YCTQH"
  // authDomain: "auth-developement-7416c.firebaseapp.com",
  // projectId: "auth-developement-7416c",
  // storageBucket: "auth-developement-7416c.appspot.com",
  // messagingSenderId: "495427481825",
  // appId: "1:495427481825:web:fcd7e2258965f752ab07a0"
}
const app = initializeApp(firebaseConfig);
export const  auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;


// /apiKey:import.meta.env.VITE_FIREBASE_API_KEY,