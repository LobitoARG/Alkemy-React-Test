import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Listado (){

    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('token')
        //console.log(token)
        if(token === null){
            navigate('/')
        }
    }, [])

    return (
        <>
        <h1>Soy el listado</h1>
        </>
    )
}

export default Listado;