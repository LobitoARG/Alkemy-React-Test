import { Link } from 'react-router-dom';
import swAlert from '@sweetalert/with-react';

import Buscador from './Buscador';

function Header (){

    function logOut (){
        sessionStorage.clear()
        swAlert(<h2>Deslogeado</h2>)
    }

    let token = sessionStorage.getItem('token')
    
    return (
       <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link to={'/'} className='nav-link active'> Home </Link>
                </li>
                <li className='nav-item'>
                    <Link to={'/listado'} className='nav-link active'>Listado </Link>
                </li>
                {token ? <li className='nav-item'>
                    <button className='btn btn-primary' onClick={logOut}> Log out</button>
                </li> : <li className='display-none'></li>
                }
            </ul>
            </div>
            <Buscador/>
        </nav>
       </header>
    )
}

export default Header;