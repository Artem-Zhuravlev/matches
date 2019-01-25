import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyDR7TWjKkFWdbsm06e4dY9FvMbo64hc4l4",
  authDomain: "m-city-a64e8.firebaseapp.com",
  databaseURL: "https://m-city-a64e8.firebaseio.com",
  projectId: "m-city-a64e8",
  storageBucket: "m-city-a64e8.appspot.com",
  messagingSenderId: "525447874497"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");
const firebaseTeams = firebaseDB.ref("teams");
const firebasePlayers = firebaseDB.ref("players");

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers,
  firebaseDB
};
