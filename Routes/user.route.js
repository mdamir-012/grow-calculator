const express =require("express");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
const { userModel } = require("../models/user.model");
require("dotenv").config();


const userController=express.Router();

// used this route for register
userController.post("/signup", (req,res)=>{
    const {name,email,password}=req.body;
    bcrypt.hash(password, 8, async(err,hash)=>{
        if(err){
            res.json({message:"something went wrong"});
        }
        const myuser = new userModel({
            name:name,
            email:email,
            password:hash
        })
        try{
            await myuser.save()
            res.json({msg:"Signup Successfully"})
        }
        catch(err){
            console.log(err)
            res.json({msg:"something went wrong"})
        }

    })
})

// used this route for register
userController.post("/login",async(req,res)=>{
    const {email,password} =req.body;
    const user = await userModel.findOne({email})
    const hash = user.password;
    bcrypt.compare(password, hash, function(err,result){
        if(err){
            res.json({message:"something went wrong,please try again"})
        }
        if(result){
            const token = jwt.sign({userId: user._id}, process.env.SECRET_CODE);
            res.json({message:"Login Successfull",token})
        }else{
            res.json({msg:"Invalid credentials"})
        }
    })
})


module.exports = {userController}
