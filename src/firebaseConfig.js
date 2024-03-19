import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBDdiHLMSe4Wjqb4JRLMeVo2CfBa2N0Xuc",
  authDomain: "doc-app-2aa68.firebaseapp.com",
  projectId: "doc-app-2aa68",
  storageBucket: "doc-app-2aa68.appspot.com",
  messagingSenderId: "751009337955",
  appId: "1:751009337955:web:cd9af4c241e966e61ede56",
  measurementId: "G-D762W0XSJF"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app)