import { useEffect, useState } from "react";

const ConsultaAPI = () =>{
        
    const endpoint = "https://pokeapi.co/api/v2/pokemon";
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        consultarinfo()
      }, []);
      const consultarinfo = async () => {
        const response = await fetch(endpoint)
        const data = await response.json()
        console.log(data)
        setPokemon(data.photos);
      }
}
export default ConsultaAPI;