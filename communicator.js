// When you run the f12 console.js script, it downloads this script and adds it to the DOM of the Scratch project (temporarily, you have to re-paste after reloading the page).

window.setInterval(function() {checkForRequests()}, 1000);

function checkForRequests() {
// TODO: support request queueing
  if (document.getElementsByClassName("monitor_value_3Yexa")[0].innerHTML == "1") { // I think this means ALL shown variables, so TODO: change later
    alert("Test request recieved");
  }
}
