import './dog.css';
import { useState, useEffect } from "react";
import Navegador from '../Navegador/Nav';

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
                {dog.filter((data) => data.name.toLowerCase().includes("australian")).map((data) => (
                    <div className="card">
                        <h3>{data.name}</h3>
                        <p>{data.country_code}</p>
                        <p>{data.bred_for}</p>
                        <p>{data.breed_grou} </p>
                        <p>{data.life_span} </p>
                        <p>{data.temperament} </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dog;