const jwt=require("jsonwebtoken");
require("dotenv").config();

const authentication = (req,res,next)=>{
    if(!req.headers.authorization){
        return res.status(401).json({status:"please login again"});

    }
    const token =req.headers.authorization.split(" ")[1]
    jwt.verify(token, process.env.SECRET_CODE ,function(err,decoded){
        if(err){
            res.json({msg:"please login"})
        }else{
            req.body.userId=decoded.userId
            next()
        }
    })
}

module.exports={authentication}