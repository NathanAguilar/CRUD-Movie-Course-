import axios from "axios"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./Image/pexels-cottonbro-4722577.jpg";

function Movies () {
    const [ Movies, setMovies ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3001')
        .then(result => setMovies(result.data))
        .catch(err => console.log(err))
    }, [])

const handleDelete =(id) => {
    axios.delete('http://localhost:3001/deleteMovie/' +id)
    .then(res => {console.log(res)
    window.location.reload()})
    .catch(err => console.log(err))
}

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center flex-column" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <h2 className="text-white mb-4">Movie Database</h2>
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className="btn btn-success">Add +</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Movies</th>
                            <th>Rating</th>
                            <th>Showtime</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Movies.map((movie) => {
                                return <tr>
                                    <td>{movie.movie}</td>
                                    <td>{movie.rating}</td>
                                    <td>{movie.showtime}</td>
                                    <td>
                                    <Link to={`/update/${movie._id}`} className="btn btn-success">Update</Link>
                                        <button className="btn btn-danger"
                                        onClick={(e) => handleDelete(movie._id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Movies;