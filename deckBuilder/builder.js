// create reference


const dbRefObject = firebase.database().ref().child("creatures")

dbRefObject.on("value", snap => console.log(snap.val()))
const creatures = $.getJSON("creatures.JSON", data => data) 
dbRefObject.set(JSON.parse(creatures))