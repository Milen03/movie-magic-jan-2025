import { Router } from "express";

const authController = Router()

authController.get('/register',(req,res)=>{
    res.render('auth/register')
})

authController.post('/register',async (req,res)=>{
const newData = req.body

console.log(newData);

res.end()

})

export default authController