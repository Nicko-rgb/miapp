import './Nav.css'
import { Link } from 'react-router-dom'
const Navegador = () => {
    return (
        <div className="navegador">
            <nav><Link to='/' className='link'>Home</Link>
                <Link to='/dog' className='link'>Dog</Link>
                <Link to='' className='link'>Home</Link>
                <Link to='' className='link'>Home</Link>
                <Link to='' className='link'>Home</Link>
            </nav>
        </div>
    )
}
export default Navegador