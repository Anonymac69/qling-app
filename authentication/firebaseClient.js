import firebase from 'firebase';
// const firebase = require("firebase")

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCTLMAqhaQtA41bZFNRgzzNkqiQNY3gxNk",
  authDomain: "qling-a47df.firebaseapp.com",
  projectId: "qling-a47df",
  storageBucket: "qling-a47df.appspot.com",
  messagingSenderId: "1078605747712",
  appId: "1:1078605747712:web:16d38ababcea6949a02ae5"
};

export default !firebase.apps.length ? firebase.initializeApp(FIREBASE_CONFIG) : firebase.app();