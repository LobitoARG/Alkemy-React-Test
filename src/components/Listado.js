import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from "axios";
import swAlert from '@sweetalert/with-react';

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
        .catch(error=>{
            swAlert(<h2>Hubo un error, intentalo de nuevo</h2>)
        })
    },[setMoviesList])
    

    let token = sessionStorage.getItem('token')
    
    return (
        <div className='container'>
        {!token && <Navigate to="/" />}
        <div className='row'>
        {
            moviesList.map((oneMovie, index)=>{
                return(
                    
                    <div className='col-4' key={index}>
                    <div className="card my-4">
                    <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{oneMovie.title}</h5>
                        <p className="card-text">{oneMovie.overview.substring(0,100)}...</p>
                        <Link to={`/detalle?id=${oneMovie.id}`} className="btn btn-primary">Detalles</Link>
                    </div>
                    </div>  
                    </div>
                )
            })
        }
        </div>
        </div>
    )
}

export default Listado;