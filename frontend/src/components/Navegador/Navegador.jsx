import React from 'react';
import './navegador.css';
import logo from '../IMG/logo.png';
import { IoHome } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import { LuPencilLine } from "react-icons/lu";
import {Link} from 'react-router-dom'

const Navegador = () => {
    return (
        <div className='navegador'>
            <div className='logoimg'>
                <img src={logo} alt="Logo" />
            </div>
            <nav className='menu'>
                <Link to='/' className='link-nav'>
                    <IoHome className='ico' />Inicio
                </Link>
                <Link to='/studentform' className='link-nav'>
                    <LuPencilLine className='ico' />Student Form
                </Link>
                <Link to='/studentlist' className='link-nav'>
                    <GrContactInfo className='ico' />Student List
                </Link>
            </nav>
        </div>
    );
}

export default Navegador;