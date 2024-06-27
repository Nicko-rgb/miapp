import Users from "../../data"
import './users.css'
import Navegador from "../Navegador/Nav"


const VerUsers = () => {
    return (
        <div className="users">
            <Navegador />
            <h2>Lista de Usuarios Registrados</h2>
            <div className="cards">
                {Users.map(data => (
                    <div className="card">
                        <h4>{data.nombre} </h4>
                        <h4>{data.correo} </h4>
                        <h4>{data.edad} </h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VerUsers