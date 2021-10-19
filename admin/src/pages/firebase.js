import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBMjT01voY0pu6dv4H1WMMiMq6JOysiC8k",
  authDomain: "netflix-clone-b1b9d.firebaseapp.com",
  projectId: "netflix-clone-b1b9d",
  storageBucket: "netflix-clone-b1b9d.appspot.com",
  messagingSenderId: "585873325018",
  appId: "1:585873325018:web:5d6e6005a0835c1a1a9ee3",
  measurementId: "G-TS71ZGW3ME",
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
