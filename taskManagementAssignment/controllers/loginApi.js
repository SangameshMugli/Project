const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const {body,validationResult}=require("express-validator")
const connection=require("../mysql/mysql")
const handle=require("../controllers/errorHandler")

const JWT_SECRET="task_management_secret"

const validateLogin=[
    body('email').isEmail().withMessage("enter a valid email address"),
    body('password').notEmpty().withMessage("enter a valid password")
]

// console.log('Database query results:', results);

//         if (results.length === 0) {
//             console.log('No user found with that email.');
//             return res.status(401).send('Invalid email or password.');
//         }


const login = (req,res) =>{
    const{email,password}=req.body

    const errors=validationResult(req)
    if(!errors.isempty()){
        return res.status(400).json({errors:errors.array()})
    }

    console.log("database query results:",results);

    if(results.length===0)
}