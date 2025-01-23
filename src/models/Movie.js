import { Schema,model } from 'mongoose'

// Create Schema
const movieSchema = new Schema({
    title: String,
    category: String,
    genre: String,
    director: String,
    year: Number,
    imageUrl: String,
    rating:Number,
    description: String
})

//Crete model

const Movie = model('Movie',movieSchema)

//Export model
export default Movie