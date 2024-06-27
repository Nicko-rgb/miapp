import './Nav.css'

import { Link } from 'react-router-dom'

const Navegador = () => {
    return (
        <div className="navegador">
            <nav>
                <Link to='/' className='link'>Home</Link>
                <Link to='/dog' className='link'>Dog</Link>
                <Link to='/formulario' className='link'>Registro</Link>
                <Link to='/users' className='link'>Users</Link>
            </nav>
        </div>
    )
}
export default Navegador