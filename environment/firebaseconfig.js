var firebase = require ("firebase");

firebase.initializeApp({
    serviceAccount: "D:/project_web/key/netvpwebapp-firebase-adminsdk-7ipsw-a395565731",
    databaseURL:"https://netvpwebapp.firebaseio.com"
});

var db=firebase.database();

var ref=db.ref("/userdetails");
console.log("after return from firebase");
ref.once("value", function(snapshot) {
  var data = snapshot.val();   //Data is in JSON format.
  console.log(data);
});
module.exports=db;