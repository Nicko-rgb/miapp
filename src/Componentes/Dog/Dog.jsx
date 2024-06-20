import './dog.css'
import { useState, useEffect } from "react"
import Navegador from '../Navegador/Nav'

const Dog = () => {
    const [dog, setDog] = useState([]);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch("https://api.thedogapi.com/v1/breeds");
                const data = await response.json();
                setDog(data);
            } catch (error) {
                console.log("Error:", error);
            }
        };

        fetchCharacter();
    }, []);

    return (
        <div className="dog">
            <Navegador />
            <h1 id="texto">Lista de Perros</h1>
            <div className="cards">
                {dog.map((dog, index) => (
                    <div key={index} className="card">
                        <h2>{dog.name}</h2>
                        <p>{dog.origin}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Dog