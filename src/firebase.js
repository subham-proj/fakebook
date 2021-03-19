import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
    apiKey: "AIzaSyBLnVURgkGwLqOq2O6bO-QKh-4PGfcy78s",
    authDomain: "fakebook-world.firebaseapp.com",
    projectId: "fakebook-world",
    storageBucket: "fakebook-world.appspot.com",
    messagingSenderId: "310570429244",
    appId: "1:310570429244:web:eac23d27f532a0bbc98c39",
    measurementId: "G-RDBSFWLZWW"
  });

const auth = firebase.auth();

export { auth };
