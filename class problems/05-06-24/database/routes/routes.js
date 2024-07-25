const express=require("express")
const router=express.Router()
const connection=require("../mysql/mysql")
const error_handler = require("../controller/error_controller")
const register=require("../controller/registerController")
const login=require("../controller/loginController")
const jwt_verify=require("../controller/jwt_verify_controller")

router.get("/user",jwt_verify,function(req,res){
    jwt_decoded=res.locals
    console.log(jwt_decoded);
    const user_query="select * from users where user_id=?"
    connection.query(user_query,[jwt_decoded.user_id],function(error,results){
        if(error){
           error_handler(error,req,res,400)
        }else{  
            if(results.length){
                const response_body=results
                res.set({"content_type":"application/json"})
                res.statusCode=200
                res.send(response_body)
            }else{
                res.send({"message":"no users found"})
            }
        }
    })
   
})

router.get("/userinfo",function(req,res){
    const user_id=req.query.user_id
    const user_query="select * from users where user_id=?"
    connection.query(user_query,[user_id],function(error,results){
        if(error){
            error_handler(error,req,res,400)
        }else{
            if(results.length){
                const response_body=results
                res.set({"content_type":"application/json"})
                res.statusCode=200
                res.send(response_body)
            }else{
                res.send({"message":"no user found"})
            }
        }
    })
})


router.post("/register",register )

router.post("/login",login)






module.exports=router
