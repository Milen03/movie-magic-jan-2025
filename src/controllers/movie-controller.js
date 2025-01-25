import { Router } from "express";
import movieSevice from "../services/movie-sevice.js";
import castService from "../services/cast-service.js";

const movieController = Router()

movieController.get('/search', async (req, res) => {
    const filter = req.query
    const movies = await movieSevice.getAll(filter)
    res.render('search', { movies, filter })
})

movieController.get('/create', (req, res) => {
    res.render('create',)
})

movieController.post('/create', async (req, res) => {
    const newMovie = req.body

    await movieSevice.create(newMovie)

    res.redirect('/')
})

movieController.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId
    //Get movie data for movieId
    const movie = await movieSevice.getOneWithCasts(movieId)
    

    // const cast = await castService.getAll(movie.casts)

        res.render('movie/details', { movie })
})

movieController.get('/:movieId/attach-cast', async (req, res) => {
    const movieId = req.params.movieId
    const movie = await movieSevice.getOne(movieId)
    const casts = await castService.getAll()


    res.render('movie/attach-cast', { movie, casts })
})

movieController.post('/:movieId/attach-cast', async (req, res) => {
    const castId = req.body.cast
    const movieId = req.params.movieId
    await movieSevice.attachCast(movieId, castId)

    res.redirect(`/movies/${movieId}/details`)
})

export default movieController