import express from 'express'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

import routes from './routes.js'
import showRating from './helpers/reting-helper.js'
import { authMiddlewares } from './middlewares/auth-middlewares.js'

const app = express()

//db configuration
try{
    const uri = 'mongodb://localhost:27017/magic-movies-jan2025'
await mongoose.connect(uri)
console.log('DB is connected');
}catch(err){
 console.log('Cannot connect to DB');
console.error(err.meffage);

}

//handlebars configoration
app.engine('hbs',handlebars.engine({
    extname: 'hbs',
    runtimeOptions:{
 allowProtoPropertiesByDefault: true,
    },
    helpers:{
        showRating
    }
}))
app.set('view engine','hbs')
app.set('views','./src/views')

//express configuration
app.use('/static',express.static('src/public'))
app.use(express.urlencoded({extended: false}))  //learn express to parse form data 
app.use(cookieParser())
app.use(authMiddlewares)

//setup routs
app.use(routes)

//start server
app.listen(5000,() => console.log('Server is listening on http://localhost:5000...'))