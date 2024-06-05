// 6. Create GET and POST APIs using Router module in Express

const express=require("express")
const app=express()
const dotenv=require('dotenv').config()
const routes=require("./routes/routes")

app.use(express.json())//which is use to access the post body request

port=process.env.PORT

app.use("/api",routes)

app.listen(port,function(err){
    if(err){
        console.log("there is an error while starting the server");
    }
    console.log("server started a port "+port);
})