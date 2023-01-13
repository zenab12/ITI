//Mongo db day-1 task

//mongosh
//show dbs
//use iti
//1
db.learners.insertOne({
  name: "Zien",
  age: 23,
  hobbies: ["challenges", "coding", "cooking", "design"],
  mail: "zienmo555@outlook.com",
});

//2
db.learners.insertMany([
  {
    name: "omar",
    age: 30,
    hobbies: ["reading", "coding", "furniture", "learning"],
    mail: "omar@omar.com",
  },
  {
    name: "amir",
    age: 25,
    hobbies: ["reading", "coding", "furniture", "learning"],
    mail: "amir@amir.com",
  },
]);

//3
db.createCollection("courses");

//4
db.courses.insertMany([
  { crs_name: "Front-End Web devlopment", inst_name: "Zien Mo" },
  { crs_name: "Full-stack Web devlopment", inst_name: "Amir Mo" },
  { crs_name: "Flutter devlopment", inst_name: "Amira ezz" },
  { crs_name: "UI/UX design", inst_name: "Suad Reda" },
  { crs_name: "Data Analysis", inst_name: "Badr" },
]);

//5
db.learners.updateMany({}, { $set: { grades: [20, 50, 70, 90, 99] } });

//6
db.learners.updateMany(
  {},
  { $set: { address: { city: "Mansoura", street: "Minyet-Elnasr" } } }
);

//7
db.courses.updateMany({}, { $set: { grade: 100 } });

//8
db.courses.updateOne(
  { _id: ObjectId("63c17023f196fabacea4e20a") },
  { $inc: { grade: 20 } }
);

//9
db.learners.updateOne(
  { _id: ObjectId("63c16da6f196fabacea4e207") },
  { $set: { "grades.0": 20 } }
);

//10
db.learners.updateOne(
  { name: "Zien" },
  { $set: { "address.city": "Ismailia" } }
);
//11
db.courses.deleteMany({ grade: 100 });

//12
db.courses.deleteOne({ grade: 90 });


//13
db.learners.drop();

//14
db.dropDatabase();

//15
use random
db.createCollection("person") 
mongoimport --db random --collection "person" -drop --type json --host "localhost:27017" --file "C:\Users\COMPUMARTS\OneDrive\Desktop\mongodb-course-iti-day-1\Lab\Persons.json"

//another solution to import some data from person as problrm not solved 
db.person.insertMany([
... {
...     "index": 2,
...     "name": "Hays Wise",
...     "isActive": false,
...     "registered": "2015-02-23T10:22:15+0000",
...     "age": 24,
...     "gender": "male",
...     "eyeColor": "green",
...     "favoriteFruit": "strawberry",
...     "company": {
...       "title": "EXIAND",
...       "email": "hayswise@exiand.com",
...       "phone": "+1 (801) 583-3393",
...       "location": {
...         "country": "France",
...         "address": "795 Borinquen Pl"
...       }
...     },
...     "tags": [
...       "amet",
...       "ad",
...       "elit",
...       "ipsum"
...     ]
...   },
...   {
...     "index": 3,
...     "name": "Karyn Rhodes",
...     "isActive": true,
...     "registered": "2014-03-11T03:02:33+0000",
...     "age": 39,
...     "gender": "female",
...     "eyeColor": "green",
...     "favoriteFruit": "strawberry",
...     "company": {
...       "title": "RODEMCO",
...       "email": "karynrhodes@rodemco.com",
...       "phone": "+1 (801) 505-3760",
...       "location": {
...         "country": "USA",
...         "address": "521 Seigel Street"
...       }
...     },
...     "tags": [
...       "cillum",
...       "exercitation",
...       "excepteur"
...     ]
...   },
...   {
...     "index": 4,
...     "name": "Alison Farmer",
...     "isActive": false,
...     "registered": "2018-01-22T10:05:45+0000",
...     "age": 33,
...     "gender": "female",
...     "eyeColor": "brown",
...     "favoriteFruit": "banana",
...     "company": {
...       "title": "OTHERSIDE",
...       "email": "alisonfarmer@otherside.com",
...       "phone": "+1 (902) 572-3954",
...       "location": {
...         "country": "Italy",
...         "address": "356 Newkirk Placez"
...       }
...     },
...     "tags": [
...       "deserunt",
...       "et",
...       "duis",
...       "dolor"
...     ]
...   },
...   {
...     "index": 5,
...     "name": "Grace Larson",
...     "isActive": true,
...     "registered": "2014-04-20T11:37:23+0000",
...     "age": 20,
...     "gender": "female",
...     "eyeColor": "blue",
...     "favoriteFruit": "apple",
...     "company": {
...       "title": "OVOLO",
...       "email": "gracelarson@ovolo.com",
...       "phone": "+1 (930) 510-3310",
...       "location": {
...         "country": "USA",
...         "address": "932 Linden Street"
...       }
...     },
...     "tags": [
...       "fugiat",
...       "minim"
...     ]
...   },
...   {
...     "index": 6,
...     "name": "Carmella Morse",
...     "isActive": false,
...     "registered": "2014-06-08T11:20:22+0000",
...     "age": 39,
...     "gender": "female",
...     "eyeColor": "green",
...     "favoriteFruit": "apple",
...     "company": {
...       "title": "SHEPARD",
...       "email": "carmellamorse@shepard.com",
...       "phone": "+1 (829) 478-3744",
...       "location": {
...         "country": "Germany",
...         "address": "379 Tabor Court"
...       }
...     },
...     "tags": [
...       "amet",
...       "cillum"
...     ]
...   },
...   {
...     "index": 7,
...     "name": "Anastasia Blake",
...     "isActive": true,
...     "registered": "2016-07-01T02:32:46+0000",
...     "age": 40,
...     "gender": "female",
...     "eyeColor": "brown",
...     "favoriteFruit": "strawberry",
...     "company": {
...       "title": "ZERBINA",
...       "email": "anastasiablake@zerbina.com",
...       "phone": "+1 (867) 563-3788",
...       "location": {
...         "country": "Italy",
...         "address": "147 Montague Terrace"
...       }
...     },
...     "tags": [
...       "Lorem",
...       "consequat",
...       "ex",
...       "pariatur",
...       "labore"
...     ]
...   },
...   {
...     "index": 8,
...     "name": "Dale Holman",
...     "isActive": false,
...     "registered": "2014-07-11T09:08:36+0000",
...     "age": 22,
...     "gender": "male",
...     "eyeColor": "green",
...     "favoriteFruit": "strawberry",
...     "company": {
...       "title": "ISONUS",
...       "email": "daleholman@isonus.com",
...       "phone": "+1 (871) 452-3036",
...       "location": {
...         "country": "Italy",
...         "address": "586 Blake Court"
...       }
...     },
...     "tags": [
...       "tempor",
...       "aliqua",
...       "duis"
...     ]
...   },
...   {
...     "index": 9,
...     "name": "Tina Barnett",
...     "isActive": true,
...     "registered": "2015-03-09T11:16:38+0000",
...     "age": 39,
...     "gender": "female",
...     "eyeColor": "blue",
...     "favoriteFruit": "apple",
...     "company": {
...       "title": "JETSILK",
...       "email": "tinabarnett@jetsilk.com",
...       "phone": "+1 (963) 569-3905",
...       "location": {
...         "country": "Germany",
...         "address": "514 Lefferts Avenue"
...       }
...     },
...     "tags": [
...       "veniam",
...       "proident"
...     ]
...   },
...   {
...     "index": 10,
...     "name": "Belinda Zimmerman",
...     "isActive": true,
...     "registered": "2015-11-19T02:18:09+0000",
...     "age": 34,
...     "gender": "female",
...     "eyeColor": "green",
...     "favoriteFruit": "apple",
...     "company": {
...       "title": "COMTRAK",
...       "email": "belindazimmerman@comtrak.com",
...       "phone": "+1 (899) 410-3073",
...       "location": {
...         "country": "France",
...         "address": "259 Bergen Street"
...       }
...     },
...     "tags": [
...       "nisi",
...       "officia",
...       "nisi"
...     ]
...   }]);


//16
db.person.find({}).toArray().pretty()

//17
db.person.find({}, {name:1,gender:1,age:1})

//18
db.person.find({eyeColor:"brown"}).limit(2)

//19
 db.person.find().sort({age:-1}).limit(2)

 //20
db.person.find({age:{$gt:30}}).count()

//21
db.person.find({eyeColor:{$nin:['brown','blue']}})

//22
db.person.find({favoriteFruit:{$in:["apple","strawberry"]}})


//---------------------- last 2 bonus problems----------------------------------//
//1- 
db.person.updateMany( {age:{$gte:20},age:{$lte:30}},{ $push: { "tags":"bonus" } })

//2-
 db.person.updateMany({isActive:{$eq:true},name:{$ne:"Aurelia Gonzales"}},{$inc:{age:1}})
