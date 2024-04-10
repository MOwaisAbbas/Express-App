import 'dotenv/config'
import connectDB from "./src/db/index.js";
import mongoose from 'mongoose';
import { configuration } from './src/constants.js';
import express from 'express'

const app = express()
const port = process.env.PORT || 5000
//function for database connection
connectDB()
// you can also use this to connect database
/*
;(async()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${configuration.DB_NAME}`);
app.on('error', (error)=>{
  console.log('Error :' , error)
  throw error
})

app.listen(port , ()=>{
  console.log(`Application is listing on port : ${port}`)
})

  } catch (error) {
    console.log('Error :' , error)
    throw error
  }
})()
*/