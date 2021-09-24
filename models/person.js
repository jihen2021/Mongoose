// cree le model 
const mongoose=require('mongoose')
const personShcema= new mongoose.Schema({
    name:{type:string, uppercase:true, required:true, unique:true},
    age:Number,
    favouriteFoods: [String]
})
module.exports=User=mongoose.model("person",personShcema)