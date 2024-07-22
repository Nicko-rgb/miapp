// src/Formulario.js
import React, { useState } from 'react';
import Navegador from '../Navegador/Nav';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const usuario = { nombre, apellido, correo };
        
        try {
            const response = await fetch('/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario),
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                setNombre('');
                setApellido('');
                setCorreo('');
            } else {
                throw new Error('Error al guardar el usuario');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <Navegador />
            <form onSubmit={handleSubmit} style={{marginTop: "80px"}}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Apellido:</label>
                    <input
                        type="text"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Correo:</label>
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Formulario;