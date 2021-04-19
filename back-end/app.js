const expressFunction = require('express');
const expressApp = expressFunction();
expressApp.use(expressFunction.json());

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

expressApp.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
    return next()
});

expressApp.get("/api/get/login",function(req,res){
    const {
        Username,
        Password,
    } = req.body;

    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("User");
        dbo.collection("user").find({"Username" : Username}).toArray(function(err, result) {
            if(result.length){
                if(result[0].Username === Username && result[0].Password === Password ){
                    res.send(200);
                }
                else{
                    res.send('Password Error');
                }
            }
            else{
                res.send('Error');
            }
            db.close();
        });
       
    });
    
});


expressApp.get("/api/get/profile",function(req,res){
    const {
        Username,
        Password,
    } = req.body;

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("User");
        dbo.collection("user").find({"Username" : Username}).toArray(function(err, result) {
            if (err) throw err;
            if(result[0].Username === Username){
                res.send("tom");
            }
            db.close();
        });
        
    });
    
});


expressApp.post("/api/add",function(req,res) {

    const {
        Username,
        Password,
        Name,
        Email,
        Tell,
        Birth,
        Address,
        Road,
        Sub_district,
        District,
        Province,
        Postal_code

    } = req.body;

    console.log(req.body);
    if(Username.lenght <= 2){
        res.status(400).send("Error");
    }
    else{
        const user = {
            "Username" : Username, 
            'Password' : Password,
            'Name': Name,
            'Email' : Email,
            'Tell' :Tell,
            'Birth' : Birth,
            'Address' : Address,
            'Road' : Road,
            "Sub_district":Sub_district,
            "District":District,
            "Province":Province,
            "Postal_code":Postal_code,
            'Status' : 'Null'
        }
        res.send(user);
        console.log(Username);
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("PetMeApp");
            dbo.collection("User").insertOne(user, function(err, res) {
              if (err) throw err;
              console.log("Add one people");
              db.close();
            });
        });
    }
});

expressApp.delete("/api/delete",function(req,res) {
    const confirmId = req.body.confirmUsername;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("User");
        var deleteId = {"Username" : confirmId};
        dbo.collection("user").deleteOne(deleteId, function(err, obj) {
            if (err) throw err;
            console.log("Delete " + confirmId +" complete ");
            db.close();
        });
        res.send("Delete " + confirmId +" complete ");
    });
});

expressApp.put("/api/update",function(req,res) {
    const userId = req.body.Id;
    const userName = req.body.Name;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("User");
        var query = { 'id' : userId};
        var updateName = {$set : {'name':userName}};
        dbo.collection("user").updateOne(query,updateName,function(err, res) {
            if (err) throw err;
            console.log("1 document updated");
            db.close();
        });
        res.send("Update " + userId +" complete ");
    
    });
});



expressApp.listen(4000,function(){
    console.log("Listen 4000");
});