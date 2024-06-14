const express=require("express")

const error_handler=function(error,req,res,statusCode){
    res.statusCode=statusCode
    res.set({
        "content-type":"application/json"
    })

    if(statusCode===500){
        res.send({
            "message":""
        })

    }else if(statusCode===400){
        res.send({
            "message":error
        })
    }
    else{
        res.send({
            "message":"Internal server error"
        })
    }
}


module.exports=error_handler