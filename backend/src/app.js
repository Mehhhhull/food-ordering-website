//create server

const express=require('express');
const cookieParser=require('cookie-parser');
const authRoutes=require('./routes/auth.routes');
const foodRoutes=require('./routes/food.routes');
const cors=require('cors');

const app=express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(cookieParser());
app.use(express.json());//brings data to req.body to let it read in the req.body makes it readbale


app.get("/",(req,res)=>{
    res.send("Welcome to Video Zomato Backend");
})

app.use("/api/auth",authRoutes);
app.use("/api/foods",foodRoutes)

module.exports=app;