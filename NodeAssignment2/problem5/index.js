//5. Send the response to client using different methods of responding like res.json and res.send.

const express=require("express")
const app=express()
const dotenv=require('dotenv').config()

const port=process.env.PORT

app.get("/api" ,function(req,res){
    console.log("This is my first API");
    res.send("This is my first API request implemented")
})

app.get("/api1" ,function(req,res){
    console.log("This is my first API");
    res.json({
        "message":"This is my first API request implemented"})
})

app.get("/api2" ,function(req,res){
    res.statusCode=400
    res.set({  // setting the new headers 
        "Content-Type":"Application/JSON",
        "KGF":"Yash"
    })
    res.send({
        "message":"This is an error in starting the server"})
})


// listen will open the port and continuously listen to the incoming request 
app.listen(port, function(err){
    if(err){
        console.log("there is an error in starting the server");
    }
    console.log("Server is running at port "+port); 
})
