import { useState, useEffect } from 'react';

const PokemonStats = ({ id }) => {
    const [stats, setStats] = useState(null);
    const [types, setTypes] = useState(null)
    useEffect(() => {
        async function obtenerStatsPokemon() {
            try {
                const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
                const respuesta = await fetch(url);
                const data = await respuesta.json();
                const stats = data.stats.map((stat) => {
                    return {
                        nombre: stat.stat.name,
                        valor: stat.base_stat,
                    };
                });
                const types = data.types.map((type) => {
                    return {
                        nombre: type.type.name
                    };
                });
                setStats(stats);
                setTypes(types);
            } catch (error) {
                console.log(`Error: ${error}`);
            }
        }
        obtenerStatsPokemon();
    }, [id]);

    return (
        <div>
            {stats ? (

                <ul className=''>
                    {stats.map((stat) => (
                        <li style={{ "list-style": "none" }}
                            key={stat.nombre}>
                            <h3><strong>{stat.nombre}:</strong> {stat.valor}</h3>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{ width: `${(stat.valor * 100) / 150}%` }} aria-valuenow={(stat.valor * 100) / 150} aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Cargando stats...</p>
            )}
            <h3><strong>Type:</strong></h3>
            {stats ? (
                <ul className=''>
                    {types.map((type) => (
                        <li style={{ "list-style": "none" }}
                            key={type.nombre}>
                            <h4>{type.nombre}</h4>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Cargando stats...</p>
            )}
        </div>
    );
}

export default PokemonStats;