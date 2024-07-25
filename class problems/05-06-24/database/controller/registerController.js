const express=require("express")
const connection=require("../mysql/mysql")
const error_handler=require("../controller/error_controller")

const register=function(req,res){
    const email=req.body.email 
    const user_exist_query="select * from users where email=?"
    connection.query(user_exist_query,[email],function(err,results){
        if(err){
            res.send(err)
            error_handler(err,req,res,500)
        }
        if(results.length>0){
            console.log(results);
            // res.send(err)
            error_handler("user already exist go and login",req,res,400)
        }else{
            const register_query="INSERT into users SET user_name=?,email=?,password=?"
            const user_details=req.body
            connection.query(register_query,[user_details.user_name,user_details.email,user_details.password, ],function(err1,results1){
                if(err1){
                   res.send(err1)
                // error_handler(err1,req,res,400)
                }else{
                    res.set({
                        "content-Type":"application/json"
                    })
                    res.statusCode=201
                    response_body={
                        "message":"user is created .Go and login and enjoy"
                    }
                    res.send(response_body)
                }
            })

        }
    })
}


module.exports=register