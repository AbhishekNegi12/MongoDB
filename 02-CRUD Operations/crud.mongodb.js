
//CRUD Operations
use("CrudDb")

// console.log(db)
//this is creating a collection
// db.createCollection("courses")

//courses is a collection inside DataBase CrudDb
//this is inserting into collection
// db.courses.insertOne({
//     name : "Abhishek Course",
//     price : 0,
//     assignments : 12,
//     projects : 45
// })

//we can do document insertion using insertionmany
//giving array of objects

// db.courses.insertMany([
//     {
//         "name": "Abhishek Course",
//         "price": 0,
//         "assignments": 12,
//         "projects": 45
//     },
//     {
//         "name": "Full Stack Web Dev",
//         "price": 199,
//         "assignments": 10,
//         "projects": 5
//     },
//     {
//         "name": "React & Redux Bootcamp",
//         "price": 149,
//         "assignments": 8,
//         "projects": 4
//     },
//     {
//         "name": "MongoDB Masterclass",
//         "price": 129,
//         "assignments": 9,
//         "projects": 6
//     },
//     {
//         "name": "Node.js Deep Dive",
//         "price": 179,
//         "assignments": 11,
//         "projects": 7
//     },
//     {
//         "name": "Data Structures in JS",
//         "price": 99,
//         "assignments": 7,
//         "projects": 3
//     },
//     {
//         "name": "DSA with Python",
//         "price": 89,
//         "assignments": 6,
//         "projects": 2
//     },
//     {
//         "name": "MERN Stack Projects",
//         "price": 249,
//         "assignments": 13,
//         "projects": 9
//     },
//     {
//         "name": "Advanced JavaScript",
//         "price": 109,
//         "assignments": 7,
//         "projects": 4
//     },
//     {
//         "name": "Frontend UI/UX Design",
//         "price": 159,
//         "assignments": 10,
//         "projects": 6
//     }      
// ])

//Read in a collection
//I want courses with price 0
// let a = db.courses.find({price : 0});
// console.log(a);
// console.log(a.count());
// console.log(a.toArray());

// let b = db.courses.findOne({price : 0});
// console.log(a);
// console.log(b.count());

//3. Update Option
// db.courses.updateOne({price:0},{$set:{price:100}})

//4.Delete
db.courses.deleteOne({price:100});
db.courses.deleteMany({});