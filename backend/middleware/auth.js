const jwt=require("jsonwebtoken");
const User=require("../models/user");

const authenticate=async (req,res,next)=>{
    try{
        const autHeader = req.headers['authorization'];
        const token=autHeader && autHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ 
                error: "Access denied. No token provided." 
            });
        }

        const decode=jwt.verify(token,process.env.JWT_SECRET);
        console.log("worked baby");
        
       next();

    }
    catch{
        console.log("wrong babe");
        res.send("unable to verify, jwt token wrong");
    }

};
module.exports=authenticate;