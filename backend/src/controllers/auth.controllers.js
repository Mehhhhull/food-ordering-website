const userModel=require("../models/user.model")
const bcryp=require('becryptjs')
const jwt=require('jsonwebtoken')

async function registerUser(req,res){


  const {fullName,email,password}=req.body

  const isUserAlreadyExsists=await userModel.findOne({
    email
  })
  if(isUserAlreadyExsists){
    return res.status(400).json({
      message:"User already exsists"
    })
  }

  const hashedPassword= await bcrypt.hash(password,10);

  const user=await userModel.create({
    fullName,
    email,
    password:hashedPassword
  })

  const token=jwt.siqn({
    id:user._id,
  },"process.env.JWT_SECRET")

  req.cookie("token",token)

  res.status(201).json({
    message:"User registered successfully",
    data:{
      _id:user._id,
      fullName:user.fullName,
      email:user.email,
    }
  })
}

async function loginUser(req,res){
  const{email,password}=req.body

  const user=await userModel.findOne({
    email
  })
  if(!user){
    res.status(400).json({
      message:"Invalid email or password"
    })
  }
  const isPasswordValid=await bcrypt.compare(password,user.password)
  if(!isPasswordValid){
    res.status(400).json({
      message:"Invalid email or password"
    })

  }
  const token=jwt.sign({
    id:user._id,
  },"process.env.JWT_SECRET")
  res.cookie("token",token)

  res.status(200).json({
    message:"User logged in successfully",
    data:{
      _id:user._id,
      fullName:user.fullName,
      email:user.email,
    }
  })
}

module.exports={
  registerUser,
  loginUser
}

