const mongoose =require("mongoose");

const profileSchema= mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    timeStamp:{type:String,requirde:true},
    amount: {type:String,required:true}

})

const profileModel= mongoose.model("profiledata",profileSchema)

module.exports = {profileModel};

