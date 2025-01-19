import { Router } from "express";

import movies from "../movies.js";

import movieSevice from "../services/movie-sevice.js";

const router = Router()

router.get('/',(req,res) =>{
    const movies = movieSevice.getAll();
    
    res.render('home' ,{ movies })
})

router.get('/about',(req,res)=>{
    res.render('about')
})


export default router