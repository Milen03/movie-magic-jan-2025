import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET = '658b$10$J9bbTQqIp.22ZJdJ6fsxNezcR3FAjHKitD0hqZ7NdeCcWooI/E7IwS'

export default {
    register(userData) {
        return User.create(userData)

    },
    async login(email, password) {

        //Check user exists
 const user =await User.findOne({ email })
 if(!user){
    throw new Error('Invalid email')
 }

        //Check password is correct
const isValid = await bcrypt.compare(password,user.password)
if(!isValid){
    throw new Error('Invalid password!!')
}
        //Generate Token 
        const payload = {
            id: user._id,
            email: user.email
        }
const token = jwt.sign(payload,SECRET , {expiresIn: '2h'})
        //return token 
        return token 
    }
}