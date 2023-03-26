import { useState, useEffect } from 'react';

const PokemonImagen = ({ id }) => {
    const [imagenUrl, setImagenUrl] = useState(null);

    useEffect(() => {
        const obtenerImagenPokemon = async () => {
            try {
                const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
                const respuesta = await fetch(url);
                const data = await respuesta.json();
                const imagenUrl = data.sprites.other['official-artwork'].front_default;
                setImagenUrl(imagenUrl);
            } catch (error) {
                console.log(`Error: ${error}`);
            }
        }
        obtenerImagenPokemon();
    }, [id]);

    return (
        <div>
            {imagenUrl ? (
                <img src={imagenUrl} alt={`Imagen del Pokémon con ID ${id}`} />
            ) : (
                <img src={process.env.PUBLIC_URL + '/src/img/img-carga.jpg'} alt="Cargando imagen..." />
            )}
        </div>
    );
}

export default PokemonImagen;