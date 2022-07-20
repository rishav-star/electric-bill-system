require("dotenv").config({
  path: __dirname + "/.env",
});
const express = require("express");
const ejs = require("ejs");
const db = require("./connection")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.set("view engine", "ejs");
app.set("x-powered-by", false);


app.use(express.static("public"));

app.post("/user", function (req, res) {
  var id=req.body.companyName;
  var mail=req.body.email;
  var name=req.body.firstName;
  var unit=req.body.lastName;
  var addr=req.body.address;
  var city=req.body.city;
  var pincode=req.body.pincode;
  var state=req.body.state;
  var mobile=req.body.contact;
  console.log(req.body);

  let sql = `INSERT INTO DETAILS(CUST_ID,EMAIL,NAME,UNITS,ADDRESS,CITY,POSTAL,STATE,MOBILE) VALUES("${id}","${mail}","${name}","${unit}","${addr}","${city}","${pincode}","${state}","${mobile}")`;
  db.query(sql,(err,result) => {
    if(err) throw err;
    console.log("Record inserted");
  })
  res.render("user");
});

app.use("/user", function(req,res){
  res.render("user");
})

app.use("/", function(req,res){
  res.render("dashboard");
})


  app.get('/', function(req, res, next) {
  //   var sql='SELECT * FROM DETAILS';
  //   db.query(sql, function (err, data, fields) {
  //   if (err) throw err;
  //   res.render('/', { title: 'User List', userData: data});
  // });
});



app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
