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

// expressApp.post("/api/get/login",function(req,res){
//     const {
//         Username,
//         Password,
//     } = req.body;

//     MongoClient.connect(url, function(err, db) {
//         var dbo = db.db("PetMeApp");
//         dbo.collection("Pet").find().toArray(function(err, result) {
//             res.send(result);
//             db.close();
//         });    
//     }); 
// });

expressApp.post("/api/get/login",function(req,res){
    const {
        Username,
        Password,
    } = req.body;

    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("PetMeApp");
        var a =dbo.collection("Pet").find().toArray();
        console.log(a);
        res.send(a); 
    }); 
});

expressApp.post("/api/get/profile",function(req,res){
    const username = req.body.username;
    console.log(req.body);
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("PetMeApp");
        console.log(req.body);
        dbo.collection("User").find({"username" : username}).toArray(function(err, result) {
            if(result[0].username === username){
                console.log(req.body);
                res.send({
                    name : result[0].name,
                    email : result[0].email,
                    mobileNumber : result[0].mobileNumber,
                    birth : result[0].birth,
                    address : result[0].address,
                    road : result[0].road,
                    subDistrict : result[0].subDistrict,
                    district : result[0].district,
                    province : result[0].province,
                    postalCode : result[0].postalCode

                });
                console.log(result[0]);
            }
            db.close();
        });      
    });  
});

expressApp.post("/api/add/registerUser",function(req,res) {
    const {
        username,
        password,
        name,
        email,
        mobileNumber,
        birth,
        address,
        road,
        subDistrict,
        district,
        province,
        postalCode
    } = req.body;

    console.log(req.body);
    if(username.lenght <= 2){
        res.status(400).send("Error");
    }
    else{
        const user = {
            "username" : username, 
            "password" : password,
            "name": name,
            "email" : email,
            "mobileNumber" : mobileNumber,
            "birth" : birth,
            "address" : address,
            "road" : road,
            "subDistrict": subDistrict,
            "district": district,
            "province": province,
            "postalCode": postalCode,
            "follower" : 0 ,
            "following" : 0,
            "favorites" : 0,
            'status' : 'Null',
            "listPetId" : []
        }
        
        res.send(user);
        console.log(username);
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

expressApp.post("/api/add/registerPet",function(req,res) {
    const {
        petId,
        dogBreed,
        gender,
        age,
        petDetail,
        cost,
        nameAccountPromtpay,
        detailAccountPromtpay,
        question1,
        question2,
        question3,
        sellerUser,
    } = req.body;

    console.log(req.body);
    if(req.body.lenght <= 2){
        res.status(400).send("Error");
    }
    else{
        const user = {
            "petId" : petId,
            "dogBreed" : dogBreed,
            "gender" : gender,
            "age" : age,
            "detail" : petDetail,
            "cost" : cost,
            "nameAccountPromtpay" : nameAccountPromtpay,
            "detailAccountPromtpay" : detailAccountPromtpay,
            "question1" : question1,
            "question2" : question2,
            "question3" : question3,
            "sellerUser" : sellerUser,
            "listPeople" : [{
                username:"tomtam",
                question1:"i like this",
                question2:"i like this",
                question3:"i like this"
            },{
                username:"tomtam",
                question1:"i like this",
                question2:"i like this",
                question3:"i like this"
            }],
            "amountOfFavorite" : 0
        }
        
        console.log(user);

        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("PetMeApp");
            dbo.collection("Pet").insertOne(user, function(err, res) {
              if (err) throw err;
              console.log("Add one animal");
              db.close();
            });
        });
    }
});

expressApp.post("/api/add/contact",function(req,res) {
    const {
        name,
        email,
        mobileNumber,
        topic,
        message
    } = req.body;

    console.log(req.body);
    if(Username.lenght <= 2){
        res.status(400).send("Error");
    }
    else{
        const user = {
            "name" : name,
            "email" : email,
            "mobileNumber" : mobileNumber,
            "topic" : topic,
            "message" : message
        }
        res.send(user);
        console.log(Username);
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Admin");
            dbo.collection("Contact").insertOne(user, function(err, res) {
              if (err) throw err;
              console.log("Add one people");
              db.close();
            });
        });
    }
});

expressApp.post("/api/add/report",function(req,res) {
    const {
        name,
        email,
        mobileNumber,
        topic,
        message
    } = req.body;

    console.log(req.body);
    if(Username.lenght <= 2){
        res.status(400).send("Error");
    }
    else{
        const user = {
            "name" : name,
            "email" : email,
            "mobileNumber" : mobileNumber,
            "topic" : topic,
            "message" : message
        }
        res.send(user);
        console.log(Username);
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Admin");
            dbo.collection("Contact").insertOne(user, function(err, res) {
              if (err) throw err;
              console.log("Add one people");
              db.close();
            });
        });
    }
});

expressApp.post("/api/get/dataPet",function(req,res) {
    var data = [];
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("PetMeApp");
        dbo.collection("Pet").find().toArray(function(err, result) {
            for(var i=0;i<result.length;i++){
                data.push({
                    petId : result[i].petId,
                    cost : result[i].cost,
                    dogBreed : result[i].dogBreed,
                    sellerUser : result[i].sellerUser,
                });
            }
            res.send(data); 
            db.close();
        });    
    });
    
});

expressApp.post("/api/get/checkPayment",function(req,res) {
    var data = [];
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("Admin");
        dbo.collection("Pament").find().toArray(function(err, result) {
            for(var i=0;i<result.length;i++){
                data.push({
                    petId : result[i].petId,
                    cost : result[i].cost,
                    dogBreed : result[i].dogBreed,
                    customerUser : result[i].customerUser,
                    sellerUser : result[i].sellerUser,
                    statusCheck : false
                });
            }
            res.send(data); 
            db.close();
        });    
    });
    
});



expressApp.put("/api/update",function(req,res) {
    const {
        username,
        name,
        email,
        mobileNumber,
        birth,
        address,
        road,
        subDistrict,
        district,
        province,
        postalCode
    } = req.body;
    console.log(req.body);

    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("PetMeApp");
        var query = { 'Username' : username};
        var updateName = {$set : {
            "name":name,
            "email" : email,
            "mobileNumber" : mobileNumber,
            "birth" : birth,
            "address" : address,
            "road" : road,
            "subDistrict" : subDistrict,
            "district" : district,
            "province" : province,
            "postalCode" :postalCode
        }};
        dbo.collection("User").updateOne(query,updateName,function(err, res) {
            console.log("1 document updated");
            db.close();
        });
        res.send("Update " + username +" complete ");
    });
});

expressApp.listen(4000,function(){
    console.log("Listen 4000");
});