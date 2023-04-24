import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1SOor7kxJiv8Dzi07N_5mVq740Lf-s3I",
  authDomain: "podverse-5a6db.firebaseapp.com",
  projectId: "podverse-5a6db",
  storageBucket: "podverse-5a6db.appspot.com",
  messagingSenderId: "280786456383",
  appId: "1:280786456383:web:2e8f112da55e1addc0cd8a",
  measurementId: "G-8PHNSE0K33"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
