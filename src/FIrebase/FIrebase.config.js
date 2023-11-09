// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMCY4u9DgSUROTkwVI0aFK0VUc7VgIie8",
  authDomain: "sustain-serve-project.firebaseapp.com",
  projectId: "sustain-serve-project",
  storageBucket: "sustain-serve-project.appspot.com",
  messagingSenderId: "224290101815",
  appId: "1:224290101815:web:e64fc6f1ae94755c83bdb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;
const auth = getAuth(app);
export default auth;
