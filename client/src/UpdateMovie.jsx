import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
import backgroundImage from "./Image/pexels-cottonbro-4722577.jpg";


function UpdateMovie () {
    const {id} = useParams()
    const[movie, setMovie] = useState()
    const[rating, setRating] = useState()
    const[showtime, setShowtime] = useState()
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get('http://localhost:3001/getMovie/' +id)
        .then(result => {console.log(result) 
        setMovie(result.data.movie)
        setRating(result.data.rating)
        setShowtime(result.data.showtime)
        })

        .catch(err => console.log(err))
    }, [])

const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/updateMovie/" +id, {movie, rating, showtime})
    .then(result => {
        console.log(result)
        navigate('/')
    })
    .catch(err => console.log(err))
}

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Update}>
                    <h2>Update Movie</h2>
                    <div className="mb-2">
                        <label htmlFor="">Movie</label>
                        <input type="text" placeholder="Enter Movie" className="form-control"
                        onChange={(e) => setMovie(e.target.value)} value={movie}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Rating</label>
                        <input type="text" placeholder="Enter Rating" className="form-control"
                        onChange={(e) => setRating(e.target.value)} value={rating}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Showtime</label>
                        <input type="text" placeholder="Enter Showtime" className="form-control"
                        onChange={(e) => setShowtime(e.target.value)} value={showtime}/>
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateMovie
    ;