const express = require("express");
const {connect} = require("./db");
const {userController} = require("./Routes/user.route");
const {profileController} =require("./Routes/profile.route")
const { authentication } = require("./middlewares/authentication");
const app=express();

app.use(express.json());

app.use("/user", userController)
app.use(authentication)
app.use("/profile",profileController)

app.get("/",(req,res)=>{
    res.send("its my api")
})

app.listen(5000, async()=>{
    try{
        await connect;
        console.log("connected to mongodb successfully")

    }
    catch(err){
        console.log(err)
    }
    console.log(`listening on port 5000`)


})