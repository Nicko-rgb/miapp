import './Nav.css'
import { Link } from 'react-router-dom'
const Navegador = () => {
    return (
        <div className="navegador">
            <Link to='/' className= 'link'>Home</Link>
            <Link to='/dog' className= 'link'>Dog</Link>
            <Link to='' className= 'link'>Home</Link>
            <Link to='' className= 'link'>Home</Link>
            <Link to='' className= 'link'>Home</Link>
        </div>
    )
}
export default Navegador