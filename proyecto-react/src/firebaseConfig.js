import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAD0-DmeTJI_8m0YeZIoXPdzUpp5OtIvG8",
  authDomain: "yungas-herbal.firebaseapp.com",
  projectId: "yungas-herbal",
  storageBucket: "yungas-herbal.appspot.com",
  messagingSenderId: "676590663396",
  appId: "1:676590663396:web:13ee51fe75e4f9b86ddef1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
