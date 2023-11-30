// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
apiKey: "AIzaSyAj5kZqjbeiZGMZYm7qhSXmE6E0mflIPb0",
authDomain: "livechat-3ed8f.firebaseapp.com",
projectId: "livechat-3ed8f",
storageBucket: "livechat-3ed8f.appspot.com",
messagingSenderId: "929174839744",
appId: "1:929174839744:web:02ccc38e95ff76d1956825",
measurementId: "G-R5G0JXF6YE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export const analytics = getAnalytics(app);