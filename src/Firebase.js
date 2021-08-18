import firebase from 'firebase';
 
const firebaseConfig = {
   apiKey: "AIzaSyCBnBOEG8eh-hXuli25TF0yBC7UJTT6pQU",
   authDomain: "hilo-assignment.firebaseapp.com",
   databaseURL: "https://hilo-assignment-default-rtdb.firebaseio.com",
   projectId: "hilo-assignment",
   storageBucket: "hilo-assignment.appspot.com",
   messagingSenderId: "565124575625",
   appId: "1:565124575625:web:186bbed44b9c233b067158",
   measurementId: "G-TKH1PREGDT"
};

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
 
export default firebase;