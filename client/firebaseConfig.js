import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJHtlznpUlvXks6pnotG44FXX1BZJu7to",
  authDomain: "ember-112ec.firebaseapp.com",
  databaseURL: "https://ember-112ec-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ember-112ec",
  storageBucket: "ember-112ec.appspot.com",
  messagingSenderId: "861015057251",
  appId: "1:861015057251:web:ffb573a38c49b9cfb5a956",
  measurementId: "G-92PM4J4DDN"
};

const app = initializeApp(firebaseConfig);

export default app;