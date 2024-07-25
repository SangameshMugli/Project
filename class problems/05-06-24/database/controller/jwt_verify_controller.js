const { response } = require("express")
const jwt=require("jsonwebtoken")
const dotenv=require("dotenv").config()


const jwt_verify=function(req,res,next){
    const jwt_token=req.headers["authorization"]
    if(!jwt_token){
        //handle the error
        res.statusCode=401
       const response={
            "message":"send the token re baba"
        }
        res.set({
            "content-type":"application/json"
        })
        res.send(response)
    }
    else{
        //verify the jwt token
        jwt.verify(jwt_token,process.env.JWT_SECRET,function(err,jwt_decoded){
            if(err){
                if(err.name="TokenExpiredError"){
                    res.statusCode=401
         const response={
            "message":" Token is invalid"
        }
        res.set({
            "content-type":"application/json"
        })
        res.send(response)

                }
            }else{
                res.locals=jwt_decoded
                next()
        }
        })
    }
}


module.exports=jwt_verify