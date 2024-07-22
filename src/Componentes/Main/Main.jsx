import './main.css'
import Navegador from "../Navegador/Nav";
import { useState } from 'react';

const Main = () => {
    const [contador, setContador] = useState(0)

    const subirCounter = () => {
        setContador(contador + 1)
    }
    const bajarCounter = () => {
        setContador(contador - 1)
    }

    return (
        <div className="main">
            <Navegador />
            <h1>Este es el main</h1>
            <div>
                <p>{contador} </p>
                <button onClick={subirCounter}>+</button>
                <button onClick={bajarCounter}>-</button>
            </div>
        </div>
    )
}
export default Main