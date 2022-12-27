import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSK8LUhzod8aACyv7QEvX6EWDc_KTYGPk",
  authDomain: "nutricoachme-native.firebaseapp.com",
  databaseURL: "https://nutricoachme-native-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nutricoachme-native",
  storageBucket: "nutricoachme-native.appspot.com",
  messagingSenderId: "57367713349",
  appId: "1:57367713349:web:90285454aac96e9087f52c",
  measurementId: "G-65JRMLDDLE"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export { firebase }