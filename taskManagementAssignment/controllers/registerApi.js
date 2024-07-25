const bcrypt=require("bcryptjs")
const { body, validationResult } = require('express-validator');
const connection = require("../mysql/mysql.js")
const handleError = require("../controllers/errorHandler.js")

const validateRegister=[
    // body('user_id').notEmpty().withMessage("userId cannot be empty"),
    body('user_name').notEmpty().withMessage("user name is required"),
    body('email').isEmail().withMessage("please provide a valid email address"),
    body('password').isLength({min:8}).withMessage("password must have atleast 8 characters")
]

const register=async (req,res) => {
    const email=req.body.email 
    const user_exist_query="select * from users where email=?"
    connection.query(user_exist_query,[email],function(err,results)
    {
        if(err){
            res.send(err)
            error_handler(err,req,res,500)
        }
        if(results.length>0){
            console.log(results);
            // res.send(err)
            error_handler("user already exist go and login",req,res,400)
        })
    
        else{

        
    const {user_id,user_name,email,password}=req.body
    

    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    try{
        const hashedPassword=await bcrypt.hash(password,10)
        const registerQuery="insert into users(user_name,email,password) values(?,?,?)"
        connection.query(registerQuery,[user_name,email,hashedPassword],(err,results) =>{
            if(err){
                return handleError(err,res)
            }
            else{
                res.status(201).send("User registered successfully!!! go and login")
            }
        })
    }catch(err){
        handleError(err,res)
    }
        
}
}
    
module.exports={register,validateRegister}