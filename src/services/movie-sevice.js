
import Movie from "../models/Movie.js";


export default {
    getAll(filter = {}) {
        let query = Movie.find({});

        if (filter.search) {
            query = query.where({ title: filter.search })
        }

        if (filter.genre) {
            query = query.where({ genre: filter.genre })
        }

        if (filter.year) {
            query = query.where({ year: Number(filter.year) })
        }

        return query
    },
    getOne(movieId) {
        const result = Movie.findById(movieId)

        return result
    },
    getOneWithCasts(movieId) {
        return this.getOne(movieId).populate('casts')
    },
    create(movieData, creatorId) {
        const result = Movie.create({
            ...movieData,
            rating: Number(movieData.rating),
            year: Number(movieData.year),
            creator: creatorId,
        });

        return result;
    },
    async attachCast(movieId, castId) {
        // const movie = await Movie.findById(movieId)
        // movie.casts.push(castId)

        // await movie.save()

        // return movie

        //Attach #2

        return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });

    },
    delete(movieId) {
        return Movie.findByIdAndDelete(movieId)
    },
    updata(movieId,movieData){
        return Movie.findByIdAndUpdate(movieId,movieData)
    }
}
