// logic to database to Server, here we only write logic to connect to database but we dont execute it here, but the final call is made in server.js

const mongoose=require('mongoose');

function connectDB(){
  mongoose.connect("mongodb://localhost:27017/food-view")
    .then(()=>{
      console.log("Connected to MongoDB");
    
  })
  .catch((err)=>{
    console.log("Error connecting to MongoDB",err);
  })
}

module.exports=connectDB;