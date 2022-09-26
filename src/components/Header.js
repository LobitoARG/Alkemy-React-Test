import { Link } from 'react-router-dom';
import swAlert from '@sweetalert/with-react';

function Header (){

    function logOut (){
        localStorage.clear()
        swAlert(<h2>Deslogeado</h2>)
    }

    let token = localStorage.getItem('token')
    return (
       <header className='mb-3'>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
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
        </nav>
       </header>
    )
}

export default Header;