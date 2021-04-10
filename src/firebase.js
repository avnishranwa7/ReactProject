import firebase from 'firebase'; 

var firebaseConfig = {
    apiKey: "AIzaSyAwBiD5lQr1fZePvj8K35JnfusF8GHCIwg",
    authDomain: "project-b5be2.firebaseapp.com",
    projectId: "project-b5be2",
    storageBucket: "project-b5be2.appspot.com",
    messagingSenderId: "549344744913",
    appId: "1:549344744913:web:1d1d2b64250c2c19ef7cf0",
    measurementId: "G-HVCGSC6DR4"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
  