const express=require("express")
const app=express()
const dotenv=require('dotenv').config()
const routes=require("./routes/routes")

port=process.env.PORT

app.use("/api",routes)  //which is use to access the post body request


// listen will open the port and continuously listen to the incoming request 
app.listen(port,function(err){
    if(err){
        console.log("There is an error in starting the server");
    }
    console.log("server started at port "+port);
})