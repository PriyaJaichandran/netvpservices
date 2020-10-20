var app = require('./appconfig');
var db = require('./environment/firebaseconfig');
//const productdata = require('./json/products.json');
var ref=db.ref("/userdetails");
app.get("/userdetails", (req, res, next) => {

    console.log(ref);
    //res.json(productdata)
    ref.once("value", function (snapshot) {
        var data = snapshot.val(); //Data is in JSON format.
        console.log(data);
        res.json(data);
    });
})