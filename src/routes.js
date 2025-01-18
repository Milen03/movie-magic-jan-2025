import { Router } from 'express'
import homeCotroller from './controllers/home-controller.js'

const routes = Router()

routes.use(homeCotroller)

routes.get('*',(req,res)=>{
    res.render('404')
})

export default routes
