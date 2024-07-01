import { useState } from 'react';
import Users from "../../data"
import './users.css'
import Navegador from "../Navegador/Nav"

const VerUsers = () => {
    const [usersList, setUsersList] = useState(Users);

    // función para el botón eliminar
    const eliminar = (index) => {
        const updatedUsers = [...usersList];
        updatedUsers.splice(index, 1);
        setUsersList(updatedUsers);
    }

    return (
        <div className="users">
            <Navegador />
            <h2>Lista de Usuarios Registrados</h2>
            <div className="cards">
                {usersList.map((data, indice) => (
                    <div className="card" key={indice}>
                        <h4>{data.nombre}</h4>
                        <h4>{data.correo}</h4>
                        <h4>{data.edad}</h4>
                        <div>
                            <button className="btn" onClick={() => eliminar(indice)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VerUsers