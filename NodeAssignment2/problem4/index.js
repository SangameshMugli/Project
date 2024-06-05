// 4. Create a NodeJS project, create .env file and start a server using express 
const express=require("express")
const app=express()
const dotenv=require('dotenv').config()

port=process.env.PORT//we can access dotenv file by the command process.env.variable name

app.listen(port,function(err){ 
    // listen will open the port and continuously listening to the incoming request 
    //listen will accept the port number as first argument and next argument as callback function
    if(err){
        console.log("there is an error in starting the server");
    }
    console.log("server is running at port" + port);
})