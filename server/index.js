const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MovieModel = require('./models/Movies')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.get('/', (req, res) => {
    MovieModel.find({})
    .then(movies => res.json(movies))
    .catch(err => res.json(err))
})

app.get('/getMovie/:id', (req, res) => {
    const id = req.params.id;
    MovieModel.findById({_id:id})
    .then(movies => res.json(movies))
    .catch(err => res.json(err))
})

app.put('/updateMovie/:id', (req, res) => {
    const id = req.params.id;
    MovieModel.findByIdAndUpdate({_id:id}, {
        movie:req.body.movie,
        rating:req.body.rating,
        showtime:req.body.showtime})
    .then(movies => res.json(movies))
    .catch(err => res.json(err))
})

app.delete('/deleteMovie/:id', (req, res) => {
    const id = req.params.id;
    MovieModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.post("/createMovie", (req, res) => {
    MovieModel.create(req.body)
    .then(movies => res.json(movies))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is Running")
})