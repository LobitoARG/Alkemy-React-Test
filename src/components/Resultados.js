import axios from 'axios';
import {useEffect, useState} from 'react';
import { Navigate, Link } from 'react-router-dom';
import swAlert from '@sweetalert/with-react';

function Resultados(){

    let query = new URLSearchParams(window.location.search)
    let keyword = query.get('key')

    const [movie, setMovieResults] = useState([]);

    useEffect(()=>{

        const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=7352b6620f0970659cbeec1220f6a00e&language=es-ES&query=${keyword}`
        axios.get(endpoint)
        .then(response =>{
            const moviesData = response.data.results;
            if(moviesData.length===0){
                swAlert(<h5>No se encontraron resultados</h5>)
            }
            setMovieResults(moviesData)
            console.log(moviesData)
        })
        .catch(error =>{
            console.log(error)
        })

    },[keyword])

    let token = sessionStorage.getItem('token')


    return (
        <div className='container'>
        {!token && <Navigate to="/" />}
        <h2>Buscaste: {keyword}</h2>
        {movie.length===0 && <h5>No se encontraron resultados</h5>}
        <div className='row'>
        {
            movie.map((oneMovie, index)=>{
                return(
                    
                    <div className='col-4' key={index}>
                    <div className="card my-4">
                    <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{oneMovie.title}</h5>
                        
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

export default Resultados;