import firebase from 'firebase';
 
const firebaseConfig = {
   apiKey: "AIzaSyDWJR9TVUilNYZrzvkRZJ4P_JzZlLRUzgM",
   authDomain: "hilobudget.firebaseapp.com",
   databaseURL: "https://hilobudget-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "hilobudget",
   storageBucket: "hilobudget.appspot.com",
   messagingSenderId: "700318791100",
   appId: "1:700318791100:web:b8988c6fbdfdac199427b9"
 };

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
 
export default firebase;