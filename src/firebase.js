import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD2jsZeQvZKU56od3mWCRBhV3gjDWPMUmU",
  authDomain: "instagram-clone-914b7.firebaseapp.com",
  projectId: "instagram-clone-914b7",
  storageBucket: "instagram-clone-914b7.appspot.com",
  messagingSenderId: "677068467644",
  appId: "1:677068467644:web:5224f5ab44d95d6ec60fb9",
  measurementId: "G-S2EKC99QXN",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
