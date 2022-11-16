import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0cBTFNkJqdCr1eFOFpciq7vhnP5QZbAs",
  authDomain: "authapont-31e8a.firebaseapp.com",
  projectId: "authapont-31e8a",
  storageBucket: "authapont-31e8a.appspot.com",
  messagingSenderId: "702090927103",
  appId: "1:702090927103:web:c51cef1bbcf4c9b08f65ca",
  measurementId: "G-VX1FGYHEBS"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); 