const express=require("express")
const connection=require("../mysql/mysql")
const error_handler=require("../controller/error_controller")
const jwt=require("jsonwebtoken")
const dotenv=require("dotenv").config()

const login =function(req,res){
    const email=req.body.email
    const password=req.body.password
    const jwt=require("jsonwebtoken")

    const user_query="select * from users where email=? and password=?"
    connection.query(user_query,[email,password],function(err,results){
        if(err){
            error_handler(err,req,res,400)
        }
        if(results.length>0){
            console.log(results[0]);
            res.statusCode=200
            res.set({
                "content-type":"application/json"
            })
// create a session value or a jwt
            const payload ={
                "email":results[0].email,
                "user_id":results[0].user_id

            }

           jwt_token= jwt.sign(payload,process.env.JWT_SECRET,{expiresIn :60 * 60})
           res.cookie("user_token",jwt_token,{
            maxAge:3600,
            httpOnly:true,
            domain:"localhost",
            sameSite:"lax"
           })

            response={
                "message":"login successful",
                "user_token":jwt_token
            }
            res.send(response)

        }else{
            error_handler("Email Address/password is incorrect",req,res,400)
        }
    })
}








module.exports=login
