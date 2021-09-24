const express = require('express')
const app = express()
const port = 4000
require('dotenv').config()
const connectdb=require('./config/dbconnect')
connectdb()//appel de la fonction 


app.listen(port, () => console.log(`Example app listening on port ${port}!`))