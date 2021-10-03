const express=require("express")
const connectMongoDb = require("./connect/connectMongoDb");
require("dotenv").config({ path: "./.env" });
const personData = require("./data");
const person = require("./model/personModel");

const app = express();
port = process.env.PORT ||5000;


connectMongoDb();

const personR = new person({

        id:6,
        name: 'Amna',
        age:28,
        favoriteFoods:['spagetti','pitzaa','tiramisu'],
  });
  personR.save((err) => {
    err ? console.log('Error', err) : console.log('new person inserted succesfully')
   })
 
   person.create([
        {
            id:9,
            name: 'joe',
            age:30,
            favoriteFoods:['Coq au Vin']  
        },
        {
            id:8,
            name: 'Elma',
            age:32,
            favoriteFoods:['Crêpe']  
        },
        {
            id:7,
            name: 'Nadia',
            age:34,
            favoriteFoods:['Steak tartare']  
        },
      ])
      .then(console.log('Multiple records added succesfully'))
      .catch((err) => console.log('error'))
 //Use model.find() 

person.find({ name: "Nadia" }, function (err, res) {
    err ? console.log('Error', err) : console.log(res)
})
      
  //Use model.findOne() 

 person.findOne({ name: "Sarra" }),function(err,res){
    err ? console.log('Error', err) : console.log(res)
}
     
  //Use model.findById() 
  let personId = 3
   person.findById( personId, function(err, res) {
      err ? console.log('Error', err) : console.log(res)
  })

let PersonId=1
person.findOne(PersonId).then((res) => {
    console.log(res)
 res.favoriteFoods.push('Steak tartare')
console.log('your favouriteFoods is updated succesfully')
     res.save()
     })
     .catch((err) => console.log(err))


person.findOneAndUpdate(
        { name: "Elma" },
        { $set: { age: 20 } },
        { new: true }
      );
    
  //Delete One 
person.findByIdAndRemove({
        id: 1,
      },(err) => {
        err ? console.log('Error', err) : console.log('Person removed')
         })
      
  // Delete Many Documents with model.remove()
person.remove({ name: "Joe" }, function (err, res) {
        if (err) console.log(err);
        else console.log("all person called Mary are removed");
      });

    person
        .find({ favoriteFoods: "Pitzaa" })
        .sort({ name: 1 })
        .limit(2)
        .select({ age:0 })
        .exec((err, data) =>
        err
          ? console.error( err)
          : console.log('people whos favoriteFood is burritos:', data)
      );
        


app.listen(port, (err) => err? console.log("failed"):console.log(`server running on port ${port}!`))