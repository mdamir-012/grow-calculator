const {Router} =require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { profileModel } = require("../models/profile.model");

const profileController = Router();

profileController.get("/read", async(req,res)=>{
    const profile = await profileModel.find({email: req.body.email});
    res.send(profile)
})


profileController.post("/create", async(req,res)=>{
    const {name,email,timeStamp,amount,userId} =req.body;

    const profile= new profileModel({
        name,
        email,timeStamp,amount,userId
    });

    try{
        await profile.save();
        res.json({msg:"profile created"})
    }
    catch(err){
        console.log(err)
        res.json({msg:"something went wrong"})
    }
})
module.exports = {profileController}