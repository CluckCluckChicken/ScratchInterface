// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCr-csz6B6AT-eXwjnXL5rppMM0gEIbpQQ",
  authDomain: "scratchinterface.firebaseapp.com",
  databaseURL: "https://scratchinterface.firebaseio.com",
  projectId: "scratchinterface",
  storageBucket: "scratchinterface.appspot.com",
  messagingSenderId: "316602045699",
  appId: "1:316602045699:web:0eff20e23bab8f8ee3c536"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
