// When you run the f12 console.js script, it downloads this script and adds it to the DOM of the Scratch project (temporarily, you have to re-paste after reloading the page).

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
      (function() {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
      })();
      (function() {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://www.gstatic.com/firebasejs/7.19.1/firebase-firestore.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
      })();
      (function() {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://scratchinterface.netlify.com/firebase.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
      })();
      importCustomFunction(document.getElementsByClassName("monitor_value_3Yexa")[0].innerHTML);
      lock = true;
    }
  }
}

function importCustomFunction(functionID) {
  var docRef = db.collection("functions").doc("functionID.toString()");
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
