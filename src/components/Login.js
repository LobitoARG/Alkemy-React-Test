import axios from "axios";
import swAlert from '@sweetalert/with-react';
import { useNavigate, Navigate } from 'react-router-dom';

function Login(){
   

    const navigate = useNavigate();

    const submitHandler = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(email==='' || password===''){
            swAlert(<h2>Los campos deben estar completos</h2>)
            return
        }

        if (email !== '' && !regexEmail.test(email)){
            swAlert(<h2>Debes ingresar un email valido</h2>)
            return 
        }
        if (email !=='challenge@alkemy.org' || password !=='react'){
            swAlert(<h2>Credenciales invalidas</h2>)
            return
        }

        console.log('Ok, estamos listos')
        axios
        .post('http://challenge-react.alkemy.org', {email, password})
        .then(res=>{
            swAlert(<h2>Perfecto, ingresaste correctamente!</h2>)
            const tokenRecibido = res.data.token;
           sessionStorage.setItem('token', tokenRecibido);
            navigate('/listado')
        })
    }
    let token = sessionStorage.getItem('token')

    return (
        <div className="container">
        {token && <Navigate to="/listado" />}
        

        
        <div className="row">
            <div className="col-6 offset-3">
            <h2>Log in Alkemy</h2>
            <form onSubmit={submitHandler}>
                    <label className="form-label d-block mt-2">
                    <span>E-mail</span>
                    <input type="text" name="email" className="form-control"></input>
                    </label>
                    
                    
                    <label className="form-label d-block mt-2">
                    <span>Password</span>
                    <input type="password" name="password" className="form-control"></input>
                    </label>

                    <button type="submit" className="btn btn-primary mb-3 mt-2">Ingresar</button>
            </form>
            </div>
        </div>
        </div>
    )

}

export default Login;