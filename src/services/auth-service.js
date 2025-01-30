import User from "../models/User.js";
import bcrypt from 'bcrypt'
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

        //return token 
        return
    }
}