const expressFunction = require("express");
const expressApp = expressFunction();
expressApp.use(expressFunction.json());
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
const fs = require("fs");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');

var MongoClient = require("mongodb").MongoClient;
var url ="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
// var url = "mongodb+srv://petMeApp:0808317028@cluster0.9vrr0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const port = process.env.PORT || 4000;
expressApp.use(cors());
expressApp.use("/static", expressFunction.static("uploads")); //ทำให้รองรับรูปและเอาไปแสดงจากdireactoryได้

expressApp.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, PATCH, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Option, Authorization"
  );
  return next();
});

// upload picture naja
expressApp.post("/uploadFile", upload.single("avatar"), (req, res) => {
  let fileType = req.file.mimetype.split("/")[1]; //หานามสกุลของไฟล์ทีส่งมา PNG JPEG
  let newFileName = req.file.filename + "." + fileType; //ดึงข้อมูลไฟล์ที่ส่งมารวมกับนามสกุล เช่น dfyhfghjfdgjdfgj.jpeg
  fs.rename(
    `./uploads/${req.file.filename}`,
    `./uploads/${newFileName}`,
    () => {
      //ใช้prosition +ชื่อไฟล์ที่ทำการโหลด
      console.log("newFileName");
      res.send("200");
    }
  );
});

//---------------------------------------------------------------

expressApp.post("/api/login", function (req, res) {
  const { username, password } = req.body;
  const data = [];
  console.log(req.body);
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("PetMeApp");
    dbo.collection("User").find({ "username": username }).toArray(function (err, result) {
        if (result[0].username === username) {
            const data = {
              address: result[0].address,
              birth: result[0].birth,
              district: result[0].district,
              email: result[0].email,
              img: [],
              listPetIdForSell: result[0].listPetIdForSell,
              listPetIdForBuy: result[0].listPetIdForBuy,
              mobileNumber: result[0].mobileNumber,
              name: result[0].name,
              postalCode: result[0].postalCode,
              province: result[0].province,
              road: result[0].road,
              subDistrict: result[0].subDistrict,
              userId: result[0].userId,
            }
          res.send(data);
        } else {
          res.send(false);
        }
      });
  });
});

expressApp.put("/checkPasswordAndUpdate", function (req, res) {
  const {
    userId, 
    originalPassword,
    newPassword
  } = req.body;
  function getFalse(){
    res.send(false)
  }
  function getTrue(){
    res.send(true)
  }
  
  MongoClient.connect(url, function (err, db) {
    
    var dbo = db.db("PetMeApp"); 
    dbo.collection("User").find({ userId: userId }).toArray(function (res, result) {
      if(result[0].password !== originalPassword){
        console.log("faild")
        getFalse()
      }else{
        dbo.collection("User").updateOne({ userId: userId },{ $set: { password : newPassword } },function (err, res) {
          console.log("success")
          getTrue()
         }
        );
      }
    });
  });
});


expressApp.post("/api/add/registerUser", function (req, res) {
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
    postalCode,
  } = req.body;

  console.log(req.body);
  if (username.lenght <= 2) {
    res.status(400).send("Error");
  } else {
    const user = {
      userId: uuidv4(),
      username: username,
      password: password,
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      birth: birth,
      address: address,
      road: road,
      subDistrict: subDistrict,
      district: district,
      province: province,
      postalCode: postalCode,
      listPetIdForSell: [],
      listPetIdForBuy: [],
      img: [],
    };

    res.send(user);
    console.log(username);
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("PetMeApp");
      dbo.collection("User").insertOne(user, function (err, res) {
        if (err) throw err;
        console.log("Add one people");
        db.close();
      });
    });
  }
});

expressApp.post("/api/add/listPetIdForBuy", function (req, res) {
  const { petId, username } = req.body;
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("PetMeApp");
    const listPetIdForBuy = {
      username: username,
      answer1: answer1,
      answer2: answer2,
      answer3: answer3,
      answer4: answer4,
      answer5: answer5,
    };
    dbo
      .collection("Pet")
      .updateOne(
        { petId: petId },
        { $push: { likeUser } },
        function (err, res) {
          console.log("add answer of petId" + petId + " complete");
          res.send(true);
          db.close();
        }
      );
  });
});

expressApp.post("/api/add/registerPet", function (req, res) {
  const {
    userId,
    breed,
    gender,
    age,
    petDetail,
    cost,
    nameAccountPromtpay,
    detailAccountPromtpay,
    question1,
    question2,
    question3,
    question4,
    question5,
    profile,
    picture,
    typeSell,
  } = req.body;

  console.log(req.body);
  if (req.body.lenght <= 2) {
    res.status(400).send("Error");
  } else {
    const pet = {
      petId: uuidv4(),
      userId:userId,
      breed: breed,
      gender: gender,
      age: age,
      detail: petDetail,
      cost: cost,
      nameAccountPromtpay: nameAccountPromtpay,
      detailAccountPromtpay: detailAccountPromtpay,
      question1: question1,
      question2: question2,
      question3: question3,
      question4: question4,
      question5: question5,
      profile: profile,
      likeUser: [],
      acceptUser: [],
      cancelUser: [],
      statusSell: true,
      typeSell: typeSell,
      picture : " ",
      seller: { picture: " ", name: "ต้อม" },
      dateCreate: "12/02/2554",
    };

    MongoClient.connect(url, function (err, db) {
      var dbo = db.db("PetMeApp");
      dbo.collection("Pet").insertOne(pet, function (err, res) {
        console.log("Add one pet");
      });
      const listPetIdForSell = {
        petId: pet.petId,
      };
      dbo.collection("User").updateOne({ userId: userId },{ $push: { listPetIdForSell } },function (err, res) {
            console.log("add pet");
            db.close();
          }
        );
        dbo.collection("User").find({ "userId": userId }).toArray(function (err, result) {
              const data = {
                address: result[0].address,
                birth: result[0].birth,
                district: result[0].district,
                email: result[0].email,
                img: [],
                listPetIdForSell: result[0].listPetIdForSell,
                listPetIdForBuy: result[0].listPetIdForBuy,
                mobileNumber: result[0].mobileNumber,
                name: result[0].name,
                postalCode: result[0].postalCode,
                province: result[0].province,
                road: result[0].road,
                subDistrict: result[0].subDistrict,
                userId: result[0].userId,
                username: result[0].username,
              }
            res.send(data);
        });
    });
  }
});

expressApp.post("/addAnswer", function (req, res) {
  const {
    petId,
    userId,
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
  } = req.body;
  console.log(req.body)
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("PetMeApp");
    const likeUser = {
      userId,
      answer1: answer1,
      answer2: answer2,
      answer3: answer3,
      answer4: answer4,
      answer5: answer5,
    };
    dbo.collection("Pet").updateOne(
        { petId: petId },
        { $push: { likeUser } },
        function (err, res) {
          console.log("add answer of petId" + petId + " complete");
        }
      );
      const listPetIdForBuy = {
        petId : petId
      };
    dbo.collection("User").updateOne(
        { userId: userId },
        { $push: { listPetIdForBuy } },
        function (err, res) {
          console.log("ttt")
          db.close();
        }
      );
  });
});

expressApp.get("/api/get/dataPet", function (req, res) {
  var data = [];
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("PetMeApp");
    dbo
      .collection("Pet")
      .find()
      .toArray(function (err, result) {
        for (var i = 0; i < result.length; i++) {
          data.push({
            petId: result[i].petId,
            picture: result[i].picture,
            cost: result[i].cost,
            breed: result[i].breed,
            profile: result[i].profile,
            statusSell: result[i].statusSell,
            likeUser : result[i].likeUser,
            question1: result[i].question1,
            question2: result[i].question2,
            question3: result[i].question3,
            question4: result[i].question4,
            question5: result[i].question5,
            seller: result[i].seller,
            dateCreate: result[i].dateCreate,
            petDetail: result[i].detail,
            gender: result[i].gender,
            age: result[i].age,
            userId : result[i].userId
          });
        }
        res.send(data);
        db.close();
      });
  });
});

expressApp.post("/dataPetMyStore", function (req, res) {
  const {
    userId
  }=req.body
  var data = []
    MongoClient.connect(url, function (err, db) {
      var dbo = db.db("PetMeApp");
      const query = {"userId" : userId}
      dbo.collection("Pet").find(query).toArray(function (err, result) {
        data.push(result)  
        res.send(data)
      });

    });
});

expressApp.post("/api/add/contact", function (req, res) {
  const { name, email, mobileNumber, topic, message } = req.body;

  console.log(req.body);
  const user = {
    name: name,
    email: email,
    mobileNumber: mobileNumber,
    topic: topic,
    message: message,
  };
  res.send(user);
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("manager");
    dbo.collection("Contact").insertOne(user, function (err, res) {
      console.log("Add one one contact");
      db.close();
    });
  });
});

expressApp.post("/api/add/report", function (req, res) {
  const { name, email, mobileNumber, topic, message } = req.body;

  console.log(req.body);
  if (name.lenght <= 2) {
    res.status(400).send("Error");
  } else {
    const user = {
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      topic: topic,
      message: message,
    };
    res.send(user);
    MongoClient.connect(url, function (err, db) {
      var dbo = db.db("Admin");
      dbo.collection("Report").insertOne(user, function (err, res) {
        console.log("Add one people");
        db.close();
      });
    });
  }
});

expressApp.post("/api/get/checkPayment", function (req, res) {
  var data = [];
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("Admin");
    dbo
      .collection("Pament")
      .find()
      .toArray(function (err, result) {
        for (var i = 0; i < result.length; i++) {
          data.push({
            petId: result[i].petId,
            cost: result[i].cost,
            breed: result[i].breed,
            customerUser: result[i].customerUser,
            sellerUser: result[i].sellerUser,
            statusCheck: false,
            nameAccountPromtpay: result[i].nameAccountPromtpay,
          });
        }
        res.send(data);
        db.close();
      });
  });
});

expressApp.put("/updateProfileUser", function (req, res) {
  const {
    userId,
    name,
    mobileNumber,
    address,
    road,
    subDistrict,
    district,
    province,
    postalCode,
  } = req.body;
  console.log(req.body);

  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("PetMeApp");
    var query = { userId : userId };
    var updateName = {
      $set: {
        name: name,
        mobileNumber: mobileNumber,
        address: address,
        road: road,
        subDistrict: subDistrict,
        district: district,
        province: province,
        postalCode: postalCode,
      },
    };
    dbo.collection("User").updateOne(query, updateName, function (err, res) {
      console.log("1 document updated");
      db.close();
    });
    dbo.collection("User").find(query).toArray(function(err,result){
      const data = {
        address: result[0].address,
        birth: result[0].birth,
        district: result[0].district,
        email: result[0].email,
        img: [],
        listPetIdForSell: result[0].listPetIdForsell,
        listPetIdForBuy: result[0].listPetIdForBuy,
        mobileNumber: result[0].mobileNumber,
        name: result[0].name,
        postalCode: result[0].postalCode,
        province: result[0].province,
        road: result[0].road,
        subDistrict: result[0].subDistrict,
        userId: result[0].userId,
      }
    console.log("Update " + userId + " complete ");
    res.send(data)
    });
    
  });
});

expressApp.listen(port, function () {
  console.log("Listen 4000");
});

