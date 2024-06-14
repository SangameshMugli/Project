const express=require("express")
const router=express.Router()
const connection=require("../mysql/mysql")
const error_handler = require("../controller/error_controller")

router.get("/",function(req,res){
    const user_query="select * from author"
    connection.query(user_query,function(error,results){
        if(error){
           error_handler(error,req,res,400)
        }else{
            if(results.length){
                const response_body=results
                res.set({"content_type":"application/json"})
                res.statusCode=200
                res.send(response_body)
            }else{
                res.send({"message":"no authors"})
            }
        }
    })
    // res.send("This is my first api request implementation")
})

router.get("/userinfo",function(req,res){
    const author_id=req.query.author_id
    const user_query="select * from author where author_id=?"
    connection.query(user_query,[author_id],function(error,results){
        if(error){
            error_handler(error,req,res,400)
        }else{
            if(results.length){
                const response_body=results
                res.set({"content_type":"application/json"})
                res.statusCode=200
                res.send(response_body)
            }else{
                res.send({"message":"no authors"})
            }
        }
    })
})







module.exports=router
