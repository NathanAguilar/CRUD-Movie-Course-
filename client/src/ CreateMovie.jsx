import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateMovie () {
    const[movie, setMovie] = useState()
    const[rating, setRating] = useState()
    const[showtime, setShowtime] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createMovie", {movie, rating, showtime})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Add Movie</h2>
                    <div className="mb-2">
                        <label htmlFor="">Movie</label>
                        <input type="text" placeholder="Enter Movie" className="form-control"
                        onChange={(e) => setMovie(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Rating</label>
                        <input type="text" placeholder="Enter Rating" className="form-control"
                        onChange={(e) => setRating(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Showtime</label>
                        <input type="text" placeholder="Enter Showtime" className="form-control"
                        onChange={(e) => setShowtime(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateMovie;