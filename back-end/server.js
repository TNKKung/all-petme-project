const expressFunction = require("express");
const expressApp = expressFunction();
expressApp.use(expressFunction.json());
var multer = require("multer");
var upload = multer({ dest: "./uploads/" }); //ที่เก็บข้อมุล
const fs = require("fs"); //เขียนรูป
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
MongoClient = require("mongodb").MongoClient;
expressApp.use("/static", expressFunction.static("uploads")); //ทำให้รองรับรูปและเอาไปแสดงจากdireactoryได้
expressApp.use("/static", expressFunction.static("test-promptpay"));
var MongoClient = require("mongodb").MongoClient;
const deployUrl = "mongodb://petme:petme%402021@127.0.0.1:27017/petme";
const pondmongo =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const tommongo =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const Bmongo =
  "mongodb+srv://petMeApp:12345@cluster0.smgpu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var url = pondmongo;
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded());
// in latest body-parser use like below.
expressApp.use(expressFunction.urlencoded({ extended: true }));
// var url = "mongodb+srv://petMeApp:0808317028@cluster0.9vrr0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const port = process.env.PORT || 4000;
expressApp.use(cors());
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
expressApp.use("/static", expressFunction.static("qrCodepromt"));

expressApp.post("/uploadFile", upload.single("avatar"), (req, res) => {
  console.log(req.file);
  let fileType = req.file.mimetype.split("/")[1]; //หานามสกุลของไฟล์ทีส่งมา PNG JPEG
  let newFileName = req.file.filename + "." + fileType; //ดึงข้อมูลไฟล์ที่ส่งมารวมกับนามสกุล เช่น dfyhfghjfdgjdfgj.jpeg
  if (req.file == null) {
    console.log("null");
  } else {
    MongoClient.connect(url, (err, db) => {
      const ponddb = db.db("image");
      fs.rename(
        `./uploads/${req.file.filename}`,
        `./uploads/${newFileName}`,
        () => {
          console.log("200");
        }
      );
    });
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
      typeSell,
    } = JSON.parse(req.body.jsonbody);

    if (req.body.lenght <= 2) {
      res.status(400).send("Error");
    } else {
      const pet = {
        petId: uuidv4(),
        userId: userId,
        breed: breed,
        gender: gender,
        age: age,
        detail: petDetail,
        cost: CatchCost,
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
        statusSell: true,
        typeSell: typeSell,
        picture: `http://localhost:4000/static/${newFileName}`,
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
        dbo
          .collection("User")
          .updateOne(
            { userId: userId },
            { $push: { listPetIdForSell } },
            function (err, res) {
              console.log("add pet");
              db.close();
            }
          );
        dbo
          .collection("User")
          .find({ userId: userId })
          .toArray(function (err, result) {
            const data = {
              address: result[0].address,
              birth: result[0].birth,
              district: result[0].district,
              email: result[0].email,
              picture: [],
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
            };
            res.send(data);
          });
      });
    }
  }
});

//---------------------------------------------------------------

expressApp.post("/checkPasswordForlogin", function (req, res) {
  const { username, password } = req.body;
  var data = [];

  function getFalse() {
    data.push({ statusLogIn: false });
    res.send(data);
  }
  function getTrue() {
    data.push({ statusLogIn: true });

    res.send(data);
  }

  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("PetMeApp");
    dbo
      .collection("User")
      .find({ username: username })
      .toArray(function (err, result) {
        data.push({
          userId: result[0].userId,
          name: result[0].name,
          email: result[0].email,
          mobileNumber: result[0].mobileNumber,
          birth: result[0].birth,
          address: result[0].address,
          road: result[0].road,
          subDistrict: result[0].subDistrict,
          district: result[0].district,
          province: result[0].province,
          postalCode: result[0].postalCode,
          picture: result.picture,
        });
      });
    dbo
      .collection("User")
      .find({ username: username })
      .toArray(function (res, result) {
        if (result[0].username === username) {
          if (result[0].password === password) {
            getTrue();
          } else {
            console.log("faild");
            getFalse();
          }
        } else {
          console.log("faild");
          getFalse();
        }
      });
  });
});

expressApp.post("/api/login", function (req, res) {
  const { username, password } = req.body;
  const data = [];
  console.log(req.body);
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("PetMeApp");
    dbo
      .collection("User")
      .find({ username: username })
      .toArray(function (err, result) {
        if (result[0].username === username) {
          const data = {
            address: result[0].address,
            birth: result[0].birth,
            district: result[0].district,
            email: result[0].email,
            picture: result[0].picture,
            listPetIdForSell: result[0].listPetIdForSell,
            listPetIdForBuy: result[0].listPetIdForBuy,
            mobileNumber: result[0].mobileNumber,
            name: result[0].name,
            postalCode: result[0].postalCode,
            province: result[0].province,
            road: result[0].road,
            subDistrict: result[0].subDistrict,
            userId: result[0].userId,
          };
          res.send(data);
        } else {
          res.send(false);
        }
      });
  });
});

expressApp.put("/checkPasswordAndUpdate", function (req, res) {
  const { userId, originalPassword, newPassword } = req.body;
  function getFalse() {
    res.send(false);
  }
  function getTrue() {
    res.send(true);
  }

  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("PetMeApp");
    dbo
      .collection("User")
      .find({ userId: userId })
      .toArray(function (res, result) {
        if (result[0].password !== originalPassword) {
          console.log("faild");
          getFalse();
        } else {
          dbo
            .collection("User")
            .updateOne(
              { userId: userId },
              { $set: { password: newPassword } },
              function (err, res) {
                console.log("success");
                getTrue();
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
      picture: "",
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

expressApp.post("/dataPetForLike", function (req, res) {
  const { userId } = req.body;
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("PetMeApp");
    dbo
      .collection("Pet")
      .find({ likeUser: { $elemMatch: { userId: userId } } })
      .toArray(function (err, result) {
        console.log(result);
        res.send(result);
      });
  });
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
    name,
    picture,
  } = req.body;
  console.log(req.body);
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("PetMeApp");
    const likeUser = {
      userId,
      answer1: answer1,
      answer2: answer2,
      answer3: answer3,
      answer4: answer4,
      answer5: answer5,
      name: name,
      picture: picture,
      picturePromtpay: "",
      paymentStatus: "",
    };
    dbo
      .collection("Pet")
      .updateOne(
        { petId: petId },
        { $push: { likeUser } },
        function (err, res) {
          console.log("add answer of petId" + petId + " complete");
        }
      );
    const listPetIdForBuy = {
      petId: petId,
    };
    dbo
      .collection("User")
      .updateOne(
        { userId: userId },
        { $push: { listPetIdForBuy } },
        function (err, res) {
          console.log("ttt");
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
            likeUser: result[i].likeUser,
            question1: result[i].question1,
            question2: result[i].question2,
            question3: result[i].question3,
            question4: result[i].question4,
            question5: result[i].question5,
            seller: result[i].seller,
            dateCreate: result[i].dateCreate,
            detail: result[i].detail,
            gender: result[i].gender,
            age: result[i].age,
            userId: result[i].userId,
            typeSell: result[i].typeSell,
          });
        }
        res.send(data);
        db.close();
      });
  });
});

expressApp.post("/dataPetMyStore", function (req, res) {
  const { userId } = req.body;
  var data = [];
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("PetMeApp");
    const query = { userId: userId };
    dbo
      .collection("Pet")
      .find(query)
      .toArray(function (err, result) {
        data.push(result);
        res.send(data);
      });
  });
});

expressApp.post("/addContact", function (req, res) {
  const { name, email, mobileNumber, topic, message } = req.body;

  console.log(req.body);
  const report = {
    reportId: uuidv4(),
    name: name,
    email: email,
    mobileNumber: mobileNumber,
    topic: topic,
    message: message,
  };

  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("manager");
    dbo.collection("Contact").insertOne(report, function (err, res) {
      console.log("Add one one contact");
      db.close();
    });
  });
});

expressApp.get("/getContact", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("manager");
    dbo
      .collection("Contact")
      .find({})
      .toArray(function (err, result) {
        res.send(result);
      });
  });
});

expressApp.post("/report", function (req, res) {
  const {
    userIdOfSeller,
    userIdOfCustomer,
    nameOfSeller,
    nameOfCustomer,
    petId,
    reportType,
    reportDetail,
  } = req.body;

  const report = {
    reportId: uuidv4(),
    userIdOfSeller: userIdOfSeller,
    nameOfSeller: nameOfSeller,
    petId: petId,
    userIdOfCustomer: userIdOfCustomer,
    nameOfCustomer: nameOfCustomer,
    problemType: reportType,
    problemDetail: reportDetail,
  };

  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("manager");
    dbo.collection("Report").insertOne(report, function (err, res) {
      console.log("Add one report");
      db.close();
    });
  });
});

expressApp.get("/getReport", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("manager");
    dbo
      .collection("Report")
      .find({})
      .toArray(function (err, result) {
        console.log(result);
        res.send(result);
      });
  });
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
    var query = { userId: userId };
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
    dbo
      .collection("User")
      .find(query)
      .toArray(function (err, result) {
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
        };
        console.log("Update " + userId + " complete ");
        res.send(data);
      });
  });
});

expressApp.post("/choosePeopleForChat", function (req, res) {
  const {
    petId,
    userId,
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    name,
    picture,
  } = req.body;
  console.log(req.body);
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("PetMeApp");
    const acceptUser = {
      userId: userId,
      answer1: answer1,
      answer2: answer2,
      answer3: answer3,
      answer4: answer4,
      answer5: answer5,
      name: name,
      picture: picture,
    };
    dbo
      .collection("Pet")
      .updateOne(
        { petId: petId },
        { $push: { acceptUser } },
        function (err, res) {
          console.log("acceptUser complete");
        }
      );
  });
});

expressApp.delete("/cancelAccept", function (req, res) {
  const { userId, petId } = req.body;
  console.log(req.body);
  console.log("tomtam");
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("PetMeApp");
    dbo
      .collection("Pet")
      .updateOne(
        { petId: petId },
        { $pull: { acceptUser: { userId: userId } } }
      )
      .then((obj) => {
        console.log("cancel complete");
      });
  });
});

expressApp.delete("/cancelLikeUser", function (req, res) {
  const { userId, petId } = req.body;
  console.log(req.body);

  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("PetMeApp");
    dbo
      .collection("Pet")
      .updateOne({ petId: petId }, { $pull: { likeUser: { userId: userId } } })
      .then((obj) => {
        console.log("cancel like complete");
      });
  });
});

expressApp.delete("/cancelLike", function (req, res) {
  const { userId, petId } = req.body;
  console.log(req.body);

  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("PetMeApp");
    dbo
      .collection("Pet")
      .updateOne({ petId: petId }, { $pull: { likeUser: { userId: userId } } })
      .then((obj) => {
        console.log("cancel complete");
      });
  });
});

const generatePayload = require("promptpay-qr");
const qrcode = require("qrcode");

expressApp.post("/promtpay", function (req, res) {
  const mobileNumber = "0892229292";

  const amount = req.body.amount;

  const payload = generatePayload(mobileNumber, { amount });

  const options = { type: "svg", color: { dark: "#000", light: "#fff" } };
  qrcode.toString(payload, options, (err, svg) => {
    if (err) return console.log(err);
    fs.writeFileSync("./qrCodePromt/qr.svg", svg);

    const qr = { path: "http://localhost:4000/static/qr.svg" };
    console.log(qr);
    res.send(qr);
  });
});

expressApp.listen(port, function () {
  console.log("Listen 4000");
});
