const express=require("express")
const router=express.Router()
const connection=require("../mysql/mysql")
const error_handler=require("../controller/error_controller")


router.get("/",function(req,res){
    const author_query="select * from author"
    connection.query(author_query,function(error,results){
        if(error){
           error_handler(error,req,res,500)

    }else{
        if(results.length>0){
            const response_body=results
            res.set({"content-type":"application/json"})
            res.statusCode=200
            res.send(response_body)

        }else{
            res.send({"message":"No authors found"}) 
        }

    }
})
    
})


router.get("/authorinfo",function(req,res){
    const author_id=req.query.author_id
    if(author_id){
    const author_query="select * from author where author_id=?"
    connection.query(author_query,[author_id],function(error,results){
        if(error){
          error_handler(error,req,res,500)

    }else{
        if(results.length>0){
            const response_body=results
            res.set({"content-type":"application/json"})
            res.statusCode=200
            res.send(response_body)

        }else{
            res.send({"message":"No authors found"}) 
        }

    }
})
}else{
    error_handler("user Id is missing",req,res,400)
} 
})




module.exports=router