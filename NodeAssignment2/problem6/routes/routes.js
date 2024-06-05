const express=require("express")
const router=express.Router()


router.get("/:id/:username",function(req,res){
    console.log(req.params);
    res.send("This is my first API request implementation")
})

router.get("/userinfo",function(req,res){
    console.log(req.query["user_id"]);
    res.json({
        "message":"This is my first userinfo API request implementation"})
})

router.post("/userinfo",function(req,res){
    console.log(req.body);
    res.send("This is my first POST userinfo API request implementation")
})

router.put("/userinfo",function(req,res){
    res.send("This is my first PUT userinfo API request implementation")
})

router.delete("/userinfo",function(req,res){
    res.send("This is my first DELETE userinfo API request implementation")
})


module.exports=router