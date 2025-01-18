import { Router } from 'express'
import homeCotroller from './controllers/home-controller.js'
import movieController from './controllers/movie-controller.js'

const routes = Router()

routes.use(homeCotroller)

routes.use('/movies' ,movieController)

routes.get('*',(req,res)=>{
    res.render('404')
})

export default routes
