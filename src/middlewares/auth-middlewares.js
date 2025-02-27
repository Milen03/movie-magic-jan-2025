import jwt from 'jsonwebtoken'

const SECRET = '658b$10$J9bbTQqIp.22ZJdJ6fsxNezcR3FAjHKitD0hqZ7NdeCcWooI/E7IwS'
export const authMiddlewares = (req, res, next) => {
    //get token 
    const token = req.cookies['auth']
    if (!token) {
        return next()
    }
    //validata token
    try {
        const decodedToken = jwt.verify(token, SECRET)
        //Attach decoded token to request

        req.user = decodedToken
        res.locals.user = decodedToken

        next()
    } catch (err) {
        res.clearCookie('auth')
        res.redirect('auth/login')
    }

}
export const isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/auth/login');
    } 

    next();
}