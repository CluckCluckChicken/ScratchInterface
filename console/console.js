function getCode() {
  var docId = 1;
  while (var found == false) {
    var docRef = db.collection("functions").doc(docId.toString());
    docRef.get().then(function(doc) {
      if (doc.exists) {
        docId++;
      } else {
        // doc.data() will be undefined in this case
        found = true;
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  }
  
  // Create the document with that function
  db.collection("functions").doc(docId.toString()).set({
    javascript: document.getElementById("function").value
  })
  .then(function() {
    console.log("Document successfully written!");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
}
