//connection a la base
const mongoose=require('mongoose')
const connectdb =async ()=>{
    try {
       await  mongoose.connect(process.env.mongo_URI);
       console.log('connect sucess')
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectdb 