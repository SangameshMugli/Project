const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const dotenv=require("dotenv").config()
const routes=require("./router/router")

const port=process.env.PORT

app.use(bodyParser.json());

app.use(express.json());

app.use("/api", routes )

app.listen(port,function(err){
    if(err){
        console.log("There is an error in starting the server")
    }
    console.log(`Server up and running at port ${port}`);
})