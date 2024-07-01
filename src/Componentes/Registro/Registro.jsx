import { useState } from 'react';
import Navegador from "../Navegador/Nav"
import './registro.css'
import Users from "../../data"

const Registro = () => {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [edad, setEdad] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            nombre,
            correo,
            edad
        }
        if(nombre === "" || correo === "" || edad === ""){
            alert("Completa los campos")
        }
        else{
            Users.push(newUser);
            alert("Registro Exitoso")
        }
    }

    return (
        <div className="registro">
            <Navegador />
            <div className="subRegistro">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre</label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div>
                        <label>Correo</label>
                        <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    </div>
                    <div>
                        <label>Edad</label>
                        <input type="text" value={edad} onChange={(e) => setEdad(e.target.value)} />
                    </div>
                    <input type="submit" />
                </form>
            </div>

        </div>
    )
}

export default Registro