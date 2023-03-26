import { Container } from "react-bootstrap"
import '../App.css'
import { useParams } from "react-router-dom";
import PokemonImagen from "../components/PokemonImagen";
import PokemonStats from "../components/PokemonStats";

const Resultado = () => {
    const { id } = useParams();

    return (
        <>
            <Container
                className="vh-100 vw-100 mt-4 border-bottom rounded"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
                <h1 className="py-4 text-center">{id}</h1>
                <div className="row justify-content-around">
                    <div class="col-xs-12 col-sm-6">
                        <PokemonImagen id={id} />

                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <h1>Stats</h1>
                        <PokemonStats id={id} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Resultado