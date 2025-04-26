const express = require("express");
// getting-started.js
const mongoose = require("mongoose");
const Employee = require("./models/Employee");

const app = express();
const port = 3000;
mongoose.connect("mongodb://127.0.0.1:27017/company");

app.set("view engine", "ejs");

const getRandom = (arr)=>{
  let rno = Math.floor(Math.random()* arr.length-1);
  return arr[rno];
}


app.get("/", (req, res) => {
  //   res.send('Hello World!')
  res.render("index", { foo: "FOO" });
});

app.get("/generate", async(req, res) => {
  // Clear the collection Employee
  await Employee.deleteMany({}) 
  //   Generate random data

  let randomNames = ["Alex","David","Paula"]
  let randomLang = ["C++","Python","Go"]
  let randomCities = ["New Delhi","Gurgaon","Mumbai"]

  for (let i = 0; i < 10; i++) {
    let e = await Employee.create({
      name: getRandom(randomNames),
      Salary: Math.floor(Math.random()*45000),
      language: getRandom(randomLang),
      city: getRandom(randomCities),
      isManager: (Math.random()>0.5)?true:false
    })

    console.log(e);
  }
  // res.render("index", { foo: "FOO" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
