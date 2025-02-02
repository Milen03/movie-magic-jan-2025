import { Router } from "express";

import movieSevice from "../services/movie-sevice.js";

const router = Router()

router.get('/', async (req,res) =>{
    const movies = await movieSevice.getAll();
    
    res.render('home' ,{ movies })
})

router.get('/about',(req,res)=>{
    res.render('about', { pageTitle: 'About'})
})


export default router