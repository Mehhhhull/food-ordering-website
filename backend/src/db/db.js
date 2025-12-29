// logic to database to Server, here we only write logic to connect to database but we dont execute it here, but the final call is made in server.js

const mongoose=require('mongoose');

function connectDB(){
  const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/food-view";
  
  mongoose.connect(mongoURI)
    .then(()=>{
      console.log("✅ Connected to MongoDB");
    
  })
  .catch((err)=>{
    console.log("❌ Error connecting to MongoDB:", err.message);
    console.log("⚠️  Make sure MongoDB is running");
    console.log("💡 The server will continue but database operations will fail");
  })
}

module.exports=connectDB;