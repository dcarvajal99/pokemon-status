import { Container } from "react-bootstrap"
import { useState } from 'react';
import '../App.css'
import { useNavigate } from "react-router-dom"


const Pokemones = () => {
    const [id, setID] = useState([]);
    const navigate = useNavigate();
    const irAPokemon = () => {
        navigate(`/pokemones/${id}`);
    }
    return (
        <>
            <Container
                className=" text-center vh-100 vw-100 mt-4 border-bottom rounded"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
                <h1 className="py-4 text-center">Sección Pokémones</h1>
                <div className="row justify-content-around">
                    <div className="col-4">
                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/src/img/main-section-pokemon.png'} alt="Cargando imagen..." />

                    </div>
                    <div className="col-4">
                        <select className="form-control form-control-lg"
                            onChange={(e) => setID(e.target.value)}>
                            <option value="">Seleccione un Pokémon</option>
                            <option value="bulbasaur">bulbasaur</option>
                            <option value="ivysaur">ivysaur</option>
                            <option value="venusaur">venusaur</option>
                            <option value="charmander">charmander</option>
                            <option value="charizard">charizard</option>
                            <option value="squirtle">squirtle</option>
                            <option value="wartortle">wartortle</option>
                            <option value="blastoise">blastoise</option>
                            <option value="caterpie">caterpie</option>
                            <option value="metapod">metapod</option>
                            <option value="butterfree">butterfree</option>
                            <option value="weedle">weedle</option>
                            <option value="kakuna">kakuna</option>
                            <option value="beedrill">beedrill</option>
                        </select>
                        <div className="text-center my-2">
                            <button className="btn btn-warning "
                                onClick={irAPokemon} >buscar</button>
                        </div>
                    </div>

                </div>


            </Container>
        </>
    )
}

export default Pokemones