const express=require("express")
const router=express.Router()

const {register,validateRegister}=require("../controllers/registerApi")

router.post('/register', validateRegister, register);


router.get('/test',(req,res)=>{
    res.send("API is working")
})



module.exports=router



