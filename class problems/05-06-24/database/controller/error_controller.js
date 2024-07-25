const express=require("express")

const error_handler=function(error,req,res,statusCode){
    res.statusCode=statusCode
    res.set({
        "content_type":"application/json"
    })
    if(statusCode===400){
        res.send({
            "message":error
        })
    }else if(statusCode===500){
      res.send({
        "message":"Bad API request"
      })  
    }
    else{
        res.send({
            "message":"Internal server Error"
        })
    }
}

module.exports=error_handler