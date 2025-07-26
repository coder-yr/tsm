import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_CigkLb91f669w92wTbFzWwuJyY8tHDQ",
  authDomain: "supplylink-26dd1.firebaseapp.com",
  projectId: "supplylink-26dd1",
  storageBucket: "supplylink-26dd1.appspot.com",
  messagingSenderId: "472003051751",
  appId: "1:472003051751:web:acec621e0628d79f3f2242",
  measurementId: "G-KP41YQ77DH"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
