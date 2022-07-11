import axios from "axios";
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

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
            localStorage.setItem('token', tokenRecibido);
            navigate('/listado')
        })
    }

    return (
        <div className="content-login">
            <h3>Log in Alkemy</h3>
            <div className="container-form-login">
                <form onSubmit={submitHandler}>
                    <label>
                    <span>E Mail</span>
                    <br/>
                    <input type="text" name="email"></input>
                    </label>
                    
                    <br/>
                    <label>
                    <span>Password</span>
                    <br/>
                    <input type="password" name="password"></input>
                    </label>
                    <br/>
                    <button type="submit">Ingresar</button>
                </form>
            </div>
        </div>
    )

}

export default Login;