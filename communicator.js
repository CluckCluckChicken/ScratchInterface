// When you run the f12 console.js script, it downloads this script and adds it to the DOM of the Scratch project (temporarily, you have to re-paste after reloading the page).

window.setInterval(function() {checkForRequests()}, 10);

function checkForRequests() {
// TODO: support request queueing
  if (document.getElementsByClassName("monitor_value_3Yexa")[0].innerHTML == "1") { // I think this means ALL shown variables, so TODO: change later
    window.open("https://www.google.com/", '_blank');
  }
  if (document.getElementsByClassName("monitor_value_3Yexa")[0].innerHTML == "2") { // I think this means ALL shown variables, so TODO: change later
    alert("follow potatophant!");
  }
  if (Number(document.getElementsByClassName("monitor_value_3Yexa")[0].innerHTML) < 0) { // I think this means ALL shown variables, so TODO: change later
    alert("Custom JS functionality coming within the next few hours!");
  }
}
