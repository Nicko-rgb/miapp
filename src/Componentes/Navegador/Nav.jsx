import './Nav.css'

import { Link } from 'react-router-dom'

const Navegador = () => {
    return (
        <div className="navegador">
            <nav>
                <Link to='/' className='link'>Home</Link>
                <Link to='/dog' className='link'>Dog</Link>
                <Link to='/register' className='link'>Registro</Link>
                <Link to='/users' className='link'>Users</Link>
                <Link to='/dataa' className='link'>DATA</Link>
                <Link to='/formmongo' className='link'>FORM MONGO</Link>
            </nav>
        </div>
    )
}
export default Navegador