import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from "axios";

function Listado (){
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() =>{
        const endpoint = 'https://api.themoviedb.org/3/discover/movie?api_key=7352b6620f0970659cbeec1220f6a00e&language=es-ES&page=1'
        axios.get(endpoint)
        .then(response =>{
            const apiDATA = response.data;
            const apiResult = apiDATA.results
            setMoviesList(apiResult)
        })
    },[setMoviesList])

    //console.log(moviesList)

    

    let token = localStorage.getItem('token')
    

    return (
        <>
        {!token && <Navigate to="/" />}
        <div className='row'>
        {
            moviesList.map((oneMovie, index)=>{
                return(
                    
                    <div className='col-3 mb-4' key={index}>
                    <div className="card">
                    <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{oneMovie.title}</h5>
                        <p className="card-text">{oneMovie.overview}</p>
                        <Link to={'/'} className="btn btn-primary">Detalles</Link>
                    </div>
                    </div>  
                    </div>
                )
            })
        }
        </div>
        </>
    )
}

export default Listado;