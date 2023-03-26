import { Container } from "react-bootstrap"
import { useState } from 'react';
import '../App.css'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import PokemonImagen from "../components/PokemonImagen";
import PokemonStats from "../components/PokemonStats";

const Resultado = () => {
    const { id } = useParams();
    const endpoint = 'https://pokeapi.co/api/v2/pokemon/' + id;
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const consultarinfo = async () => {
            const response = await fetch(endpoint)
            await response.json().then((data) => {
                setPokemon(data);
                console.log(data)
            })
        }
        consultarinfo()
    }, []);
    return (
        <>
            <Container
                className="vh-100 vw-100 mt-4 border-bottom rounded"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
                <h1 className="py-4 text-center">{id}</h1>
                <div className="row justify-content-around">
                    <div className="col-4">
                        <PokemonImagen id={id} />
                    </div>
                    <div className="col-4">
                        <h1>Stats</h1>
                        <PokemonStats id={id}/>
                        
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Resultado