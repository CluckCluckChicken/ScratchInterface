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

window.setInterval(function() {checkForRequests()}, 10);

var lock = true; // Lock makes it more reliable

function checkForRequests() {
  if (document.getElementsByClassName("monitor_value_3Yexa")[0].innerHTML == "0") {
    lock = false;
  }
  
  if (!lock) {
    // TODO: support request queueing
    if (document.getElementsByClassName("monitor_value_3Yexa")[0].innerHTML == "1") { // I think this means ALL shown variables, so TODO: change later
      window.open("https://www.google.com/", '_blank');
      lock = true;
    }
    if (document.getElementsByClassName("monitor_value_3Yexa")[0].innerHTML == "2") { // I think this means ALL shown variables, so TODO: change later
      alert("follow potatophant!");
      lock = true;
    }
    if (Number(document.getElementsByClassName("monitor_value_3Yexa")[0].innerHTML) < 0) { // I think this means ALL shown variables, so TODO: change later
      importCustomFunction(document.getElementsByClassName("monitor_value_3Yexa")[0].innerHTML);
      lock = true;
    }
  }
}

function importCustomFunction(functionID) {
  var docRef = db.collection("functions").doc(functionID.toString());
  docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
}
