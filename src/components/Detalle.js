import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from "axios";

function Detalle(){
    const navigate = useNavigate();

    let query = new URLSearchParams(window.location.search)
    let movieID = query.get('id')

    const [detailMovie, setdetailMovie] = useState(null)
    

    useEffect(()=>{

        const endpoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=7352b6620f0970659cbeec1220f6a00e&language=es-ES`;
        axios.get(endpoint)
        .then(response=>{
            const movieDetail = response.data;
            setdetailMovie(movieDetail)
            //console.log(movieDetail)
        })
        .catch(error=>{
            console.log('error')
        })
    
    },[movieID])
    
    let token = sessionStorage.getItem('token')

    return (
        <>
        {!token && navigate('/')}
        {!detailMovie && <p>Cargando...</p>}
        <div className='container'>
        {detailMovie && 
                    <div className='col-4'>
                    <div className="card my-4">
                    <img src={`https://image.tmdb.org/t/p/w500/${detailMovie.poster_path}`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{detailMovie.title}</h5>
                        <p className="card-text">{detailMovie.overview}...</p>
                        <p className='card-text'>Estado de la pelicula: {detailMovie.status}</p>
                        <p className='card-text'>Rating promedio de la pelicula: {detailMovie.vote_average}</p>
                        <p className='card-text'>Fecha de estreno: {detailMovie.release_date}</p>

                    </div>
                    </div>  
                    </div>
        }
        </div>
        </>
    )
}

export default Detalle;