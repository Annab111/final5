
//DOCUMENTATION

/*// Add a new document in collection 
db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});



//specificare tipo di dato
var docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    dateExample: firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),
    arrayExample: [5, true, "hello"],
    nullExample: null,
    objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
    }
};
db.collection("data").doc("one").set(docData).then(() => {
    console.log("Document successfully written!");
});



//set+ID da associare al dato
db.collection("cities").doc("new-city-id").set(data); 



//aggiornare documento
var washingtonRef = db.collection("cities").doc("DC");

         // Set the "capital" field of the city 'DC'
return washingtonRef.update({
    capital: true
})
.then(() => {
    console.log("Document successfully updated!");
})
.catch((error) => {
         // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});



//timestamp del server
var docRef = db.collection('objects').doc('some-id');


            // Update the timestamp field with the value from the server
var updateTimestamp = docRef.update({
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
});
*/
