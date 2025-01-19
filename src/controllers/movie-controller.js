import { Router } from "express";
import movieSevice from "../services/movie-sevice.js";

const movieController = Router()

movieController.get('/create', (req, res) => {
    res.render('create',)
})

movieController.post('/create', (req, res) => {
    const newMovie = req.body

    movieSevice.create(newMovie)

    res.redirect('/')
})

movieController.get('/:movieId/details', (req, res) => {
    const movieId = req.params.movieId
    //Get movie data for movieId
    const movie = movieSevice.findMovie(movieId)

    res.render('details', { movie })
})

export default movieController