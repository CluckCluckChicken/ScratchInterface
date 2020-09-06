// When you run the f12 console.js script, it downloads this script and adds it to the DOM of the Scratch project (temporarily, you have to re-paste after reloading the page).

(function() {
  var po = document.createElement('script');
  po.type = 'text/javascript';
  po.async = true;
  po.src = 'https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js';
  var s = document.getElementsByTagName('script')[0];
  document.body.insertBefore(po, document.body.childNodes[0]);
})();
(function() {
  var po = document.createElement('script');
  po.type = 'text/javascript';
  po.async = true;
  po.src = 'https://www.gstatic.com/firebasejs/7.19.1/firebase-firestore.js';
  var s = document.getElementsByTagName('script')[0];
  document.body.insertBefore(po, document.body.childNodes[0]);
})();
(function() {
  var po = document.createElement('script');
  po.type = 'text/javascript';
  po.async = true;
  po.src = 'https://scratchinterface.netlify.app/communicator.js';
  var s = document.getElementsByTagName('script')[0];
  document.body.insertBefore(po, document.body.childNodes[0]);
})();
