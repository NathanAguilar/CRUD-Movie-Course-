const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    movie: String,
    rating: String,
    showtime: String
})

const MovieModel = mongoose.model("movies", MovieSchema)
module.exports = MovieModel
