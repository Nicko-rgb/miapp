import React from 'react';
import './navegador.css';
import logo from '../IMG/logo.png';
import { IoHome } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import { LuPencilLine } from "react-icons/lu";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navegador = () => {
    const location = useLocation();
    const navigate = useNavigate();

    //crear funcion para recargar pagina
    const recargarPagina = () => {
        navigate('/')
        window.location.reload();
    }

    return (
        <div className='navegador'>
            <Link onClick={recargarPagina}  className='logoimg'>
                <img src={logo} alt="Logo" />
                <div className="blanco"></div>
            </Link>
            <nav className='menu'>
                <Link to='/' className={`link-nav ${location.pathname === '/' ? 'active' : ''}`}>
                    <IoHome className='ico ico1' />Home
                </Link>
                <Link to='/studentform' className={`link-nav ${location.pathname === '/studentform' ? 'active' : ''}`}>
                    <LuPencilLine className='ico ico2' />Student Form
                </Link>
                <Link to='/studentlist' className={`link-nav ${location.pathname === '/studentlist' ? 'active' : ''}`}>
                    <GrContactInfo className='ico ico3' />Student List
                </Link>
            </nav>
        </div>
    );
}

export default Navegador;