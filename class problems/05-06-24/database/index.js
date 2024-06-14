const express=require("express")
const app=express()
const dotenv=require('dotenv').config()
const routes=require("./routes/routes")

app.use(express.json())

port=process.env.PORT

console.log(process.env.MYSQL_HOST);

app.use("/api",routes)

app.listen(port,function(err){
    if(err){
        console.log("There is an error in starting the server");
    }
    console.log("Server started at port "+port);
})

