import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

function Buscador(){
    const navigate = useNavigate();

    const submitHandler = e =>{
        e.preventDefault();
        
        const keyword = e.currentTarget.keyword.value.trim();

        if(keyword.length === 0){
            swAlert(<h2>Tienes que escribir una palabra clave</h2>)
        }
        else if(keyword.length < 4){
            swAlert(<h2>Tienes que escribir una palabra clave mayor a 4 caracteres</h2>)
        }
        else{
            e.currentTarget.keyword.value = '';
            navigate(`/resultados?key=${keyword}`)
            
        }
    }
    return(
        
        <form className="d-flex align-items-center" onSubmit={submitHandler}>    
            <label className="form-label mb-0 mx-2">
            <input type="text" name="keyword" className="form-control" placeholder="Buscar..." required></input>
            </label>
            <button type="submit" className="btn btn-success">Buscador</button>
        </form>
        
    )
}


export default Buscador